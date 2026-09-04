# Fortschritt — Umbenennung Garda Unica → Unica Benaco

Laufende Dokumentation der Rename-Tasks. Neueste Einträge oben.

Prüfwerkzeug für alle Tasks: `tools/rename_scan.sh` (rein lesend).
Selbsttest des Werkzeugs: `tools/rename_scan.sh --selftest`.

---

## Spec 0001 — Drei Pfeiler und Produktbeweis

**Branch:** `feature/pfeiler-v2`, Basis `main` auf `44b42e2`
**Vorgabe:** `docs/specs/0001-pfeiler-und-produktbeweis.md`
**Zehn Commits**, einer je Änderung, plus diese Notiz. Alles in `index.html`,
die eine Datei bleibt — bis auf das Prüfwerkzeug und diese Datei.

Kein Rename-Task — die erste Arbeit in diesem Protokoll, die es nicht ist. Sie
steht trotzdem hier, weil sie zwei Zähler des Prüfwerkzeugs bewegt und WEB-03
und WEB-04 sonst ein veraltetes Gate erben.

### Was umgesetzt ist

| Änderung | Ergebnis |
|---|---|
| Ä1 | Drei Pfeiler: Planer+Territorio · Diario · Cerchio. `#erlebnisse` aufgegangen |
| Ä2 | Cerchio auf den Stand seit Juli 2026: Wochen-Kohorte, sieben Tage, neuer Kreis |
| Ä3 | Pfeiler 1 mit `oggi_tipp.jpg`; Pfeiler 2 und 3 als gekennzeichnete Plätze |
| Ä4 | Hero zeigt `territorio_map.jpg` statt `oggi_greeting.jpg` |
| Ä5 | Vignette 01 auf Paare mit Hund, DE/IT/EN |
| Ä6 | **nur vorbereitet** — der Saisonsatz gehört Cristina, siehe unten |
| Ä7 | Mission mit der Behandlung von 21:00; dunkles Band bleibt in voller Breite |
| Ä8 | `ho_*`, `ab_*`, `wl_cta` als ausgesetzt gekennzeichnet, nichts gelöscht |
| — | Vier Foto-Plätze (Querformat), von Tim bestellt, außerhalb der Spec |

**Die Copy-Regel ist eingehalten.** Neue Copy entstand an genau den drei Stellen,
die die Spec dafür vorsieht: Ä1 Pfeiler 2 (`di_h`/`di_p`), Ä2 Cerchio
(`cr_h`/`cr_p`), Ä5 Vignette 01 (`pb_v1_p`). Alles andere ist wortgleich umgezogen.
Kein Wörterbuchwert aus dem Vorstand ist verschwunden — auch die abgelösten
nicht: sie stehen ausgesetzt und kommentiert weiter in der Datei.

### Abnahme

| Kriterium | Ist |
|---|---|
| 1 · drei Pfeiler mit je einem Bildschirm | **teilweise** — `diario_raster.jpg` fehlt noch |
| 2 · Cerchio-Bild ohne Persona-Karte | **erfüllt** — alte Aufnahme raus, nicht ersetzt |
| 3 · kein Satz gelöscht ohne Inhalt anderswo | **erfüllt**, maschinell geprüft |
| 4 · alle neuen Texte in IT und EN | **erfüllt**, im Browser durchgeschaltet |
| 5 · keine neuen externen Requests | **erfüllt** — dieselben sechs Verweise |
| 6 · Bilder lokal, lazy, unter der Grenze | **erfüllt** für alles Vorhandene |
| 7 · Kontrast neuer Elemente ≥ 4.5:1 | **erfüllt** |
| 8 · 390 / 768 / 1440 px ohne Umbrüche | **erfüllt**, je in DE, IT und EN |
| 9 · Arbeitsstand in der Commit-Meldung | **erfüllt** |

Zusätzlich je Commit maschinell geprüft: Inline-JS syntaktisch gültig, alle 127
`data-i18n`-Schlüssel des DOM in allen drei Wörterbüchern vorhanden, kein Wert
aus dem Vergleichsstand verloren, kein `<img>` ohne lokale Quelle. Im Browser:
keine JS-Fehler, Chat-Player läuft (4 Nachrichten, `showAll()` bei reduzierter
Bewegung), FAQ, Bio-Modal und Warteliste unberührt.

### Abweichungen

- **Die Badges heißen weiter „Säule 1/2/3"** (IT „Pilastro", EN „Pillar"), nicht
  „Pfeiler". „Pfeiler" ist die Sprache der Spec, nicht die der Seite; sie
  umzubenennen wäre eine Copy-Änderung und von der Copy-Regel nicht gedeckt.
- **Ä3 Tabelle, Pfeiler 1.** Die Spec nennt für Pfeiler 1 die
  Territorio-Übersicht, Ä4 schickt genau dieselbe Aufnahme in den Hero. Statt
  sie zu doppeln, zeigt Pfeiler 1 `oggi_tipp.jpg` — den Entscheidungs-Screen,
  der zu `ls2_p` gehört, das mit Ä1 dorthin gezogen ist. Der Territorio-Beweis
  steht unmittelbar darüber im Hero. Von Tim so entschieden.
- **Ä7.** Der Abschnitt war über `.honest` schon ganzflächig dunkel — die Spec
  liest sich, als wäre er es nicht. Das Band bleibt in voller Breite und wird
  nur geschärft (104px statt 84px, Eyebrow in der Pillenform von
  `.day-close .time`). Von Tim so entschieden.
- **`assets/app/scopri_erlebnis.jpg` ist aus der Seite gefallen.** Säule 3
  („Handverlesen von Menschen, die hier leben") ist mit Ä1 in den
  Mission-Abschnitt aufgegangen, und der trägt kein Bild. Datei bleibt liegen.
- **Fünf Aufnahmen liegen jetzt unbenutzt in `assets/app/`:**
  `cerchio_community` (Persona-Karte, mit Ä3 abgelöst), `oggi_greeting` (mit Ä4
  abgelöst), `scopri_erlebnis` (siehe oben) sowie `chat_lazise` und
  `oggi_wasjetzt`, die schon vorher niemand einband. Keine gelöscht — das ist
  keine Entscheidung dieser Spec.
- **Zwei Screenshots tragen noch „Garda Unica" im Bild.** Beim Prüfen der
  Bildköpfe aufgefallen, nicht durch diese Arbeit entstanden: `oggi_tipp.jpg`
  (jetzt Pfeiler 1) zeigt in der Kopfzeile „Garda Unica", `storm_warning.jpg`
  (15:12 im Tagesbogen) ebenfalls. `territorio_map.jpg` — das neue Hero-Bild —
  ist sauber, ebenso `verkehr_liste.jpg`, `planungsmodi.jpg` und
  `onboarding_wer.jpg`. Beide betroffenen Aufnahmen standen schon vor dieser
  Spec auf der Seite; sie gehören zu **WEB-03 (Bilder)**, das weiter offen ist.
  Nicht angefasst, weil Bilder in dieser Spec nicht neu aufgenommen werden.
  **Wichtig für die zwei fehlenden Aufnahmen:** `diario_raster.jpg` und
  `cerchio_woche.jpg` aus einem Stand aufnehmen, der bereits „Unica Benaco"
  zeigt — sonst kommen zwei weitere Fundstellen dazu.
- **Vorbestand, nicht angefasst:** `onboarding_wer.jpg` sowie die drei
  Team-Fotos stehen unterhalb der Falz ohne `loading="lazy"`;
  `onboarding_wer.jpg` hat zusätzlich kein `width`/`height`. Das war schon
  vorher so und steht nicht in dieser Spec. `.pcap` in `--notte-3` liegt mit
  ≈ 3,0:1 unter 4,5:1 — Palette ist Nicht-Ziel, der Text ist nicht neu.

### Prüfwerkzeug

Zwei Soll-Werte nachgezogen, gezählt statt weggeschaut:

| Kontrolle | vorher | jetzt | Grund |
|---|---|---|---|
| NEG Geografie Garda | 44 | **46** | +1 Spec-Datei (`b33db21`), +1 Ä6-Kommentar |
| NEG Peschiera | 17 | **19** | +2 Zeilen mit dem Dateinamen `peschiera_abend.jpg` |

`M8 unica-benaco` fällt in `index.html` von 56 auf 55 Zeilen. Soll ist
„steigend", also kein Gate-Bruch; die Differenz ist der Alt-Text von
`scopri_erlebnis.jpg`. Alle übrigen Muster unverändert, `--selftest` grün.

### Bildaufbereitung

Der Screenshot verliert Status- und Navigationsleiste (Zuschnitt 0/90 bis
1080/2205 = genau 1080×2115, die Konvention der übrigen Aufnahmen). Die vier
Fotos behalten ihr Seitenverhältnis — **kein Zuschnitt am Motiv**. Den
Ausschnitt macht das CSS über `object-fit:cover`, so bleibt das volle Bild
erhalten, falls der Ausschnitt später verschoben werden soll. Die drei
Karten-/Spaltenfotos sind 4:3 und werden auf 3:2 gerahmt, mittig.

Breiten sind an der tatsächlichen Darstellung ausgerichtet, nicht pauschal
gesetzt. Qualität wird nur bis q=68 gesenkt; passt es dann noch nicht unter die
Grenze, wird die Breite reduziert statt weiter komprimiert. Grenzen dezimal
gerechnet (200 000 bzw. 250 000 Bytes) — die strengere der beiden Lesarten.

**EXIF ist entfernt.** `Fotos/peschiera_4.jpg` trug GPS-Koordinaten
(45°26′20″N, 10°41′41″E). Auf einer öffentlichen Seite haben die nichts
verloren; das Neukodieren verwirft sie, und ein Test in der Aufbereitung prüft
danach, dass keine EXIF-Daten übrig sind.

**Zwei Alt-Texte waren falsch** und sind gegen die gelieferten Aufnahmen
korrigiert: `zypressen_abend.jpg` zeigt keinen See (war „Zypressen über dem See
im Abendlicht"), und bei `weinberg_see.jpg` ist nicht zu erkennen, welches
Gewässer im Bild liegt — die Ortsangabe „bei San Benedetto di Lugana" ist
gestrichen. Deshalb fällt die Geografie-Kontrolle auf 46 statt 47.

**Vignette 03:** das Foto sitzt am Kartenfuß, nicht am Kartenkopf. Am Kopf
schob es Nummer und Überschrift von Karte 03 nach unten, während 01 und 02 oben
standen — die Reihe sah verrutscht aus. Am Fuß (`margin-top:auto` in einer
Flex-Spalte) fluchten alle drei Überschriften, und das Foto füllt den Platz,
den die gleich hohen Karten ohnehin lassen.

### Offen vor dem Livegang

1. **Copy-Freigabe Cristina** — vier Stellen, alle als Entwurf gekennzeichnet:
   `di_h`/`di_p` (Ä1), `cr_h`/`cr_p` (Ä2), `pb_v1_p` (Ä5) und der Saisonsatz
   (Ä6). Die DE-Fassungen von Ä2 und Ä5 sind wortgleich aus der Spec; alles
   übrige ist meine Formulierung.
2. **IT und EN** aller neuen Texte. Stehen als Entwurf drin, damit die Seite in
   allen drei Sprachen vollständig ist, nicht weil sie freigegeben wären.
3. **Der Saisonsatz aus Ä6.** Bewusst nicht erfunden — Ä6 ist keine der drei
   Stellen, an denen diese Spec neue Copy zulässt. Der Platz ist vorbereitet:
   Kommentar im Pivot-Block, fertiges Markup, Schlüssel `pb_saison`, kein
   leerer Wörterbucheintrag.
4. **Fünf der sechs Aufnahmen sind geliefert.** Aufbereitet aus Material, das
   schon im Arbeitsverzeichnis lag (`screenshot/` und `Fotos/`, beide
   unversioniert). Kein Bild erfunden, keines aus `assets/` ersetzt.

   | Datei | Quelle | Maße | Größe |
   |---|---|---|---|
   | `assets/app/cerchio_woche.jpg` | `screenshot/…/cerchio_pics.jpg` | 1080×2115 | 246,8 KB |
   | `assets/foto/peschiera_abend.jpg` | `Fotos/peschiera_4.jpg` | 1728×807 | 197,9 KB |
   | `assets/foto/steg_mittag.jpg` | `Fotos/port_al_lago.jpg` | 1100×825 | 198,3 KB |
   | `assets/foto/zypressen_abend.jpg` | `Fotos/sunset.jpg` | 1300×975 | 196,3 KB |
   | `assets/foto/weinberg_see.jpg` | `Fotos/vino_1.jpg` | 1021×765 | 197,2 KB |

   **Offen bleibt `assets/app/diario_raster.jpg`** — im vorhandenen Material ist
   kein Diario-Raster. Der Platz steht weiter im Quelltext, mit Kommentar und
   `onerror`; Pfeiler 2 trägt bis dahin kein Gerät.

   Ebenfalls offen: `cerchio_woche.jpg` noch auf IT und EN aufnehmen.

5. **Abnahmekriterium 1** ist erst mit `diario_raster.jpg` erfüllt.

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
