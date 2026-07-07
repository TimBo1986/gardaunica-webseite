/**
 * Garda Unica — Warteliste-Backend (Google Apps Script)
 * -----------------------------------------------------
 * Speichert Eintragungen in einem Google Sheet und verschickt eine
 * Double-Opt-in-Bestätigungsmail in der Sprache des Nutzers (DE/IT/EN).
 *
 * Einrichtung: siehe backend/README.md
 *
 * Datenfluss:
 *   1. Formular (POST)  -> doPost()  : Zeile mit Status "pending" + Token, DOI-Mail raus
 *   2. Link in der Mail -> doGet()   : Token bestätigt -> Status "confirmed", Danke-Seite
 */

// ==== KONFIGURATION ========================================================
var SHEET_NAME  = 'Warteliste';                 // Tab-Name im gebundenen Sheet
var FROM_NAME   = 'Garda Unica';                // Absendername
var FROM_ADDRESS = 'info@gardaunica.com';       // Absenderadresse (siehe Hinweis unten)
var REPLY_TO    = 'info@gardaunica.com';        // Antwortadresse
var LOGO_URL    = 'https://www.gardaunica.com/assets/og.jpg';
// FROM_ADDRESS funktioniert nur, wenn diese Adresse im ausführenden Google-
// Konto als "Senden als"-Alias bestätigt ist (Gmail -> Einstellungen ->
// Konten -> Senden als) ODER das Script direkt unter diesem Workspace-Konto
// läuft. Ist die Adresse kein bestätigter Alias, sendet Google automatisch
// von der Konto-Adresse (Fallback) – es gibt keinen Fehler.
// ===========================================================================

function doPost(e) {
  try {
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var name  = String(data.name  || '').trim().slice(0, 120);
    var email = String(data.email || '').trim().toLowerCase().slice(0, 160);
    var lang  = ['de', 'it', 'en'].indexOf(String(data.lang || 'de')) >= 0 ? data.lang : 'de';
    var source = String(data.source || '').slice(0, 40);

    if (!name || !isValidEmail(email) || data.consent !== true) {
      return json({ ok: false, error: 'invalid' });
    }

    var sheet = getSheet();
    var existing = findRowByEmail(sheet, email);

    // Bereits bestätigt? Dann nichts weiter tun (idempotent).
    if (existing && existing.status === 'confirmed') {
      return json({ ok: true, status: 'already_confirmed' });
    }

    var token = Utilities.getUuid();
    var now = new Date();

    if (existing) {
      // Erneuter Versuch vor Bestätigung: Token/Zeit auffrischen.
      sheet.getRange(existing.row, 1, 1, 7).setValues([[
        now, name, email, lang, 'pending', token, source
      ]]);
    } else {
      sheet.appendRow([now, name, email, lang, 'pending', token, source]);
    }

    sendConfirmationEmail(email, name, lang, token);
    return json({ ok: true, status: 'pending' });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  var token = e && e.parameter ? e.parameter.confirm : null;
  if (!token) return htmlPage('<h1>Garda Unica</h1>');

  var sheet = getSheet();
  var found = findRowByToken(sheet, token);
  if (!found) return htmlPage(confirmPage('en', false));

  if (found.status !== 'confirmed') {
    sheet.getRange(found.row, 5).setValue('confirmed');           // Spalte 5 = status
    sheet.getRange(found.row, 8).setValue(new Date());            // Spalte 8 = confirmed_at
  }
  return htmlPage(confirmPage(found.lang || 'de', true));
}

// ==== Sheet-Helfer =========================================================
function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['created_at', 'name', 'email', 'lang', 'status', 'token', 'source', 'confirmed_at']);
  }
  return sheet;
}

function findRowByEmail(sheet, email) {
  var values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][2]).toLowerCase() === email) {
      return { row: i + 1, status: values[i][4], lang: values[i][3] };
    }
  }
  return null;
}

function findRowByToken(sheet, token) {
  var values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][5]) === token) {
      return { row: i + 1, status: values[i][4], lang: values[i][3], email: values[i][2] };
    }
  }
  return null;
}

// ==== Mail =================================================================
function sendConfirmationEmail(email, name, lang, token) {
  var url = ScriptApp.getService().getUrl() + '?confirm=' + encodeURIComponent(token);
  var t = MAIL[lang] || MAIL.de;
  var html = mailTemplate(t, name, url);

  var options = { htmlBody: html, name: FROM_NAME, replyTo: REPLY_TO };

  // Nur einen bestätigten "Senden als"-Alias als Absender setzen, sonst
  // sendet GmailApp automatisch von der Konto-Adresse.
  if (FROM_ADDRESS) {
    try {
      if (GmailApp.getAliases().indexOf(FROM_ADDRESS) >= 0) {
        options.from = FROM_ADDRESS;
      }
    } catch (e) { /* GmailApp nicht autorisiert -> Fallback auf Konto-Adresse */ }
  }

  GmailApp.sendEmail(email, t.subject, '', options);
}

var MAIL = {
  de: {
    subject: 'Bitte bestätige deine Anmeldung — Garda Unica',
    hi: 'Ciao',
    body: 'fast geschafft! Bitte bestätige mit einem Klick, dass wir dich zum Start von Garda Unica benachrichtigen dürfen.',
    button: 'Anmeldung bestätigen',
    ps: 'Wenn du dich nicht angemeldet hast, ignoriere diese E-Mail einfach.',
    foot: 'Garda Unica · ein Produkt von LagoNord AI'
  },
  it: {
    subject: 'Conferma la tua iscrizione — Garda Unica',
    hi: 'Ciao',
    body: 'ci siamo quasi! Conferma con un clic che possiamo avvisarti al lancio di Garda Unica.',
    button: 'Conferma iscrizione',
    ps: 'Se non ti sei iscritto, ignora semplicemente questa email.',
    foot: 'Garda Unica · un prodotto di LagoNord AI'
  },
  en: {
    subject: 'Please confirm your sign-up — Garda Unica',
    hi: 'Hi',
    body: "almost there! Please confirm with one click that we may notify you when Garda Unica launches.",
    button: 'Confirm sign-up',
    ps: "If you didn't sign up, simply ignore this email.",
    foot: 'Garda Unica · a product by LagoNord AI'
  }
};

function mailTemplate(t, name, url) {
  return '' +
    '<div style="font-family:Helvetica,Arial,sans-serif;max-width:480px;margin:0 auto;color:#1A2540">' +
      '<div style="text-align:center;padding:8px 0 20px">' +
        '<span style="font-family:Georgia,serif;font-size:24px;font-weight:600">Garda <em style="color:#B54327">Unica</em></span>' +
      '</div>' +
      '<p style="font-size:16px;line-height:1.6">' + escapeHtml(t.hi) + ' ' + escapeHtml(name) + ',<br>' + t.body + '</p>' +
      '<p style="text-align:center;margin:28px 0">' +
        '<a href="' + url + '" style="display:inline-block;background:#B54327;color:#FAF5E8;text-decoration:none;font-weight:600;font-size:15px;padding:14px 30px;border-radius:999px">' + escapeHtml(t.button) + '</a>' +
      '</p>' +
      '<p style="font-size:13px;color:#8A93AB;line-height:1.6">' + escapeHtml(t.ps) + '</p>' +
      '<hr style="border:none;border-top:1px solid rgba(26,37,64,.12);margin:24px 0">' +
      '<p style="font-size:12px;color:#8A93AB;text-align:center">' + escapeHtml(t.foot) + '</p>' +
    '</div>';
}

// ==== Bestätigungsseite (nach Klick) =======================================
function confirmPage(lang, ok) {
  var C = {
    de: { ok_h: 'Danke — du bist dabei!', ok_p: 'Deine Anmeldung ist bestätigt. Wir melden uns, sobald Garda Unica startet.',
          no_h: 'Link ungültig', no_p: 'Dieser Bestätigungslink ist ungültig oder abgelaufen.', back: 'Zur Website' },
    it: { ok_h: 'Grazie — ci sei!', ok_p: 'La tua iscrizione è confermata. Ti scriviamo appena Garda Unica parte.',
          no_h: 'Link non valido', no_p: 'Questo link di conferma non è valido o è scaduto.', back: 'Al sito' },
    en: { ok_h: "Thanks — you're in!", ok_p: "Your sign-up is confirmed. We'll be in touch the moment Garda Unica launches.",
          no_h: 'Invalid link', no_p: 'This confirmation link is invalid or has expired.', back: 'To the website' }
  };
  var t = C[lang] || C.de;
  var h = ok ? t.ok_h : t.no_h;
  var p = ok ? t.ok_p : t.no_p;
  return '' +
    '<div style="max-width:440px;margin:12vh auto 0;padding:0 24px;text-align:center;font-family:Helvetica,Arial,sans-serif;color:#1A2540">' +
      '<div style="font-family:Georgia,serif;font-size:24px;font-weight:600;margin-bottom:24px">Garda <em style="color:#B54327">Unica</em></div>' +
      '<h1 style="font-family:Georgia,serif;font-weight:500;font-size:30px;margin:0 0 12px">' + escapeHtml(h) + '</h1>' +
      '<p style="font-size:16px;line-height:1.6;color:#4A5570">' + escapeHtml(p) + '</p>' +
      '<p style="margin-top:28px"><a href="https://www.gardaunica.com/app" target="_top" style="display:inline-block;background:#B54327;color:#FAF5E8;text-decoration:none;font-weight:600;padding:13px 28px;border-radius:999px">' + escapeHtml(t.back) + '</a></p>' +
    '</div>';
}

// ==== Utils ================================================================
function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
function htmlPage(inner) {
  return HtmlService.createHtmlOutput('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="margin:0;background:#FAF5E8">' + inner + '</body>')
    .setTitle('Garda Unica');
}
function isValidEmail(s) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s); }
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
