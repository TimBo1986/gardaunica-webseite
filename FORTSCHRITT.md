# Fortschritt — Umbenennung Garda Unica → Unica Benaco

Laufende Dokumentation der Rename-Tasks. Neueste Einträge oben.

Prüfwerkzeug für alle Tasks: `tools/rename_scan.sh` (rein lesend).
Selbsttest des Werkzeugs: `tools/rename_scan.sh --selftest`.

---

## WEB-06 — Descriptor „Lago di Garda" in der Wortmarke

**Branch:** `claude/web-06`, Basis `main` auf `fdbc13d`
**Variante A** (gestapelt) · **HERO_MITMACHEN = ja**

Beide Parameter waren in der Vorgabe leer. Nicht selbst gewählt, sondern bei
Tim erfragt — so verlangt es §1 des Tasks.

**Fünf Stellen, Werte wörtlich aus §3 übernommen:**

| Datei | Zeile | Element |
|---|---|---|
| `index.html` | 315 | `<a class="logo">` |
| `app.html` | 98 | `<a class="logo">` |
| `partner.html` | 188 | `<a class="logo">` |
| `partner.html` | 204 | `<div class="hero-mark">` (HERO_MITMACHEN) |
| `confirmed.html` | 61 | `<a class="logo">` |

Markup je Stelle: `<span class="logo-desc">Lago di Garda</span>` innerhalb des
bestehenden Elements, `href` unverändert. CSS unmittelbar nach der jeweiligen
`.logo em`-Zeile eingefügt, in `partner.html` zusätzlich
`.hero-mark .logo-desc` nach `.hero-mark em`.

**Der Descriptor wird nicht übersetzt.** Kein `data-i18n`, kein
Wörterbucheintrag, keine Fassung „Gardasee" oder „Lake Garda" — es ist ein
Ortsname im Markenlogo, kein Satz. Im Browser in allen drei Sprachen
identisch geprüft; `setLang()` fasst das Element nicht an.

**Abnahme**

| Prüfung | Soll | Ist |
|---|---|---|
| Geografie (`lago di garda\|gardasee`) | 44 | **44** |
| `peschiera` | 17 unverändert | **17** |
| alter Name zeilenweise | 4 unverändert | **4** |
| markup-tolerant, alter Name | 0 | **0** |
| `Lago di Garda` im Descriptor | 5 | **5** |
| `data-i18n` am Descriptor | 0 | **0** |

**Nav-Höhe, gemessen gegen `main`** — die Vorschau kündigte ~7 px Zuwachs an,
tatsächlich sind es 0 bis 1 px. Der gestapelte Descriptor passt in die Höhe,
die die Warteliste-Schaltfläche ohnehin vorgibt:

| Seite | Desktop | Handy 380 px |
|---|---|---|
| `index.html` | 69 → 69 px | 64 → 64 px |
| `app.html` | 70 → 71 px | 70 → 71 px |
| `partner.html` | 66 → 66 px | 64 → 64 px |
| `confirmed.html` | 70 → 71 px | 70 → 71 px |

Bei 380 px kein Umbruch, keine Überlappung mit der Schaltfläche, keine
JS-Fehler.

**Beobachtung, nicht geändert:** Auf `/partner` stehen im Seitenkopf jetzt
zwei Versalzeilen direkt untereinander — der Descriptor `LAGO DI GARDA` in
Grau und darunter die bestehende Eyebrow-Zeile („Für Weingüter und Ölmühlen
am Südufer") in Terracotta. Das ist eine Folge von `HERO_MITMACHEN = ja`, die
die Vorgabe nicht vorhergesehen hat. Nichts ist kaputt, und „optimieren" wäre
in diesem Task ausdrücklich verboten — Tim und Cristina entscheiden, ob das so
bleibt.

Zwei getrennte Commits: Arbeit und Messlatte wurden nicht gemeinsam bewegt.

---

## WEB-02 — Sichtbarer Text DE/IT/EN

**Branch:** `claude/web-02`, Basis `main` auf `6f743af`

**108 Ersetzungen in 9 Dateien.** 97 nach der Grundregel „`Garda Unica` →
`Unica Benaco`, sonst ändert sich am Satz nichts", 11 nach der wörtlichen
Vorgabeliste. Keine eigenen Formulierungen, keine Stil-Angleichungen; die
Claims (`Dein See. Dein Moment.` und Übersetzungen) sind unangetastet.

| Datei | Grundregel | wörtlich |
|---|---|---|
| `index.html` | 43 | 5 |
| `app.html` | 18 | 5 |
| `partner.html` | 21 | — |
| `confirmed.html` | 11 | — |
| `app/index.html` | — | 1 |
| `partner/index.html`, `confirmed/index.html` | je 1 | — |
| `assets/waitlist.js`, `assets/lang.js` | je 1 (Header-Kommentar) | — |

**Die elf wörtlichen Stellen** bekommen den Marken-Descriptor
`Unica Benaco · Lago di Garda`, damit das Wort *Garda* nicht aus den
Seitentiteln verschwindet: `index.html` `<title>`, `og:title` und `_title`
DE/IT/EN; `app.html` `<title>`, `og:title` und `_title` DE/IT/EN;
`app/index.html` `<title>`. `partner.html` und `confirmed.html` bleiben
bewusst ohne Descriptor — die Partner-Titel tragen ihre Garda-Referenz
selbst (`basso Garda`, `südlichen Gardasee`), die Confirmed-Seite ist kein
Suchziel.

**Abnahme**

| Prüfung | Soll | Ist |
|---|---|---|
| `garda[ _-]?unica` zeilenweise | 0 | **4** — siehe Abweichung |
| markup-tolerant, alter Name | 0 | **0** |
| markup-tolerant, neuer Name | 13 | **13** |
| `lago di garda\|gardasee` | 38 | **39** — siehe Abweichung |
| `peschiera` | 17 unverändert | **17** |

Browser: 4 Seiten × DE/IT/EN, FAQ aufgeklappt, `mailto:`-Betreff auf
`/partner` geprüft (`Unica Benaco — unser Weingut` / `la nostra cantina` /
`our winery`), Untertitel auf `/confirmed` geprüft. **0** sichtbares
„Garda Unica" in allen Sprachen, keine JS-Fehler.

**Abweichungen**

- **`garda[ _-]?unica` bleibt bei 4, nicht 0.** Alle vier stehen in
  `partner.html` und sind `href`-Pfade auf
  `/assets/garda-unica-partner-cantine-it.pdf` — der Dateiname des Flyers,
  kein sichtbarer Text. Sie mitzuändern hieße die PDF-Datei umzubenennen,
  und die ist in diesem Task ausdrücklich tabu. Fällt mit WEB-04.
- **Geografie landet bei 39, nicht 38.** Die Vorgabe rechnete mit zehn
  Descriptor-Einfügungen („5 in index, 5 in app/app-stub"), die wörtliche
  Liste enthält aber elf: `app.html` allein hat fünf (`<title>`, `og:title`,
  3 × `_title`), der Stub `app/index.html` kommt als sechste dazu. Gezählt
  statt Sollwert angepasst: 28 + 11 = 39, aufgeschlüsselt index 5, app 5,
  Stub 1. Keine der elf Zielzeilen trug vorher schon Geografie.
- **OFFEN-Posten (holpernde Sätze): keine.** Der Name steht überall als
  Subjekt oder Objekt im Satz, kein Genitiv, kein Kompositum, kein Artikel
  davor. Die Kurzform „Unica" allein (z. B. `faq4_a`: „Unica versteht und
  antwortet auf Deutsch") stand schon vor der Umbenennung so da und trägt
  weiter.

Am Prüfwerkzeug nachgezogen: die Soll-Werte für `M1` und die
Geografie-Kontrolle, damit WEB-03/04 kein veraltetes Gate erbt.

### WEB-02 · Gegenlesen Cristina

Die Fassungen gelten bis dahin als `AUTO — Cristina-Gegenlesen offen`.

1. **OFFEN** — Die fünf Descriptor-Titel aus der Vorgabeliste. Insbesondere
   IT: `Unica Benaco · Lago di Garda — Il tuo lago. Il tuo momento.` doppelt
   das Wort *lago*. Bewusst so gelassen, weil die Alternative den Claim
   ändern würde. Cristinas Ohr entscheidet.
2. **OFFEN** — Die IT-Sätze mit dem Namen mitten im Satz:
   `tm_story3` („il sapere che vive dentro Unica Benaco"),
   `c_short` („la conoscenza locale dietro Unica Benaco"),
   `wl_h2` („Presto Unica Benaco ti mostrerà il tuo lago proprio così."),
   `pi_2` („Unica Benaco nasce a San Benedetto di Lugana"),
   `t_long` („i contatti di cui vive Unica Benaco").
3. **OFFEN** — Alle EN-Wörterbuchtexte pauschal. Die waren schon vor der
   Umbenennung maschinell erzeugt.
4. **OFFEN** — `pk_subject` und `pk_wa` in allen drei Sprachen. Das sind die
   Texte, die Partner tatsächlich absenden.

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

- **WEB-03** — Bilder
- **WEB-04** — Partner-Flyer (PDF) und dessen Vorschaubilder. Dabei fallen
  auch die vier verbliebenen `href`-Pfade auf
  `/assets/garda-unica-partner-cantine-it.pdf` in `partner.html`.
- **WEB-05** — Bestätigungslink in n8n
- `index.html` hat kein `<link rel="canonical">` → **mit WEB-01a erledigt**
