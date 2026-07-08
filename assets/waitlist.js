/* Garda Unica — Warteliste-Formular
 * Sendet {name, email, lang, source, consent} als JSON per POST an den
 * n8n-Webhook. n8n übernimmt Double-Opt-in (Brevo-Bestätigungsmail) und
 * leitet nach Klick auf https://gardaunica.com/confirmed weiter.
 * Erfolgs-Antwort: { "ok": true, "message": "..." }.
 */
(function () {
  "use strict";

  /* =====================================================================
   *  KONFIGURATION — n8n-Webhook (POST, application/json).
   * ===================================================================== */
  var WAITLIST_ENDPOINT = "https://n8n.lagonord.de/webhook/waitlist-signup";

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

        var hp = form.querySelector('input[name=hp_check]');
        var name = val(form.querySelector('input[name=name]'));
        var email = val(form.querySelector('input[name=email]'));
        var consentEl = form.querySelector('input[type=checkbox]');
        var consent = consentEl ? consentEl.checked : false;

        // Honeypot: von Bots ausgefüllt -> lautlos "erfolgreich" tun.
        // WICHTIG: Feldname muss autofill-neutral sein (nicht website/url/name/
        // email/tel/...), sonst befüllt Browser-Autofill es und echte Nutzer
        // werden fälschlich als Bot behandelt (Request wird verschluckt).
        if (hp && hp.value) {
          form.style.display = "none";
          if (msg) { msg.className = "wl-msg ok"; msg.innerHTML = dict.wl_success || ""; }
          return;
        }

        if (!name || !email || !consent) {
          if (form.reportValidity) form.reportValidity();
          return;
        }

        // Leichte E-Mail-Validierung: muss ein @ mit Text davor/danach haben.
        if (!/.+@.+/.test(email)) {
          if (msg) { msg.className = "wl-msg err"; msg.innerHTML = dict.wl_bademail || dict.wl_err || ""; }
          return;
        }

        function done(ok) {
          if (ok && form) form.style.display = "none";   // Erfolg: Formular ausblenden
          if (msg) {
            msg.className = "wl-msg " + (ok ? "ok" : "err");
            msg.innerHTML = (ok ? dict.wl_success : dict.wl_err) || "";
          }
          if (btn) btn.disabled = false;
        }

        if (msg) { msg.className = "wl-msg"; msg.textContent = "…"; }
        if (btn) btn.disabled = true;

        var payload = {
          name: name,
          email: email,
          lang: lang,
          source: opts.source || "",
          consent: true
        };

        if (!WAITLIST_ENDPOINT) {
          console.error("[GardaWaitlist] WAITLIST_ENDPOINT ist nicht gesetzt (assets/waitlist.js).");
          done(false);
          return;
        }

        // n8n erwartet application/json und antwortet mit {ok:true}. Nur dann
        // gilt die Anmeldung als angenommen; alles andere (non-ok, Netzwerk-
        // oder CORS-Fehler) fuehrt zur neutralen Fehlermeldung.
        fetch(WAITLIST_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        })
          .then(function (r) { return r.text(); })
          .then(function (text) {
            var ok = false;
            try { ok = JSON.parse(text).ok === true; } catch (e) { ok = false; }
            if (!ok) console.error("[GardaWaitlist] Unerwartete Antwort vom Endpoint:", text.slice(0, 300));
            done(ok);
          })
          .catch(function (err) {
            console.error("[GardaWaitlist] Netzwerk-/CORS-Fehler:", err);
            done(false);
          });
      });
    }
  };
})();
