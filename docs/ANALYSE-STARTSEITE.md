# Analyse Startseite — `prototyp2.html`

**Stand:** 5. September 2026 · Grundlage: `prototyp2.html` nach Commit `8e6e753` (Beat 4)
**Geprüft:** 51 Bilder einzeln geöffnet — 15 `assets/app`, 4 `assets/foto`, 22 `screenshot/`, 10 `Fotos/`
**Kein Code geändert.**

Maßstab durchgehend: *Nach dem ersten Bildschirm weiß der Besucher, dass hier etwas
rechnet. Nach dem Planer, was er bekommt. Nach dem Team, wer dahintersteht.*

---

## Zusammenfassung in fünf Sätzen

Die Seite hat zwei konkurrierende Gliederungen übereinander — Beats und Säulen —
und der Besucher sieht beide. Beat 3 und Beat 4 gehören laut Spec 0002 zusammen,
stehen aber durch drei Säulen getrennt. Vier von zehn eingebundenen Aufnahmen
zeigen etwas anderes als der Text daneben behauptet, in einem Fall das Gegenteil.
Das beste Peschiera-Foto und die bessere Onboarding-Aufnahme liegen ungenutzt im
Repo, während schwächere Fassungen derselben Sache auf der Seite stehen. Und der
Planer — die Aktivierungssäule — besteht aus einem Screenshot, der keine
Empfehlung zeigt.

---

# A · Befunde je Abschnitt

## A1 · Hero (Z. 427–448)

**Sagt:** „Dein See. *Dein Moment.*" · „eine Empfehlung, einzig für dich, statt
zweihundert" (`hero_lede`)

**Zeigt:** Gerät mit `territorio_map` — Karte mit zehn Ortspins, darunter
„31°C, Klarer Himmel · Wasser 23° | 4 Orte +1 Min, sonst frei | 9 Orte ruhig, 1 voll".
Dahinter `peschiera_abend`: Peschiera-Kanal in der blauen Stunde, beleuchtete
Arkaden, Geranien — und ein **Baukran** links der Mitte.

**Passt:** teilweise.

1. Das Gerät zeigt **keine Empfehlung**, sondern eine Verteilungsübersicht. Der
   Lede verspricht „eine Empfehlung, einzig für dich". Für den Maßstab „hier
   rechnet etwas" ist die Karte richtig — für den Satz daneben nicht.
2. **Zeitbruch auf dem ersten Bildschirm:** das Gerät sagt 31 °C und klarer
   Himmel, das Foto dahinter ist blaue Stunde. Zwei Tageszeiten in einem Bild.
   Danach läuft die Seite rückwärts in den Mittag.
3. Der Baukran ist kein Markenbild.

**Vorschlag:** Hintergrund gegen `Fotos/peschiera_2.jpg` tauschen (siehe A-Punkt
in Abschnitt 3). Der Lede-Satz bleibt — er ist freigegeben — aber die Spannung
zwischen „eine Empfehlung" und „Karte mit zehn Orten" gehört in Entscheidung C-1.

## A2 · Problem (Z. 451–507)

**Sagt:** „Der See ist wunderschön. Und der Tag *kippt* trotzdem." · drei
Vignetten · Pivot „Der See ist nicht das Problem. Es ist der *Moment.*"

**Zeigt:** kein Gerät. Ein Band: `steg_mittag` — gepflasterter Hafenplatz,
Mittagslicht, leere Liegestühle links, Boote rechts. **Bildbeherrschend: ein
Halteverbotsschild mit Zusatz „0-24" in der oberen Bildmitte.**

**Passt:** nicht gut.

Das Band steht zwischen den Karten und dem Pivot, also direkt unter „Der *volle*
Parkplatz". Das Bild zeigt einen **leeren** Platz — und ein Parkverbot. Als
Illustration von „Completo" ist es das Gegenteil; als Illustration des Pivots
(„liegt derselbe See ganz ruhig da") wäre es richtig, steht aber vor dem
Pivot-Satz und näher an den Karten. Das Verbotsschild ist eine ungewollte
wörtliche Lesart.

Zusätzlich: Vordergrund ist zu zwei Dritteln Kopfsteinpflaster. Der See ist ein
schmaler Streifen am Horizont.

**Vorschlag:** `steg_mittag` raus, `Fotos/lago.jpg` als Band. Klares flaches
Wasser über Kieseln, leerer Steg, Berge im Hintergrund, keine Beschilderung —
das ist „liegt derselbe See ganz ruhig da" wörtlich. Und Band **hinter** den
Pivot-Satz, nicht davor: erst die Behauptung, dann das Bild, dann Beat 3.

## A3 · Beat 3 · Puls (Z. 515–532) — steht fest

**Sagt:** „Der See hat einen *Puls.*" · stündlich · 10 Orte · **14 Stunden im
Voraus** · zwei Fragen auf zwei Ebenen

**Zeigt:** `il_giorno` — „Wie der Tag sich füllt", IL POLSO DEL LAGO mit
`VORHERSAGE`, zehn Ortszeilen, Stundenachse **8 bis 20**, Legende
ruhig/belebt/voll/schwierig, darunter Sirmione-Detail mit „RUHIGES FENSTER ab 19 Uhr".

**Passt:** ja, mit einer Zahl daneben.

Zehn Orte ✓. Stündlich ✓. Sirmione rot ✓ — deckt sich mit `territorio_map`
(„1 voll", Sirmione 77). **Aber:** die Achse zeigt 8 bis 20 Uhr, das sind
13 Stundenspalten. Der Text sagt „14 Stunden im Voraus". Einer von beiden hat
recht; nebeneinander sieht es nach Ungenauigkeit aus.

**Vorschlag:** entweder `b3_f3` auf „13 Stunden" ändern, oder — falls das Modell
tatsächlich 14 h rechnet und nur 13 anzeigt — die Formulierung auf
„einen Tag im Voraus" heben, die keine Nachzählung einlädt. Entscheidung C-2.

## A4 · Lösung / Säulen (Z. 535–600)

**Sagt:** „Damit der Tag *euch* gehört." · Säule 1 „Der richtige *Moment.*" ·
Säule 2 „Der Tag, den ihr *behaltet.*" · Säule 3 „Der Kreis derer, die *jetzt
hier sind.*"

**Zeigt:**
- Säule 1 → `oggi_tipp`: „FR · 14:05 · Unica Benaco · Peschiera del Garda",
  „Ciao, Martin.", Hitzewarnung bis 19:59, „Oggi — Solferino.", 12 km ab
  Desenzano, Knöpfe „Andiamo →" und „Warum?"
- Säule 2 → **nichts.** `diario_raster.jpg` existiert nicht, `onerror` entfernt
  den Geräterahmen. Die Zeile rendert als reiner Textblock.
- Säule 3 → `cerchio_woche`: „CERCHIO ESTATE 2026 · SETTIMANA 35 /
  **1 Reisende:r** · 2 Momente · 2 Orte", darunter ein Feed mit einem Beitrag
  („Vino", Peschiera del Garda, von **Tim**, „dein Post").

**Passt:** dreimal nicht.

1. **Die Säulen-Abzeichen sind der schwerste Befund des Abschnitts.** Nach einem
   Beat ohne Nummer („Der See hat einen Puls") kommt „Säule 1". Die Seite trägt
   zwei Gliederungssysteme übereinander, und der Besucher sieht beide. Spec 0002
   löst die Säulen auf — hier stehen sie noch.
2. `ls2_p` verspricht „mit einem „Warum?" **und einer Alternative**".
   `oggi_tipp` zeigt „Warum?" — eine Alternative ist im Bild nicht zu sehen.
3. `cr_p` sagt „**kein Feed**". Das Bild ist ein Feed. Und „der Kreis derer, die
   jetzt hier sind" steht über einer Aufnahme, die **eine** Reisende ausweist —
   und dieser eine Beitrag stammt von Tim selbst. Ein Kreis aus einer Person,
   und die Person ist der Gründer.

**Vorschlag:** Abzeichen ersatzlos streichen (Copy aussetzen). Säule 1 wird
Beat 5, Säule 2 wird Beat 6 mit `profilo`, Säule 3 wird Beat 7. Zu `cr_p` siehe
C-6 — die Formulierung „kein Feed" ist gegen jedes verfügbare Cerchio-Bild nicht
zu halten.

## A5 · Beat 4 · Ehrlichkeit (Z. 613–631) — Aufbau steht, Text nicht

**Sagt:** „Wir schreiben dazu, was wir *nicht* wissen." · „Jede Zahl in der App
trägt ihre Herkunft." · drei Stufen gemessen/berechnet/vorhergesagt · `ls1_cap` ·
Verifikation und Abstinenz

**Zeigt:** `meteo` — „14:01 · Peschiera", „Hitze · regional gemeldet", Quelle
„Italian Air Force National Meteorological Service · 12:00–19:59", 31° Klarer
Himmel, Wind aus Norden 7 km/h, „HEUTE IM VERLAUF" mit Abzeichen `VORHERSAGE`,
„Ora ab 12 Uhr", Legende „links vom Strich gemessen · rechts vorhergesagt ·
leer = kein Wert" mit Marke bei 14, „INS WASSER" mit Abzeichen `BERECHNET`, 23°.

**Passt:** der Aufbau ja, der Text nicht. Ausführlich in Prüfung 7.

Kurz: Es gibt in der App **kein Abzeichen „GEMESSEN"**. Nur `VORHERSAGE` und
`BERECHNET`. Die Seite stellt drei gleichrangige Pillen neben ein Bild, das nur
zwei davon kennt.

## A6 · Ein Tag mit Unica (Z. 634–717)

**Sagt:** „Vom Aufwachen bis zum *Aperitivo.*" — fünf Momente plus Modus-Streifen.

**Zeigt und passt:**

- **BEVOR ES LOSGEHT** → `onboarding_wer`: „Wer fährt mit?", **Paar** gewählt,
  Kinder **aus**, **Hund aus**, Fußzeile „Peschiera del Garda · **1 Tage** ·
  Paar". Der Text fragt „Familie mit Kindern? Zu zweit? Mit Hund?" — das Bild hat
  den Hund **abgeschaltet**, während Vignette 01 „der Hund im Fußraum" erzählt.
  „1 Tage" ist ein sichtbarer Grammatikfehler der App.
- **08:30 „Dein Moment wartet schon"** → `verkehr_liste`: eine Liste von zehn
  Orten mit Verkehrslage, alle „Scorrevole/frei". **Keine Empfehlung im Bild.**
  Der Text daneben sagt „Keine 200 Optionen. Eine, die stimmt." Das Bild zeigt
  zehn. Das ist der deutlichste Widerspruch der ganzen Seite.
  Zusätzlich: alle Orte frei, während `territorio_map` „1 voll" meldet.
- **14:00 Chat** → HTML-Player, kein Bild. Passt.
- **15:12 Unwetter** → `storm_warning`: **„MO · 21:07"**, Kopfzeile trägt noch
  **„Garda Unica"**, Anrede **„Ciao, Tim."** statt Martin, Warnung „SCHWERES
  GEWITTER noch bis 16:00" um 21:07 angezeigt, und Unica sagt gleichzeitig „Die
  beste Zeit am See: jetzt, ohne Plan." Der Text verspricht „Unica sagt es dir,
  **bevor** du am Strand bist" — die Aufnahme ist vom Abend danach. Vier
  Abweichungen in einem Bild. (Ist bereits als „raus" entschieden — hier nur
  vollständigkeitshalber belegt.)
- **21:00 Postkarte** → kein Bild. Ist raus, Copy aussetzen.
- **Modus-Streifen** → `planungsmodi` in `.cerchio-shot`, 210 × 250 px,
  `object-fit:cover; object-position:50% 0`. Ich habe den Zuschnitt nachgerechnet
  und gerendert: sichtbar sind die **oberen 61 %** — also Überschrift, „Sorprendimi"
  und der Anfang der zweiten Karte. **„A quattro mani" fällt aus dem Bild.**
  Der Text sagt „Von „überrasch mich" bis „wir planen zu zweit": Wähl deinen
  Modus", der Alt-Text nennt beide. Zu sehen ist eine Wahl mit einer Option.

**Vorschlag:** Abschnitt auflösen wie in Spec 0002 vorgesehen. `onboarding_wer`
gegen `onboarding_paar` tauschen (siehe 3). `verkehr_liste` und `storm_warning`
fallen weg. Der Modus gehört in den Planer-Beat, dort in voller Höhe.

**Wichtig, sonst brechen zwei Links:** `nav_day` (Z. 411) und `hero_cta2`
(Z. 440) zeigen beide auf `#tag`. Wenn der Abschnitt verschwindet, laufen die
Hauptnavigation und der zweite Hero-Knopf ins Leere.

## A7 · Mission (Z. 720–753) · A8 · Team (Z. 756–813) — stehen fest

Mission: unangetastet, `mi_quote` bleibt. Team: `weinberg_see` als Band —
Weinreben mit See dahinter, freundlich, aber austauschbar. Siehe Prüfung 4:
an dieser Stelle wäre ein Mosaik stärker als ein Band, weil der Abschnitt von
*Revier* handelt, nicht von einer Tageszeit.

## A9 · Band vor der Warteliste (Z. 845)

`zypressen_abend` — Zypressenreihe gegen die untergehende Sonne. Schönes Bild,
und als Zäsur vor dem Abschluss richtig platziert. Einziger Einwand: es ist das
**dritte** Band der Seite und das zweite Abendbild. Siehe Prüfung 4.

---

# Prüfung 1 · Der 90-Sekunden-Test

Nur Überschriften und Bilder, von oben nach unten:

| # | Überschrift | Bild |
|---|---|---|
| 1 | Dein See. Dein Moment. | Karte mit zehn Orten · Peschiera, blaue Stunde |
| 2 | Der See ist wunderschön. Und der Tag kippt trotzdem. | drei Karten, dann leerer Hafenplatz mit Halteverbot |
| — | Der See ist nicht das Problem. Es ist der Moment. | — |
| 3 | Der See hat einen Puls. | Polso-Raster, zehn Orte über den Tag |
| 4 | Damit der Tag euch gehört. — **Säule 1** Der richtige Moment. | Empfehlung Solferino |
| 5 | **Säule 2** Der Tag, den ihr behaltet. | **kein Bild** |
| 6 | **Säule 3** Der Kreis derer, die jetzt hier sind. | Feed mit einem Beitrag |
| 7 | Wir schreiben dazu, was wir nicht wissen. | Wetter mit Quelle und Abzeichen |
| 8 | Vom Aufwachen bis zum Aperitivo. | Onboarding, Verkehrsliste, Chat, Unwetter |
| 9 | Warum es uns gibt (Vision/Mission) | — |
| 10 | Von Locals gebaut, nicht von einem Konzern. | Weinberg mit See |
| 11 | Die richtigen Gäste, zum richtigen Moment. | — |
| 12 | Bald zeigt dir Unica Benaco deinen See genau so. | Zypressen im Abendlicht |

**Trägt der Faden allein?** Bis Zeile 3 ja, und zwar gut: Problem → Moment →
Puls ist eine saubere Kette, und die Bilder tragen sie mit.

**Danach reißt er dreimal.**

**Bruch 1 — Z. 532 → 535, „Der See hat einen Puls." → „Damit der Tag euch
gehört. / Säule 1".** Ein Beat ohne Nummer übergibt an eine nummerierte Säule.
Der Besucher muss entscheiden, welche Gliederung gilt, und bekommt keine
Antwort. Verstärkt dadurch, dass beide Abschnitte **denselben Hintergrund**
tragen — `.beat-hell` und `.loesung` sind beide `--carta-morn` (Z. 351 und
Z. 160) — und **dieselbe Rastergeometrie** benutzen. Optisch ist das ein einziger
langer Abschnitt mit vier Zeilen, in dem plötzlich Nummern auftauchen.

**Bruch 2 — Z. 600 → 613, „Der Kreis derer, die jetzt hier sind." → „Wir
schreiben dazu, was wir nicht wissen."** Beat 4 beantwortet eine Frage, die
Beat 3 gestellt hat — drei Abschnitte vorher. Dazwischen liegen Empfehlung,
Diario und Community. Spec 0002 verlangt ausdrücklich, dass 3 und 4 zusammen und
**vor** dem Planer stehen. Auf der Seite stehen sie getrennt und der Planer
dazwischen.

**Bruch 3 — Z. 631 → 634, „Wir schreiben dazu, was wir nicht wissen." → „Vom
Aufwachen bis zum Aperitivo."** Der härteste. Nach dem dunklen Abschnitt über
Datenherkunft — dem sachlichsten Moment der Seite — startet die Seite neu als
Urlaubstagebuch. Tonlage, Hintergrund und Gliederungslogik wechseln gleichzeitig.
Der Besucher liest ab hier eine zweite Seite.

**Nebenbefund:** Zeile 5 der Tabelle hat gar kein Bild. Im 90-Sekunden-Test ist
das eine Leerstelle mitten im Produktbeweis.

---

# Prüfung 2 · Bild-Text-Passung

| Bild | Text daneben sagt | Bild zeigt | Passt | Warum |
|---|---|---|---|---|
| `peschiera_abend` (Hero, hinter) | — (dekorativ) | Kanal, blaue Stunde, Baukran | **nein** | Abendlicht gegen 31°/klar/14 Uhr im selben Bildschirm; Kran im Motiv |
| `territorio_map` (Hero, Gerät) | „eine Empfehlung, einzig für dich, statt zweihundert" | Karte mit zehn Orten + Zusammenfassung | **halb** | zeigt Verteilung, nicht Empfehlung — richtig für „es rechnet", falsch für den Lede |
| `steg_mittag` (Problem-Band) | „Der volle Parkplatz." / „Completo." | leerer Platz, **Halteverbotsschild** dominant | **nein** | Gegenteil des Vignettentexts; Verbotsschild als ungewollte Lesart |
| `il_giorno` (Beat 3) | „14 Stunden im Voraus", „10 Orte" | Achse 8–20 Uhr = 13 Spalten; 10 Ortszeilen | **fast** | Ortszahl stimmt, Stundenzahl um eins daneben |
| `oggi_tipp` (Säule 1) | „mit einem „Warum?" **und einer Alternative**" | „Andiamo →" und „Warum?" | **halb** | Alternative ist im Bild nicht sichtbar |
| `diario_raster` (Säule 2) | „Ein Stempel für jeden Ort…" | **Datei fehlt, Rahmen entfernt** | **nein** | Behauptung ohne Beleg, sichtbare Lücke |
| `cerchio_woche` (Säule 3) | „kein Feed"; „der Kreis derer, die jetzt hier sind" | ein Feed; „**1 Reisende:r**"; Beitrag von **Tim** | **nein** | wörtlicher Widerspruch plus leerer Kreis plus Gründer als einziges Mitglied |
| `meteo` (Beat 4) | drei Stufen „gemessen · berechnet · vorhergesagt" | Abzeichen nur `VORHERSAGE` und `BERECHNET` | **halb** | „gemessen" gibt es als Abzeichen nicht, nur in der Legendenzeile |
| `onboarding_wer` (Tag) | „Mit Hund?" | **Hund aus**, „1 Tage" | **nein** | widerspricht Vignette 01 („der Hund im Fußraum") und zeigt einen Grammatikfehler |
| `verkehr_liste` (08:30) | „eine Empfehlung … Keine 200 Optionen. Eine, die stimmt." | Liste **zehn** Orte, keine Empfehlung | **nein** | stärkster Widerspruch der Seite |
| `storm_warning` (15:12) | „sagt es dir, **bevor** du am Strand bist" | **21:07**, „Garda Unica", „Ciao, **Tim**", Warnung „bis 16:00" | **nein** | vier Abweichungen; bereits als raus entschieden |
| `planungsmodi` (Modus) | „Wähl deinen Modus" (zwei genannt) | Zuschnitt zeigt **nur Sorprendimi** | **nein** | 210×250 bei `object-position:50% 0` schneidet „A quattro mani" ab |
| `weinberg_see` (Team-Band) | — (stumm) | Weinreben, See dahinter | **ja** | unkritisch, aber austauschbar |
| `zypressen_abend` (Schlussband) | — (stumm) | Zypressen, Sonnenuntergang | **ja** | gutes Zäsurbild |

**Zur ausdrücklich genannten Prüfliste:**

- **„Garda Unica" in der Kopfzeile:** `storm_warning` (eingebunden),
  `oggi_greeting` (nicht eingebunden). Alle anderen eingebundenen Aufnahmen
  tragen „Unica Benaco" oder gar keine Wortmarke.
- **Persona Familie statt Paar:** in den *eingebundenen* Bildern nicht — die
  benutzte `onboarding_wer` zeigt bereits „Paar". Aber
  `screenshot/…/Planner/onboarding_2.jpg` (Familie, Kinder an) und
  `screenshot/…/Planner/plan_1.jpg` („**Eure Familie** … für Groß und Klein")
  liegen als Kandidaten für den Planer bereit und sind für die Zielgruppe
  unbrauchbar.
- **Empfehlung, die nicht zum Thema gehört:** `verkehr_liste` unter „Dein Moment
  wartet schon" (siehe oben) und `cerchio_domande` als Cerchio-Alternative —
  dort ist die Frage „wo kaufe ich Freizeitschuhe in Bardolino". Sachlich ein
  guter Beleg für kuratierte Quellen, als Markenbild aber eine Besorgung.

---

# Prüfung 3 · Bestand gegen Verwendung

**Eingebunden (10 App-Aufnahmen + 4 Fotos):** `territorio_map`, `oggi_tipp`,
`il_giorno`, `meteo`, `cerchio_woche`, `onboarding_wer`, `verkehr_liste`,
`storm_warning`, `planungsmodi`, `diario_raster` (fehlt) · `peschiera_abend`,
`steg_mittag`, `weinberg_see`, `zypressen_abend`.

**Ungenutzt in `assets/`:** `cerchio_community`, `chat_lazise`, `oggi_greeting`,
`oggi_wasjetzt`, `onboarding_paar`, `scopri_erlebnis`.
Dazu **22 Rohaufnahmen** und **10 Rohfotos**, komplett ungenutzt.

**Zwei Fundstücke unter den ungenutzten:**

`assets/app/chat_lazise.jpg` ist **falsch benannt**. Es ist kein Chat, sondern
Onboarding-Schritt 4: „Was zieht euch an? / Wählt bis zu zwei Schwerpunkte" mit
Kulinarik & Wein, Geheimtipps, See & Natur, Kultur & Geschichte und der Frage
„Wie oft wart ihr schon am Gardasee?". Ein brauchbares Planer-Bild, das unter
seinem Namen niemand findet.

`assets/app/onboarding_paar.jpg` liegt fertig aufbereitet daneben und ist
**besser als die eingebundene Fassung**.

## Schwächer eingebunden als verfügbar

| Platz | eingebunden | besser verfügbar | warum |
|---|---|---|---|
| Onboarding | `onboarding_wer` | **`onboarding_paar`** | Hund **an** statt aus, „2 Tage" statt „1 Tage", Sprachwahl Deutsch sichtbar. Sonst identisch. Reiner Gewinn. |
| Problem-Band | `steg_mittag` | **`Fotos/lago.jpg`** | klares Wasser, leerer Steg, keine Beschilderung — die wörtliche Illustration des Pivots |
| Hero-Hintergrund | `peschiera_abend` | **`Fotos/peschiera_2.jpg`** | siehe unten |
| Säule 3 / Cerchio | `cerchio_woche` (1 Reisende:r) | — | keine bessere im Bestand; siehe C-6 |

## Das schönste Peschiera-Foto

**`Fotos/peschiera_2.jpg`** — Panorama 4000 × 1868. Der Peschiera-Kanal am
hellen Tag: türkises Wasser, Boote, die historischen Häuserzeilen, eine Magnolie
im Vordergrund — und rechts eine Reihe **leerer Bistro-Tische und -Stühle** mit
Kreidetafel. Voller Sonne, alles frei, niemand da.

Das ist das Versprechen der Marke als Bild: ein schöner Ort, leer, zur richtigen
Stunde. Und es passt zur Referenz — heller Tag, klarer Himmel, wie `meteo` und
`territorio_map`.

**Es gehört hinter das Hero-Gerät**, nicht als Band. Zwei Gründe:

1. Im Hero löst es den Zeitbruch auf: Foto und Gerät zeigen dann denselben Ort
   zur selben Stunde bei demselben Wetter. Die Karte nennt „Peschiera · you",
   das Foto zeigt Peschiera.
2. Als randloses Band wäre die **lesbare Beschilderung ein Problem**: „Verdelli"
   auf der Markise und „TAPAS & COCKTAIL BAR" auf der Tafel. Über die volle
   Breite liest sich das wie eine Platzierung. Hinter dem Gerät, bei 18 %
   Deckkraft und mit der bestehenden Maske, ist es Atmosphäre und die Schrift
   unlesbar.

`peschiera_abend` wandert an den Platz vor der Warteliste — dort ist Abendlicht
richtig, dort tragen die besetzten Tische „hier wohnen Menschen", und der Kran
verschwindet im Bandzuschnitt.

---

# Prüfung 4 · Bildformen

Aktuell: **drei Bänder, ein Foto hinter Gerät, sonst nichts.** Alle drei Bänder
sind Landschaft über volle Breite, zwei davon Abendlicht. Die Form trägt keine
Bedeutung mehr, weil sie für alles benutzt wird.

## Die Regel

Vier Formen, jede mit einer Prüffrage. Wenn keine Frage mit Ja beantwortet wird,
kommt das Foto nicht auf die Seite.

**1 · Band, randlos, stumm** → *Trägt das Bild eine Tageszeit, und trennt es zwei
Kapitel?*
Ein Band ist eine Zäsur, kein Schmuck. Es steht zwischen zwei Abschnitten, nie
innerhalb. **Höchstens zwei auf der Seite**, und nie beide zur selben Tageszeit.

**2 · Foto hinter Gerät** → *Zeigen Foto und Bildschirm dieselbe Sache?*
Nur dann. Sonst ist es Tapete. Der Beleg liegt in der Deckungsgleichheit: die
Karte sagt „Peschiera", das Foto zeigt Peschiera; der Feed zeigt ein Foto, das
Foto dahinter ist dasselbe.

**3 · Mosaik, mehrere Fotos in einem Raster** → *Geht es um Menge oder um
Revier?*
Belege treten im Plural auf. **Ein einzelnes gerahmtes Foto gibt es nicht** —
weder mit Radius noch ohne. Jedes Feld trägt seinen Ortsnamen in Mono, sonst ist
es wieder Dekoration.

**4 · Foto neben Text** → *Hat das Bild einen Namen, der im Text vorkommt?*
Nur für einen benannten Ort, und nur mit Bildunterschrift. Ohne Namen fällt es
auf Form 1 oder 3 zurück.

## Zuordnung nach dieser Regel

| Foto | Form | Begründung |
|---|---|---|
| `peschiera_2` | **hinter Gerät** (Hero) | Karte nennt „Peschiera · you", Foto zeigt Peschiera, gleiche Stunde, gleiches Wetter |
| `lago` | **Band** (nach dem Pivot) | trägt die Mittagsstille, trennt Problem von Puls |
| `vino_4` | **hinter Gerät** (Cerchio-Beat) | Der Beitrag im Feed von `cerchio_woche` zeigt **dasselbe Motiv** — Weinlaub im Gegenlicht mit dunklen Trauben. Ich habe den Feed-Ausschnitt neben `Fotos/vino_4.jpg` gelegt: gleiche Rebzeile, gleiches Gegenlicht. Damit wird „Momente entstehen aus echten Stempeln" sichtbar statt behauptet. |
| `peschiera_4` | **Band** (vor der Warteliste) | Abendlicht als Schlusszäsur; besetzte Tische tragen „hier wohnen Menschen" |
| `borghetto_6` | **neben Text**, mit Unterschrift „Borghetto sul Mincio" | benannter Ort — aber nur, wenn `Oggi_start` das Gerät stellt (siehe C-4) |
| `lago`, `baia_delle_sirene`, `rocka_manerba_2`, `vino_3` | **Mosaik** (Team) | Revier, nicht Tageszeit. Ersetzt das `weinberg_see`-Band. |
| `steg_mittag`, `zypressen_abend`, `weinberg_see` | **raus** bzw. ins Mosaik | drei Bänder sind zwei zu viel; `steg_mittag` zusätzlich wegen des Verbotsschilds |

**Ergebnis:** von drei Bändern auf zwei, dafür zwei Fotos hinter Geräten und ein
Mosaik. Die Form sagt dann wieder etwas.

**Hinweis zu `rocka_manerba_2.jpg`:** die Datei liegt **um 90° gedreht** im Repo,
der Horizont läuft senkrecht. Vor jeder Verwendung rotieren.

---

# Prüfung 5 · Rhythmus

## Reihe 1 — drei „Text links, Gerät rechts" in Folge

| Abschnitt | Zeile | Raster | Hintergrund |
|---|---|---|---|
| Beat 3 · Puls | 515 | `beat-row`, Text links | `--carta-morn` |
| Säule 1 | 546 | `pil-row`, Text links | `--carta-morn` |
| Säule 2 | 564 | `pil-row flip` — **Gerät fehlt**, rendert als Textblock | `--carta-morn` |
| Säule 3 | 581 | `pil-row`, Text links | `--carta-morn` |

Vier Zeilen, **derselbe Hintergrund**, **dieselbe Rastergeometrie**
(`minmax(0,46ch) auto`, zentriert), dreimal Gerät rechts. Säule 2 sollte die
Reihe brechen — aber weil das Bild fehlt, bricht sie nicht, sie fällt aus. Der
Leser sieht drei gleiche Zeilen mit einer Lücke drin.

Dass `.beat-hell` (Z. 351) und `.loesung` (Z. 160) beide `--carta-morn` sind,
verschmilzt Beat 3 und die Säulen zusätzlich zu einem Block. Die Abschnittsgrenze
bei Z. 532/535 ist nicht sichtbar.

**Bricht durch:** (a) Beat 3 bekommt einen anderen Grund als der folgende
Abschnitt — `--carta` oder `--carta-warm`; (b) die Säulen werden zu Beats 5–7 mit
alternierendem `flip`; (c) der Planer-Beat bringt eine **Gerätereihe** statt
eines Einzelgeräts und unterbricht damit die Ein-Gerät-Monotonie ganz.

## Reihe 2 — der Tagesbogen

`day-moment` / `flip` / normal / `flip` alterniert bereits sauber. Kein Befund —
der Abschnitt fällt ohnehin weg.

## Reihe 3 — zwei Landschaftsbänder mit einem Abschnitt Abstand

`weinberg_see` (Z. 771, Team) und `zypressen_abend` (Z. 845, vor Warteliste),
dazwischen nur der Partner-Abschnitt. Zwei grüne Querformate in kurzem Abstand,
beide stumm, beide ohne Funktion außer Atem. Die Mosaik-Lösung aus Prüfung 4
räumt das auf.

---

# Prüfung 6 · Konsistenz der Aufnahmen

**Referenz:** `territorio_map` (31 °C, klarer Himmel, Wasser 23°) und `meteo`
(14:01, Peschiera, 31°, klarer Himmel, Wasser 23°).

## Eingebunden

| Aufnahme | Stunde | Persona | Wortmarke | Befund |
|---|---|---|---|---|
| `territorio_map` | — | — | keine | **Referenz** |
| `meteo` | 14:01 | — | keine | **Referenz** |
| `il_giorno` | JETZT = 14 | — | keine | ✓ Sirmione rot deckt sich mit „1 voll" |
| `oggi_tipp` | FR 14:05 | **Martin** | Unica Benaco | ✓ |
| `cerchio_woche` | — | **Tim** | keine | Persona weicht ab; Settimana **35** |
| `onboarding_wer` | — | — | keine | „1 Tage"; Hund aus |
| `verkehr_liste` | — | — | keine | alle Orte frei ↔ Referenz „1 voll" |
| `planungsmodi` | — | — | keine | neutral |
| `storm_warning` | **MO 21:07** | **Tim** | **Garda Unica** | vier Abweichungen |

## Kandidaten

| Aufnahme | Stunde | Persona | Befund |
|---|---|---|---|
| `profilo` | 08:09 | **Martin** ✓ | „**11/10 ORTE**" — Zähler läuft über (Verona und Mantova liegen außerhalb der zehn). Neben Beat 3 („10 Orte am Südufer") ein sichtbarer Widerspruch. |
| `pre_plan` | 05:07 | **Martin** ✓ | „**3 Tage**" ↔ `onboarding_paar` „2 Tage" |
| `plan_2` | 08:08 | — | Hund ✓, „Tisch um 19:00 reserviert" |
| `onboarding_paar` | — | — | „2 Tage", Hund an |
| `Oggi_start` | FR **08:01** | **Martin** ✓ | empfiehlt Borghetto, „wenn du früh kommst" — passt nicht zu 14 Uhr |
| `plan_1` | 08:07 | — | „**Eure Familie** … für Groß und Klein" ✗ Zielgruppe |
| `Zentrale/traffic` | 08:02 | — | trägt die App-eigene Zeile „Verkehr und Wetter sind gemessen. Der Andrang ist gerechnet…" |
| `zentrale_map` | **23:58** | — | Mitternacht; Legende „Parkplatz-Sensorik" |
| `zentrale_parcheggio` | 08:01 / 01:30 | — | Belegungszahlen; Legende „Parkplatz-Sensorik" |
| `esperienze` | 08:04 | — | „**9 BUCHBAR**" ↔ Spec 0002 „vier echte Spots"; Kachelbilder sind leere Farbverläufe |

## Die zwei Muster

**Persona:** Es gibt zwei Nutzer im Bestand. **Martin** in `oggi_tipp`,
`profilo`, `pre_plan`, `Oggi_start`. **Tim** in `storm_warning`, `oggi_greeting`,
`cerchio_woche`, `cerchio_domande`. Auf der Seite stehen derzeit beide
nebeneinander. Für den Cerchio-Beat ist das besonders unglücklich, weil dort
„dein Post" von Tim der **einzige** Beitrag im Kreis ist.

**Stunde:** Die Referenz ist 14 Uhr. Die gesamte Planner-Kette liegt bei
05:07–08:09, `profilo` bei 08:09, `Oggi_start` bei 08:01. Das ist kein Fehler —
ein Plan wird morgens gemacht —, aber es muss **erzählt** werden, sonst wirkt es
zufällig. Vorschlag: der Planer-Beat bekommt eine Morgen-Rahmung („bevor der Tag
losgeht"), dann ist 08 Uhr richtig statt abweichend.

---

# Prüfung 7 · Copy Beat 4

Die Überschrift bleibt. Der Rumpf hat fünf Stellen, die nicht tragen.

**1 · `b4_p1` „Jede Zahl in der App trägt ihre Herkunft."**
Überbehauptung, und das Gegenbeispiel steht auf derselben Seite. In `meteo`
tragen zwei Blöcke ein Abzeichen (`VORHERSAGE`, `BERECHNET`) — die große Zahl
„31° Klarer Himmel" trägt keins. Und `territorio_map` im Hero zeigt „31 °C",
„4 Orte +1 Min", „9 Orte ruhig" **ganz ohne Herkunftsangabe**. Der erste
Bildschirm widerlegt den Satz aus dem siebten.

**2 · `b4_s1d` „Vom Wetterdienst gemeldet, mit Namen und Gültigkeitsfenster."**
Der schwerste Fehler. Die drei Pillen stehen als gleichrangiges System neben dem
Bild — aber **ein Abzeichen „GEMESSEN" gibt es in der App nicht**. „gemessen"
kommt nur in der Legendenzeile vor („links vom Strich gemessen"). Die Seite
erfindet ein Abzeichen und stellt es neben den Screenshot, der es nicht zeigt.
Ausgerechnet im Abschnitt über Ehrlichkeit.

**3 · `ls1_cap` „eine **regelmäßig** neu berechnete Einschätzung"**
Zwei Abschnitte vorher sagt `b3_p1` „**Jede Stunde**". Das schwächere Wort steht
nach dem stärkeren und liest sich wie ein Rückzieher. Der Satz ist freigegeben —
also gehört das in eine Entscheidung, nicht in eine stille Änderung.

**4 · Vier Wörter für eine Sache.**
„Auslastung" (`ls1_cap`), „Auslastungs-Einschätzung" (`b3_p1`), „Puls"
(`b3_h2`), „Andrang" (in den Screenshots). In zwei benachbarten Abschnitten.
Der Leser weiß nicht, ob das dasselbe ist.

**5 · `b4_p2` „eine leere Antwort mit Begründung ist uns lieber als eine
erfundene."**
Guter Satz, aber `meteo` zeigt keine Abstinenz. Die stärkste Behauptung des
Abschnitts steht ohne Beleg daneben. Entweder ein zweites Gerät, das eine leere
Antwort zeigt, oder der Satz wird bescheidener.

## Der Hebel, den die App selbst liefert

`screenshot/…/Zentrale/traffic.jpg` trägt am Fuß die Zeile:

> „Verkehr und Wetter sind **gemessen**. Der Andrang ist **gerechnet**…"

Das ist die Unterscheidung in den Worten des Produkts. Die Seite sollte sie
übernehmen statt eigene zu erfinden — dann kann kein Screenshot ihr
widersprechen. Beide Entwürfe unten bauen darauf auf. Die drei `dt`-Pillen
bleiben unverändert (`gemessen · berechnet · vorhergesagt`), nur die
Beschreibungen und die Absätze werden ersetzt.

---

## Entwurf A — „ihr", eng an der Aufnahme

> **b4_p1** · Zwei Dinge misst Unica nicht selbst, sie liest sie: Verkehr und
> Wetter. Beim Wetter steht der Dienst mit Namen daneben und bis wann seine
> Meldung gilt. Alles andere rechnet sie — und schreibt dazu, dass sie es
> rechnet.
>
> **gemessen** · Verkehr und Wetter, von außen gemeldet. Im Tagesverlauf alles
> links vom Strich.
> **berechnet** · Abgeleitet, nicht beobachtet — die Wassertemperatur aus dem
> Monatswert, an die Luft angepasst.
> **vorhergesagt** · Was noch kommt, rechts vom Strich. Wo kein Wert vorliegt,
> bleibt das Feld leer.
>
> **ls1_cap** (unverändert) · Die Auslastung ist eine regelmäßig neu berechnete
> Einschätzung je Ort — aus Verkehrs- und Wetterdaten und Ortskenntnis. Keine
> Straßensensoren, keine Personenzählung. Wetter ist live und echt.
>
> **b4_p2** · Und jeden Ortsnamen hält Unica gegen eine Liste geprüfter Orte.
> Was nicht darauf steht, fliegt raus. Passt nichts, empfiehlt sie nichts.

*Kein erfundenes Abzeichen mehr; „gemessen" ist an die Legendenzeile gebunden,
die im Bild steht. Die Überbehauptung „jede Zahl" ist weg.*

## Entwurf B — „du", ohne Zahlen aus dem Bild

> **b4_p1** · Wir sagen dir, woher wir etwas wissen — und woher nicht. Das ist
> keine Fußnote, das ist die Arbeit.
>
> **gemessen** · Verkehr und Wetter kommen von außen, mit Quelle und Zeitfenster.
> **berechnet** · Was sich daraus ableiten lässt, leiten wir ab — und sagen es.
> **vorhergesagt** · Was noch nicht passiert ist, steht als Erwartung da. Nicht
> als Tatsache.
>
> **ls1_cap** (unverändert)
>
> **b4_p2** · Und wenn nichts passt, empfiehlt Unica nichts. Eine leere Antwort
> mit Begründung ist uns lieber als eine erfundene.

*Kürzer, nimmt keine Werte aus dem Screenshot auf und bleibt damit auch dann
richtig, wenn die Aufnahme später getauscht wird. Verzichtet dafür auf die
Konkretheit von A.*

**Meine Empfehlung: A.** Der Abschnitt lebt davon, dass man das Gesagte im Bild
nachsehen kann. B ist sicherer, aber blasser — und „das ist die Arbeit" ist eine
Behauptung über uns statt über das Produkt.

---

# B · Vorgeschlagene Reihenfolge

| # | Abschnitt | Gerät | Foto | Bildform | Grund |
|---|---|---|---|---|---|
| 1 | **Hero** — Dein See. Dein Moment. | `territorio_map` | `peschiera_2` | hinter Gerät | gleiche Stunde, gleiches Wetter, gleicher Ort wie die Karte |
| 2 | **Problem** — Der Tag kippt trotzdem. | — | — | — | drei Karten, unverändert |
| — | *Pivot* — Es ist der Moment. | — | `lago` | **Band** | erst der Satz, dann das Bild als Zäsur |
| 3 | **Der See hat einen Puls.** | `il_giorno` | — | — | Hintergrund auf `--carta` wechseln, damit die Grenze zum Folgeabschnitt sichtbar wird |
| 4 | **Wir schreiben dazu, was wir nicht wissen.** | `meteo` | — | — | **direkt hinter Beat 3** — Behauptung und Prüfbarkeit gehören zusammen |
| 5 | **Der Planer** (neu, siehe unten) | vier Geräte | — | Gerätereihe | bricht die Ein-Gerät-Monotonie |
| 6 | **Der Tag, den ihr behaltet.** | `profilo` | — | — | 41 Stempel, 11 Orte, Abzeichen — der Bindungsbeweis |
| 7 | **Der Kreis derer, die jetzt hier sind.** | `cerchio_woche` | `vino_4` | hinter Gerät | das Foto im Feed **ist** das Foto dahinter |
| 8 | **Mission** | — | — | — | unverändert, dunkel |
| 9 | **Von Locals gebaut** | — | `lago`·`baia`·`rocca`·`vino_3` | **Mosaik**, Ortsnamen | Revier statt Tageszeit |
| 10 | **Partner** | — | — | — | unverändert |
| — | *Zäsur* | — | `peschiera_4` | **Band** | Abendlicht, besetzte Tische — „hier wohnen Menschen" |
| 11 | **Warteliste** | — | — | — | unverändert |

**Zwei Bänder statt drei. Zwei Fotos hinter Geräten statt einem. Ein Mosaik.**
`steg_mittag`, `weinberg_see`, `zypressen_abend` fallen aus der Seite; die
Dateien bleiben liegen.

*(Wenn `lago` sowohl als Pivot-Band als auch im Mosaik steht, ist es doppelt —
im Mosaik dann durch `sunset` ersetzen oder das vierte Feld leer lassen. Siehe C-9.)*

## Beat 5 · Der Planer — Vorschlag

Heute: ein Screenshot, der keine Empfehlung zeigt, plus ein Chat. Das ist der
dünnste Abschnitt der Seite und trägt die Aktivierungssäule.

**Vorschlag: zwei Zeilen statt einer, vier Geräte statt einem.**

**5a — „Zwei Minuten, dann kennt Unica euch."** *(Text links, zwei Geräte rechts,
leicht versetzt)*
`onboarding_paar` → `onboarding_7`
Das erste zeigt, wie wenig gefragt wird: Paar, Auto, Hund an, Sprache Deutsch.
Das zweite zeigt die Wahl, die man behält: *Sorprendimi* („Vertrauen pur…
Ideal für Wiederkehrer") gegen *A quattro mani* („drei Optionen pro Moment").
**In voller Höhe**, nicht auf 250 px beschnitten wie heute — dann sind beide
Modi zu sehen, und der Satz „Wähl deinen Modus" stimmt.

**5b — „Und dann steht der Plan."** *(zwei Geräte links, Text rechts — `flip`)*
`pre_plan` → `plan_2`
`pre_plan` ist das ruhigste Bild des ganzen Bestands: „3 Tage, ein roter Faden.
Für Martin", drei Tage an einem Faden, signiert „— Unica". `plan_2` löst es ein:
„Spaziergang an der Seepromenade — die Uferpromenade ist auch für deinen Hund
geeignet", und darunter als Faktenzeile **„Tisch um 19:00 reserviert · 5 min zu
Fuß"**.

Diese Faktenzeile ist der stärkste Einzelbeleg im gesamten Material. Sie zeigt
die Trennung, die im Entscheidungsregister als A4 steht — *Fakten ≠ Empfehlung* —
sichtbar: kursiv der Rat, im grauen Kasten die nachprüfbare Angabe.

**Der Chat-Player** bleibt als drittes Element in 5b oder wandert an das Ende des
Beats: „Und wenn du fragst, antwortet sie."

**Damit die Kette trägt, muss sie neu aufgenommen werden.** Heute widersprechen
sich die vier Bilder:

| | Aufnahme | Widerspruch |
|---|---|---|
| a | `onboarding_paar` sagt „**2 Tage**" | `pre_plan` sagt „**3 Tage**" |
| b | `pre_plan` / `profilo` / `oggi_tipp` sagen **Martin** | `cerchio_woche` sagt **Tim** |
| c | `plan_1` sagt „**Eure Familie** … für Groß und Klein" | Zielgruppe ist Paar ohne Kinder — `plan_1` deshalb **nicht** verwenden |
| d | Fortschrittspunkte: `onboarding_paar` 2/7 | `onboarding_7` 7/7 — passt, aber nur wenn dieselbe Sitzung |

**Ein Aufnahmedurchlauf, eine Sitzung:** Persona Martin, Paar, Hund an, drei Tage
5.–7. September, Vormittag. Dann trägt die Kette von der ersten Frage bis zum
reservierten Tisch.

---

# C · Offene Entscheidungen

1. **Hero-Lede gegen Hero-Bild.** „eine Empfehlung, einzig für dich, statt
   zweihundert" steht über einer Karte mit zehn Orten. Bleibt der Lede (dann ist
   das Gerät der falsche Beleg) oder bleibt die Karte (dann müsste der Lede von
   Verteilung sprechen)? Der Lede ist freigegebene Copy — ich ändere ihn nicht
   ohne dich.
2. **„14 Stunden im Voraus"** in `b3_f3` gegen 13 Stundenspalten in `il_giorno`.
   Zahl anpassen oder Formulierung heben?
3. **`ls1_cap` „regelmäßig" gegen `b3_p1` „jede Stunde".** Beide freigegeben,
   beide stehen jetzt zwei Abschnitte auseinander. Angleichen — und wenn ja,
   welches Wort gewinnt?
4. **Borghetto-Paarung.** `Oggi_start` empfiehlt Borghetto sul Mincio, und
   `Fotos/borghetto_6.jpg` liegt im Repo — die App nennt den Ort, das Foto zeigt
   ihn. Aber `Oggi_start` ist von **08:01**, die Referenz ist 14 Uhr, und
   `oggi_tipp` (Solferino, 14:05) ist konsistenter. Konsistenz oder Paarung?
5. **`profilo` „11/10 ORTE"** steht neben Beat 3 „10 Orte am Südufer". Neu
   aufnehmen ohne Verona und Mantova, oder so lassen und in Kauf nehmen?
6. **`cr_p` „kein Feed".** Gegen jedes verfügbare Cerchio-Bild nicht zu halten —
   beide zeigen einen Feed. Formulierung ändern (Copy für Cristina), oder Bild
   und Satz trennen?
7. **Cerchio mit einem Mitglied.** `cerchio_woche` weist „1 Reisende:r" aus, und
   der einzige Beitrag ist von Tim. Neu aufnehmen mit mehr Momenten, oder den
   Beat verschieben, bis der Kreis gefüllt ist?
8. **Persona vereinheitlichen** auf Martin — dann müssen `cerchio_woche` und
   `cerchio_domande` neu aufgenommen werden.
9. **`lago` doppelt?** Als Pivot-Band und im Team-Mosaik. Zweimal dasselbe Foto
   oder `sunset` ins Mosaik?
10. **Planer-Nachaufnahme** in einer Sitzung, Persona Martin, drei Tage, Hund an
    — freigeben?
11. **`chat_lazise.jpg` umbenennen.** Der Name sagt Chat, der Inhalt ist
    Onboarding-Schritt 4. Solange er so heißt, findet ihn niemand.
12. **`#tag`-Links.** `nav_day` und `hero_cta2` zeigen auf den Abschnitt, der
    aufgelöst wird. Wohin stattdessen — `#puls` oder der neue Planer-Beat?
13. **Beat-3-Hintergrund.** Vorschlag `--carta` statt `--carta-morn`, damit die
    Grenze zum Folgeabschnitt sichtbar wird. Einverstanden?
14. **Beat 4 Copy:** Entwurf A oder B (meine Empfehlung: A).
15. **Abstinenz-Beleg.** `b4_p2` behauptet die leere Antwort, kein Bild zeigt
    sie. Zweite Aufnahme beschaffen oder Satz zurücknehmen?

---

# D · Was ich nicht beurteilen kann

1. **Ob 14 oder 13 Stunden richtig ist.** Ich sehe 13 Spalten im Bild und lese
   14 im Text. Was das Modell tatsächlich rechnet, steht im App-Code, nicht hier.
2. **Wer auf dem Profilbild in `profilo.jpg` ist.** Ein kleines rundes Porträt;
   ich habe es nicht mit `assets/tim.jpg` oder `assets/cristina.jpg` verglichen,
   und selbst dann wäre eine Ähnlichkeitsaussage keine Identifikation.
3. **Ob „Tisch um 19:00 reserviert" eine echte Funktion ist** oder Testdaten. Wenn
   die App nicht wirklich reserviert, ist es der stärkste Beleg für etwas, das
   es nicht gibt — dann darf er nicht auf die Seite.
4. **Ob `vino_4.jpg` und das Feed-Foto in `cerchio_woche` dieselbe Datei sind.**
   Ich habe beide nebeneinandergelegt: gleiche Rebzeile, gleiches Gegenlicht,
   gleiche Blattstruktur. Für „dasselbe Motiv" reicht das. Für „dieselbe
   Aufnahme" müsste man die Originaldateien vergleichen.
5. **„9 BUCHBAR" in `esperienze`** gegen „vier echte Spots" in Spec 0002. Welche
   Zahl heute gilt, weiß ich nicht.
6. **Ob die Parkplatzquelle angebunden ist.** Ist als offener Punkt im
   Entscheidungsregister vermerkt; ich habe die beiden betroffenen Screenshots
   deshalb in keinem Vorschlag verwendet.
7. **Wie die Seite tatsächlich rendert.** Ich habe Markup, CSS und Zuschnitte
   gerechnet und den `planungsmodi`-Ausschnitt nachgestellt — aber die Seite
   nicht im Browser geöffnet. Umbrüche bei 390 px, das Verhalten der Bänder und
   die Wirkung des Mosaiks müssen am Bildschirm geprüft werden.
8. **Ob die Abendbilder tonal zusammenpassen.** `peschiera_4` (blaue Stunde) und
   `sunset` (goldene Stunde) nebeneinander habe ich nicht nebeneinander gesehen,
   nur einzeln.
9. **Was Cristina zur Copy sagt.** Beide Beat-4-Entwürfe sind Vorschläge, keine
   Fassungen.
10. **Ob „Settimana 35" ein Problem ist.** Heute ist der 5. September, das wäre
    Woche 36. Ob die App die Woche anders zählt oder die Aufnahme älter ist,
    kann ich von außen nicht sagen.

---

# E · Entschieden am 5. September 2026

Antworten auf Abschnitt C, von Tim. Zusätzlich zwei Punkte, die dabei
aufgeschlagen sind.

| # | Entscheidung |
|---|---|
| 1 | **Lede bleibt.** Der Widerspruch betrifft nur den Nachsatz „statt zweihundert"; der erste Satz passt zur Karte. Copy-Punkt für Cristina, nicht selbst ändern. |
| 2 | **Zahl raus.** `b3_f3` wird „von morgens bis abends" — stimmt gegen die Achse 8–20 Uhr und lädt zu keiner Nachzählung ein. |
| 3 | **„jede Stunde" gewinnt**, die Engine läuft stündlich. `ls1_cap` angleichen — Copy-Punkt für Cristina. |
| 4 | **Konsistenz vor Paarung.** `oggi_tipp` (Solferino, 14:05) bleibt, `borghetto_6` fällt raus. Solferino trägt zusätzlich die Hinterland-These. |
| 5 | `profilo` **neu aufnehmen**, ohne Verona und Mantova. |
| 6 | **`cr_p` ändern.** „Kein Feed" ist unhaltbar und trifft den Punkt nicht. Der Punkt ist die Wochen-Kohorte und der Verfall nach sieben Tagen. Entwurf für Cristina. |
| 7 | Cerchio **neu aufnehmen**, mit mehr Momenten. |
| 8 | **Persona einheitlich Martin.** |
| 9 | `sunset` ins Mosaik, `lago` bleibt Pivot-Band. |
| 10 | **Planer-Nachaufnahme freigegeben.** Ein Durchlauf deckt 5, 7 und 8 mit ab. |
| 11 | `chat_lazise.jpg` **umbenennen**. |
| 12 | Beide `#tag`-Links auf den **Planer-Beat**. `nav_day` und `hero_cta2` fragen nach dem Ablauf — den beantwortet der Planer, nicht der Puls. Navigationspunkt wandert mit; Vorschlag für Cristina: „So funktioniert es". |
| 13 | Beat-3-Hintergrund auf **`--carta`**. |
| 14 | Beat 4: **Entwurf A**. |
| 15 | Abstinenz-Satz **zurücknehmen**. Kein Bild, keine Behauptung — gerade in diesem Abschnitt. |

## E1 · Produktentscheidung: La Carte du Soir wird aus der App entfernt

Auftrag war zu prüfen, dass nirgends mehr ein Bezug steht. Ergebnis:

**Es steht noch drin, und zwar an der Stelle, die bleibt.** Der Wegfall von
„Der Tag als Postkarte" (`m4_*`) reicht nicht.

| Fundstelle | Datei | Status |
|---|---|---|
| `di_p` — Fließtext Beat 6 | `prototyp2.html` Z. 572, 978 (DE), 1145 (IT), 1312 (EN) | **bleibt auf der Seite** |
| `di_p` — dieselbe Copy | `index.html` Z. 499, 846, 991, 1136 | **live** |
| `m4_h` „Der Tag, als Postkarte." | beide Dateien | fällt ohnehin weg |
| Kommentar „Stempel, Tagesstory, La Carte du Soir" | `prototyp2.html` Z. 558 | Kommentar |
| Kommentar „Screenshot La Carte du Soir folgt aus dem Paket" | `prototyp2.html` Z. 701 | Kommentar |

`di_p` lautet heute: *„Ein Stempel für jeden Ort, an dem ihr wart. Abends läuft
der Tag als Story zurück — und La Carte du Soir schreibt ihn in einem Satz auf,
aus eurem tatsächlichen Tagesverlauf. Bewusst ohne Bild: Unicas eigene
Beobachtung, kein Foto-Recycling."*

**Mehr als die Hälfte des Absatzes beschreibt die Carte** — „schreibt ihn in
einem Satz auf" und „bewusst ohne Bild: Unicas eigene Beobachtung, kein
Foto-Recycling" sind beide die Carte, nicht das Diario. Ein Wort zu tauschen
genügt nicht; der Absatz muss in allen drei Sprachen neu geschrieben werden.
**Copy-Punkt für Cristina.**

**Betrifft auch den Livestand:** `index.html` verspricht die Funktion heute in
drei Sprachen. Solange die Seite live ist, wirbt sie mit etwas, das aus der App
verschwindet.

**In Screenshots:** in keiner eingebundenen Aufnahme ist die Carte zu sehen.

**Zum Filter „La Carte 8" in `profilo`:** ich habe ihn **nicht gefunden**. Ober-
und Unterteil der Aufnahme einzeln vergrößert; sichtbar sind der Kopfbereich,
das Ortsraster, der Kasten „Residente d'Onore" und die SPEZIAL-Abzeichen (Primo
Sole 22.07, Nachtfalke 05.08, Aperitivo Kenner 19.08, Maratona di Garda 22.06,
ein fünftes am Rand angeschnitten). Ein Filter mit diesem Namen ist in
`profilo.jpg` nicht abgebildet — möglicherweise liegt er unterhalb der Falz.
Für die Nachaufnahme trotzdem berücksichtigen.

**Nebenbefund aus derselben Prüfung:** `profilo.jpg` zeigt als Profilbild ein
**erkennbares Foto einer realen Person** (Mann in orangefarbenem Hoodie an einem
Hafen). Auf einer öffentlichen Seite ist das eine Einwilligungsfrage, nicht nur
eine Persona-Frage. Bei der Nachaufnahme klären oder das Bild ersetzen.

## E2 · Reserviert die App einen Tisch? — Nein.

Blockierende Frage vor Beat 5 (D-3). Im App-Repo `garda_compass_stable`
nachgesehen. Drei Belege, die zusammen eindeutig sind:

**1 · „Reservierung" ist eine Eigenschaft des Ortes, keine Buchung.**
`lib/l10n/enum_werte.dart` Z. 25: `reservierung: pflicht_hochsaison | empfohlen
| nein`. Das beantwortet „muss man hier reservieren", nicht „wir haben für dich
reserviert". Die Vokabulare stammen laut Kommentar aus `seed_ort_knowledge.ts`.

**2 · Der Knopf „Reservieren" öffnet die Seite des Partners.**
`lib/widgets/carta_sheet.dart`, `_prenota()`: protokolliert die Strecke und ruft
dann `launchUrl(s.buchungUrl)` im externen Browser auf. Ist keine URL hinterlegt,
passiert **gar nichts** („Partner ohne Link: nur Signal, kein Ziel"). Die App
vermittelt, sie reserviert nicht.

**3 · `fakten[]` kommt aus dem Sprachmodell.**
`lib/models/travel_plan_model.dart` Z. 187 liest `json['fakten']` direkt aus der
Modellantwort. Der Prompt in `functions/src/index.ts` Z. 975 lautet:
`"fakten": ["nur BELEGTE Angaben, z.B. 'Tavolo 20:00 prenotato' ... — leeres
Array, wenn nichts belegt ist"]`. Die Anti-Halluzinations-Sicherung (A8,
`allowedNames`) prüft **Ortsnamen**, keine Uhrzeiten und keine Zusagen.

**Folge für die Seite:** Die Zeile „**Tisch um 19:00 reserviert · 5 min zu Fuß**"
in `plan_2.jpg` ist vom Modell erzeugter Text, hinter dem keine Reservierung
steht. Sie darf so nicht auf die Seite — und schon gar nicht als „stärkster
Einzelbeleg", als den ich sie in Abschnitt B vorgeschlagen hatte. **Der
Vorschlag ist damit hinfällig.**

Drei Wege, in meiner Reihenfolge:

1. **`plan_2` ohne die Faktenzeile aufnehmen** — ein Slot, bei dem `fakten[]`
   leer ist. Der Beat verliert seinen konkretesten Beleg, behält aber Ort,
   Uhrzeit, Hundehinweis und die Trennung kursiv/Kasten.
2. **Einen Slot wählen, dessen Fakt nachprüfbar ist** — „Mercato bis 13:00" oder
   „Traghetto 09:40" sind Öffnungs- und Fahrzeiten, keine Zusagen im Namen des
   Gastes.
3. **`plan_2` ganz weglassen**, Beat 5 trägt `onboarding_paar`, `onboarding_7`
   und `pre_plan`.

Weg 2 ist der stärkste: er behält die sichtbare Trennung von Rat und Tatsache
(Entscheidungsregister A4) und behauptet nichts, was die App nicht kann.

## E3 · Was daraus für den Bau folgt

Vor Beat 5 zu klären, weil es die Aufnahmeliste ändert:

- **Welcher Slot** für Weg 2 (Öffnungs- oder Fahrzeit statt Reservierung)?
- Die Nachaufnahme aus Entscheidung 10 deckt jetzt **fünf** Dinge ab: `profilo`
  ohne Verona/Mantova, Cerchio mit mehreren Momenten, Persona durchgehend
  Martin, die Planer-Kette mit einheitlicher Tageszahl — und den Slot ohne
  Reservierungszusage.
- **Sechs Copy-Punkte für Cristina**, alle aus diesen Entscheidungen:
  `hero_lede` Nachsatz (1), `b3_f3` (2), `ls1_cap` (3), `cr_p` (6), `di_p` ohne
  La Carte (E1), `nav_day` (12). Dazu Beat 4 Entwurf A und die Streichung des
  Abstinenz-Satzes (15).
