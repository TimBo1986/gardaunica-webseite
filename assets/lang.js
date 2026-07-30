/* Garda Unica — Spracherkennung (gemeinsam für alle Seiten)
 *
 * Reihenfolge der Signale, absteigende Priorität:
 *   1. ?lang=xx            — explizite Wahl, gewinnt immer
 *   2. gemerkte Wahl        — wer einmal umgeschaltet hat, bekommt seine Sprache
 *   3. Browsersprachen      — ALLE Präferenzen, nicht nur die erste
 *   4. Land/Region          — nur als Tiebreaker, wenn die Sprache nichts hergibt
 *   5. Fallback: en
 *
 * Warum Land NICHT das Hauptsignal ist: Der QR-Code hängt in Italien, gescannt
 * wird er überwiegend von deutschsprachigen Gästen. Nach Land zu entscheiden
 * würde genau dieser Zielgruppe Italienisch zeigen. Die Browsersprache trifft
 * die tatsächliche Präferenz — das Land hilft nur, wenn sie unbekannt ist
 * (z. B. Browser auf Französisch: Region IT -> Italienisch statt Englisch).
 */
(function () {
  "use strict";

  var STORE_KEY = "gu_lang";

  // Zeitzone -> Land, für die für uns relevanten Regionen
  var TZ_REGION = {
    "Europe/Rome": "IT", "Europe/Vatican": "IT", "Europe/San_Marino": "IT",
    "Europe/Berlin": "DE", "Europe/Busingen": "DE",
    "Europe/Vienna": "AT", "Europe/Zurich": "CH",
    "Europe/Vaduz": "LI", "Europe/Luxembourg": "LU"
  };
  // Land -> Sprache
  var REGION_LANG = { IT: "it", DE: "de", AT: "de", CH: "de", LI: "de", LU: "de" };

  function fromQuery(supported) {
    try {
      var q = new URLSearchParams(window.location.search).get("lang");
      if (q) {
        q = String(q).slice(0, 2).toLowerCase();
        if (supported.indexOf(q) >= 0) return q;
      }
    } catch (e) {}
    return "";
  }

  function fromStore(supported) {
    try {
      var s = localStorage.getItem(STORE_KEY);
      if (s && supported.indexOf(s) >= 0) return s;
    } catch (e) {}
    return "";
  }

  function fromBrowser(supported) {
    var list = [];
    try {
      if (navigator.languages && navigator.languages.length) list = navigator.languages;
      else if (navigator.language) list = [navigator.language];
    } catch (e) {}
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i] || "").slice(0, 2).toLowerCase();
      if (supported.indexOf(code) >= 0) return code;
    }
    return "";
  }

  function region() {
    // a) Region aus dem Locale (de-AT -> AT)
    try {
      var m = String(navigator.language || "").match(/[-_]([A-Za-z]{2})$/);
      if (m) return m[1].toUpperCase();
    } catch (e) {}
    // b) sonst über die Zeitzone (verrät das Land, ohne IP-Abfrage)
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (TZ_REGION[tz]) return TZ_REGION[tz];
    } catch (e) {}
    return "";
  }

  function fromRegion(supported) {
    var lang = REGION_LANG[region()] || "";
    return supported.indexOf(lang) >= 0 ? lang : "";
  }

  window.GardaLang = {
    /* Ermittelt die Startsprache. supported: z.B. ["de","it","en"] */
    detect: function (supported, fallback) {
      supported = supported || ["de", "it", "en"];
      fallback = fallback || "en";
      var q = fromQuery(supported);
      if (q) { this.remember(q); return q; }
      return fromStore(supported)
          || fromBrowser(supported)
          || fromRegion(supported)
          || fallback;
    },
    /* Merkt die Wahl, damit sie beim nächsten Besuch gilt */
    remember: function (lang) {
      try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    },
    /* Nur für Diagnose/Tests */
    debug: function () {
      return {
        query: fromQuery(["de", "it", "en"]),
        stored: fromStore(["de", "it", "en"]),
        browser: fromBrowser(["de", "it", "en"]),
        region: region(),
        byRegion: fromRegion(["de", "it", "en"])
      };
    }
  };
})();
