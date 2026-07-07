# Warteliste-Backend (Google Apps Script)

Speichert die Warteliste-Eintragungen in einem **Google Sheet** und verschickt
eine **Double-Opt-in-Bestätigungsmail** in der Sprache des Nutzers (DE/IT/EN).
Kein zusätzlicher Dienst, keine Kosten – läuft komplett in Google Workspace.

## Einrichtung (einmalig, ca. 5 Minuten)

1. **Google Sheet anlegen**
   - Neues Google Sheet erstellen, z. B. „Garda Unica – Warteliste".
   - Menü **Erweiterungen → Apps Script**.

2. **Code einfügen**
   - Im Apps-Script-Editor den Inhalt von [`Code.gs`](./Code.gs) komplett
     einfügen (die Standard-`Code.gs` ersetzen). Speichern.
   - Oben bei Bedarf `REPLY_TO` anpassen (Standard: `info@gardaunica.com`).

3. **Als Web-App bereitstellen**
   - **Bereitstellen → Neue Bereitstellung → Typ: Web-App**.
   - *Ausführen als:* **Ich**
   - *Zugriff:* **Jeder** (nötig, damit das Formular ohne Login posten kann).
   - Bereitstellen, Berechtigungen erteilen (einmalig, Google fragt danach).
   - Die angezeigte **Web-App-URL** kopieren
     (Form: `https://script.google.com/macros/s/AKfycb…/exec`).

4. **URL in die Website eintragen**
   - In [`assets/waitlist.js`](../assets/waitlist.js) die Konstante
     `WAITLIST_ENDPOINT` auf diese URL setzen:
     ```js
     var WAITLIST_ENDPOINT = "https://script.google.com/macros/s/AKfycb…/exec";
     ```
   - Committen & pushen. Fertig – Formular auf Startseite **und** `/app` sendet
     jetzt an dieses Backend.

## Was passiert im Betrieb

| Schritt | Aktion |
|--------|--------|
| Nutzer sendet Formular | `doPost` legt eine Zeile mit Status `pending` + Token an und schickt die DOI-Mail in der passenden Sprache |
| Nutzer klickt Link in der Mail | `doGet` setzt den Status auf `confirmed`, zeigt eine Danke-Seite |
| Nutzer trägt sich doppelt ein | Vor Bestätigung: Token wird aufgefrischt. Nach Bestätigung: nichts (idempotent) |

Das Sheet erhält die Spalten:
`created_at · name · email · lang · status · token · source · confirmed_at`

> **DSGVO:** Für den Newsletter/Launch-Versand nur Kontakte mit
> `status = confirmed` verwenden – das ist der bestätigte Double-Opt-in.

## Bei Änderungen am Script

Nach dem Bearbeiten von `Code.gs`: **Bereitstellen → Bereitstellungen verwalten
→ (Stift) → Neue Version → Bereitstellen**. Die URL bleibt gleich.

## Alternative Backends

Das Formular ist backend-agnostisch: es sendet
`{ name, email, lang, consent, source, page }` als JSON-POST. Wer statt Apps
Script z. B. **n8n** oder **Brevo** nutzen möchte, trägt einfach dessen
Webhook-URL in `WAITLIST_ENDPOINT` ein – der Empfänger muss dann Speichern und
DOI-Mail selbst übernehmen (`lang` steuert die Mail-Sprache).
