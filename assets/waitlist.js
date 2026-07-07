/* Garda Unica — Warteliste-Formular
 * Backend-agnostisch: sendet {name, email, lang, consent, source} als JSON
 * per POST an WAITLIST_ENDPOINT. Speichern + Double-Opt-in-Mail übernimmt
 * das Backend (empfohlen: Google Apps Script -> siehe /backend).
 */
(function () {
  "use strict";

  /* =====================================================================
   *  KONFIGURATION — hier die Google-Apps-Script Web-App-URL eintragen.
   *  Beispiel: "https://script.google.com/macros/s/AKfycb.../exec"
   *  Solange leer, zeigt das Formular die Erfolgsmeldung, speichert aber
   *  noch nichts (praktisch für die Vorschau vor dem Go-Live).
   * ===================================================================== */
  var WAITLIST_ENDPOINT = "";

  function val(el) { return el && typeof el.value === "string" ? el.value.trim() : ""; }

  window.GardaWaitlist = {
    endpoint: WAITLIST_ENDPOINT,
    init: function (opts) {
      opts = opts || {};
      var form = document.getElementById(opts.formId || "wlForm");
      if (!form) return;
      var msg = document.getElementById(opts.msgId || "wlMsg");
      var btn = form.querySelector('button[type=submit]');
      var getDict = opts.getDict || function () { return {}; };
      var getLang = opts.getLang || function () { return document.documentElement.lang || "de"; };

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var lang = getLang();
        var dict = getDict(lang) || {};

        var hp = form.querySelector('input[name=website]');
        var name = val(form.querySelector('input[name=name]'));
        var email = val(form.querySelector('input[name=email]'));
        var consentEl = form.querySelector('input[type=checkbox]');
        var consent = consentEl ? consentEl.checked : false;

        // Honeypot: von Bots ausgefüllt -> lautlos "erfolgreich" tun.
        if (hp && hp.value) {
          if (msg) { msg.className = "wl-msg ok"; msg.innerHTML = dict.wl_success || ""; }
          form.reset();
          return;
        }

        if (!name || !email || !consent) {
          if (form.reportValidity) form.reportValidity();
          return;
        }

        function done(ok) {
          if (msg) {
            msg.className = "wl-msg " + (ok ? "ok" : "err");
            msg.innerHTML = (ok ? dict.wl_success : dict.wl_err) || "";
          }
          if (ok) form.reset();
          if (btn) btn.disabled = false;
        }

        if (msg) { msg.className = "wl-msg"; msg.textContent = "…"; }
        if (btn) btn.disabled = true;

        var payload = {
          name: name,
          email: email,
          lang: lang,
          consent: true,
          source: opts.source || "",
          page: location.pathname
        };

        if (!WAITLIST_ENDPOINT) {
          console.warn("[GardaWaitlist] WAITLIST_ENDPOINT ist noch nicht gesetzt (assets/waitlist.js).");
          done(true);
          return;
        }

        // text/plain vermeidet den CORS-Preflight -> funktioniert direkt mit
        // Google Apps Script Web Apps. Das Backend liest e.postData.contents.
        fetch(WAITLIST_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload)
        })
          .then(function (r) { return r.text(); })
          .then(function () { done(true); })
          .catch(function () { done(false); });
      });
    }
  };
})();
