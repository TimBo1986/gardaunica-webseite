# Fortschritt — Umbenennung Garda Unica → Unica Benaco

Laufende Dokumentation der Rename-Tasks. Neueste Einträge oben.

Prüfwerkzeug für alle Tasks: `tools/rename_scan.sh` (rein lesend).
Selbsttest des Werkzeugs: `tools/rename_scan.sh --selftest`.

---

## WEB-01b — Fußzeile `confirmed.html`

**Branch:** `claude/web-01a` (kein eigener Branch)

`cf_foot` in `confirmed.html`, 4 Vorkommen: DOM plus DE/IT/EN-Wörterbuch.
„Garda Unica" → „Unica Benaco", der Rest der Zeile unverändert, auch die
Sprachvarianten „un prodotto di" / „a product by".

Zuordnung: isolierter Markenname in einer Signaturzeile, identisch zum
`.foot-sign` in `partner.html` aus WEB-01a §2b. Kein redaktioneller Text.
Damit ist der offene Punkt aus WEB-01a erledigt.

**Abnahme:** `garda[ _-]?unica` zeilenweise 114 → **110**, Negativkontrolle
**28 / 17 unverändert**, markup-tolerant alter Name **0**. Fußzeile im Browser
in DE/IT/EN geprüft, keine JS-Fehler.

Nicht angefasst: `cf_sub` („Wir melden uns, sobald Garda Unica startet.") sowie
`_title`, `og:title` und `og:description` derselben Seite — redaktioneller Text
bzw. Metatexte, gehören zu WEB-02.

---

## WEB-01a — Fußzeilen-Wortmarke, Signatur, canonical, Scan-Härtung

**Branch:** `claude/web-01a` (auf `claude/page-not-found-config-lja2hx` aufgesetzt)

**Geändert: 10 Vorkommen in 2 Dateien**

| Was | Datei | Vorkommen |
|---|---|---|
| Fußzeilen-Wortmarke `Garda <em style="…">Unica</em>` → `Unica <em style="…">Benaco</em>` | `index.html` (`foot_left`) | 4 |
| dieselbe | `partner.html` (`pfo_left`) | 4 |
| Signaturzeile `.foot-sign` | `partner.html` | 1 |
| `<link rel="canonical" href="https://unicabenaco.com">` ergänzt | `index.html` | 1 |

Das `style`-Attribut blieb unverändert und wanderte mit dem `<em>` auf das
zweite Wort. Die Escapes in den Wörterbüchern (`<em style=\"…\">`) sind intakt.

**Warum es diesen Nachtrag brauchte.** WEB-01 suchte mit `garda[ _-]?unica`
zeilenweise und zusätzlich nach dem Literal `Garda <em>Unica</em>`. Beides ist
blind für `Garda <em style="…">Unica</em>`: das erste Muster erlaubt zwischen
den Wörtern höchstens ein Trennzeichen, das zweite kennt kein Attribut. Der
Browsertest suchte `gardaunica` ohne Leerzeichen, gerendert steht dort aber
„Garda Unica" mit Leerzeichen. Zwei Gates, beide grün, beide am falschen Ort.

**Härtung des Prüfwerkzeugs.** `tools/rename_scan.sh` hat jetzt eine zweite
Musterklasse, markup-tolerant und dateiweise statt zeilenweise:

    garda(?:\s|&nbsp;|<[^>]{0,60}>){0,4}unica

Gespiegelt auch für den neuen Namen, damit auffällt, wenn eine Ersetzung die
Wortstellung zerschießt. Die alten zeilenweisen Muster bleiben unverändert
bestehen. `--selftest` fährt das Muster gegen `main` (Stand vor WEB-01) und
verlangt dort mindestens 13 Treffer; findet es weniger, ist es zu eng und
bricht mit Exit-Code 1 ab.

**Abnahme**

| Prüfung | Soll | Ist |
|---|---|---|
| `Garda <em` Literal, beliebiges Attribut | 0 | 0 |
| markup-tolerant, alter Name | 0 | 0 |
| markup-tolerant, neuer Name | 13 | 13 |
| `Unica <em>Benaco</em>` ohne Style | 5 | 5 |
| `<link rel="canonical">` auf den vier Inhaltsseiten | 4 | 4 |
| `garda[ _-]?unica` zeilenweise | ≈114 | 114 |
| `lago di garda|gardasee` | 28 unverändert | 28 |
| `peschiera` | 17 unverändert | 17 |

Fußzeile zusätzlich mit dem Auge kontrolliert: 4 Seiten × DE/IT/EN, keine
JS-Fehler.

**Abweichungen**

- Vorabprüfung meldete 9 statt 8 Zeilen `Garda <em`. Die neunte ist das
  Suchmuster in `tools/rename_scan.sh` selbst, keine Wortmarke. Der Scanner
  schließt sich seit WEB-01 per `--exclude=rename_scan.sh` aus.
- Der Selbsttest findet 13 Vorkommen, der Task nannte 7. Beides stimmt: 7
  Platzierungen, davon zwei Fußzeilen, die je viermal im Repo stehen
  (DOM + DE + IT + EN) → 5 + 8 = 13 Vorkommen.
- `confirmed.html` (`cf_foot`) trug weiterhin „Garda Unica · ein Produkt von
  LagoNord AI" — derselbe Signaturtyp wie die geänderte Zeile in
  `partner.html`, stand aber nicht in der Zielmenge dieses Tasks.
  **Mit WEB-01b nachgezogen.**

---

## WEB-01 — Domains, URLs, Mailadressen, Wortmarke

**Branch:** `claude/page-not-found-config-lja2hx`

**Geändert: 33 Zeilen in 8 Dateien, 41 Ersetzungen**

| alt | neu | Treffer |
|---|---|---|
| `https://www.gardaunica.com` | `https://unicabenaco.com` | 20 |
| `https://gardaunica.com` | `https://unicabenaco.com` | 1 |
| `gardaunica.com/` (Rest) | `unicabenaco.com/` | 3 |
| `info@gardaunica.com` | `info@unicabenaco.com` | 9 |
| `cristina@gardaunica.com` | `cristina@unicabenaco.com` | 3 |
| `Garda <em>Unica</em>` | `Unica <em>Benaco</em>` | 5 |

Ersetzungen inhaltsbasiert, nicht über Zeilennummern — die i18n-Wörterbücher
haben sich dadurch nicht verschoben.

Bewusst unangetastet: `CNAME`, `WAITLIST_ENDPOINT` in `assets/waitlist.js`
(dort ist nur ein Kommentar geändert), sämtliche Stylesheets, alle Assets.

Neu: `tools/rename_scan.sh` als Abnahme-Gate für WEB-01 … WEB-04, mit
Negativkontrollen für die Geografienamen „Lago di Garda" und „Peschiera",
die sich nicht ändern dürfen.

**Abweichungen**

- §7 nannte 5 Mailzeilen, tatsächlich 7 (beide Adressen) — von Tim freigegeben.
- §3/§4 nannten 4 Wortmarken in 32 Zeilen / 9 Dateien, tatsächlich 5 in
  33 Zeilen / 8 Dateien. Die fünfte war das Hero-Wortmark in `partner.html`
  — von Tim freigegeben. Neun Dateien wären es nur inklusive `CNAME`, die
  laut Vorgabe tabu war.
- Der `curl`-Host-Check war nicht durchführbar (Sandbox-Proxy liefert 403).
  Ersatzweise per DNS geprüft: `unicabenaco.com` und `www.unicabenaco.com`
  lösen beide auf `185.199.111.153` (GitHub Pages) auf. **Nach dem Deploy
  einmal live gegenprüfen**, ob `www.` sauber auf die Apex-Domain umleitet.

---

## Noch offen

- **WEB-02** — sichtbarer Fließtext, Titles, Descriptions, H1, FAQ
  (~110 Zeilen, gemeinsam mit Cristina). Dazu gehören auch die
  Mail-Betreffzeilen auf `/partner`.
- **WEB-03** — Bilder
- **WEB-04** — Partner-Flyer (PDF) und dessen Vorschaubilder
- **WEB-05** — Bestätigungslink in n8n
- `index.html` hat kein `<link rel="canonical">` → **mit WEB-01a erledigt**
