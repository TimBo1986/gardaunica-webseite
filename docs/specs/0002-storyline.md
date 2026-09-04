# Storyline — was die Seite zeigen soll

**Grundlage:** Entscheidungsregister, Gesamtarchitektur, UNICA_INTELLIGENZ.md
**Ersetzt:** die Säulen-Gliederung aus Spec 0001 und den Tagesbogen

---

## Der Kernbefund

Die Seite sagt heute: **„eine Empfehlung statt zweihundert."**

Das klingt nach einem Filter. Nach einer kuratierten Liste. Nach etwas, das ein
Reiseblog auch könnte.

Was tatsächlich dahintersteht:

> Eine stündlich laufende Maschine fusioniert Verkehrsdaten von TomTom,
> Wetterdaten von OpenWeather und einen berechneten Auslastungswert je Ort,
> schreibt das Ergebnis in einen Cache, den alle Nutzer lesen. Zehn Gemeinden,
> vierzehn Stunden voraus. Darüber liegt ein Entscheidungsmodell mit zwei
> Ebenen: *Lohnt sich die Richtung?* auf Ortsebene, *funktioniert das Ziel?*
> auf Ebene des einzelnen Ortes.
>
> Und darüber liegt ein zweites System, das verhindert, dass die KI etwas
> erfindet: Jeder Name, den ein Modell ausgibt, wird gegen eine Liste
> verifizierter Orte geprüft. Was nicht drinsteht, fliegt raus. Und wenn nichts
> passt, darf Unica auch nichts sagen.

**Nichts davon steht auf der Seite.** Die stärkste Aussage — dass hier gerechnet
und nicht geraten wird — kommt als Fließtext in Säule 1 vor und als Zitat am
Ende der Mission.

Deshalb versteht ein Besucher die Macht der App nicht. Er sieht Empfehlungen.

---

## Die Umstellung

Aus drei Säulen plus fünf Tagesbogen-Momenten — acht Produktabschnitte, mehrfach
dieselbe Aussage — werden **fünf Beats**. Jeder trägt eine Fähigkeit, die die
anderen nicht haben.

### Beat 1 · Wo ist heute Platz?
*Hero, bleibt wie er ist*

Karte mit zehn Orten, Zusammenfassung darunter. Funktioniert.

### Beat 2 · Warum das schwer ist
*Problem-Abschnitt, bleibt*

Drei Vignetten, danach der Pivot. Gut geschrieben, keine Änderung außer
Vignette 01 auf Paar mit Hund.

### Beat 3 · Der See wird gerechnet, nicht geraten
**Neu. Der wichtigste Abschnitt der Seite.**

Was hier steht:
- Stündlich, für zehn Orte: Verkehr, Wetter, Auslastung
- Vierzehn Stunden voraus, nicht nur jetzt
- Zwei Fragen, zwei Ebenen: *Lohnt sich die Richtung* — komme ich hin, ist es
  dort erträglich. *Funktioniert das Ziel* — komme ich rein, kann ich parken
- Einmal gerechnet für alle, nicht pro Anfrage

Beweis: **`il_giorno`** — zehn Orte über vierzehn Stunden als Farbraster, mit
Vorhersage-Kennzeichnung und dem ruhigen Fenster darunter.

Das ist der Bildschirm, den kein Wettbewerber zeigen kann.

### Beat 4 · Und was sie nicht weiß, sagt sie
**Neu. Der Abschnitt, der Beat 3 glaubwürdig macht.**

Ohne diesen Beat ist „wir rechnen" eine Behauptung. Mit ihm wird es überprüfbar.

Was hier steht:
- Drei Herkunftsstufen, in der App sichtbar gekennzeichnet: **gemessen ·
  berechnet · vorhergesagt**
- Benannte Quellen statt „laut Wetterdienst"
- Was nicht gemessen wird, wird gesagt: keine Straßensensoren, keine
  Personenzählung
- Jeder Ortsname aus der KI wird gegen eine Liste verifizierter Orte geprüft
- **Und wenn nichts passt, empfiehlt Unica nichts.** Eine leere Antwort mit
  Begründung ist eine gültige Ausgabe, keine Panne

Beweis: **`meteo`** — benannte Quelle, `BERECHNET`-Abzeichen, die Zeile „links
vom Strich gemessen, rechts vorhergesagt".

Der Satz „Das weiß ich nicht sicher — und ich rate nicht" gehört hierher, nicht
ans Ende der Mission.

### Beat 5 · Daraus wird eine Entscheidung
*Ersetzt die alte Säule 1 und den 08:30-Moment*

Was hier steht:
- Aus der Rechnung wird ein Vorschlag, nicht eine Liste
- Mit einem „Warum?" — und einer Alternative
- Fakten und Rat sind getrennt: was nachprüfbar ist, steht als Fakt; was Rat
  ist, steht als Rat. Nie vermischt
- Und wenn du fragst, antwortet sie — auf Deutsch, aus lokalem Wissen

Beweis: **`oggi_tipp`** (Solferino) plus der bestehende Chat-Player.

Solferino ist der beste Beleg der ganzen Seite: zwölf Kilometer landeinwärts,
„und kaum jemand fährt hin". Das ist die Verteilungsthese in einem Bildschirm.

### Beat 6 · Der Tag, den ihr behaltet
*Diario, bleibt als eigener Beat*

Stempel, Tagesstory. Das ist der Grund, die App am dritten Urlaubstag noch zu
öffnen.

Beweis: **`diario_raster`** — fehlt noch.

### Beat 7 · Der Kreis, der jetzt hier ist
*Cerchio, bleibt*

Wochen-Kohorte, sieben Tage, dann vorbei. Momente aus echten Stempeln.

Beweis: **`cerchio_woche`** — liegt bereit.

---

## Was wegfällt

- **Der Tagesbogen als eigener Abschnitt.** Seine Momente verteilen sich auf die
  Beats. Der Chat-Player wandert in Beat 5, die Unwetterwarnung in Beat 4
- **08:30 „Dein Moment wartet schon"** — sagt dasselbe wie Beat 5
- **21:00 „Der Tag als Postkarte"** — sagt dasselbe wie Beat 6
- **Der Modus-Streifen** — gehört ins Onboarding, nicht auf die Startseite
- **Die Säulen-Abzeichen** „Säule 1/2/3" — bei sieben Beats sinnlos

Copy im Wörterbuch aussetzen, nicht löschen.

---

## Zwei Dinge, die die Seite nicht behaupten darf

**Keine Breite.** Stand 19. August: vier echte Spots im Bestand, Zielmarke
25–30. Die Datenlage ist der Deckel auf allem. Eine Seite, die Fülle verspricht,
enttäuscht beim Start. Die Erzählung trägt ohnehin ohne Menge — sie handelt von
Genauigkeit, nicht von Auswahl.

**Keine Live-Personenzählung.** Der Abstand zwischen „berechnet" und „gemessen"
ist die Grundlage von Beat 4. Wer ihn verwischt, verliert den Beat.

---

## Was das für die Aufnahmen heißt

Gebraucht, in dieser Reihenfolge:

| Beat | Aufnahme | Status |
|---|---|---|
| 1 | `territorio_map` | liegt vor |
| 3 | `il_giorno` | liegt vor, noch nicht eingebunden |
| 4 | `meteo` | liegt vor, noch nicht eingebunden |
| 5 | `oggi_tipp` | liegt vor |
| 6 | `diario_raster` | **fehlt** |
| 7 | `cerchio_woche` | liegt vor |

Sechs Aufnahmen für sieben Beats — Beat 2 trägt ein Foto, kein Gerät.

**Es fehlt genau eine.** Alles andere ist vorhanden und muss nur an den richtigen
Platz.

Nicht mehr gebraucht: `verkehr_liste`, `storm_warning`, `onboarding_wer`,
`planungsmodi`, `oggi_greeting`, `scopri_erlebnis`.

---

## Warum diese Reihenfolge

Beat 3 und 4 gehören zusammen und stehen bewusst **vor** dem Planer. Ein
Besucher soll erst verstehen, dass hier gerechnet wird und dass die Rechnung
ehrlich ist — dann wirkt die Empfehlung in Beat 5 als Ergebnis eines Systems und
nicht als Meinung.

Heute steht es umgekehrt: Empfehlung zuerst, Ehrlichkeit als Fußnote. Deshalb
liest sich die Seite wie ein besserer Reiseführer statt wie das, was sie ist.
