# Umsetzungsauftrag — Startseite unicabenaco.com

**Grundlage:** `docs/RUECKMELDUNG-01.md`, elf Rückmeldungen von Tim zur
Startseite nach dem Storyline-Umbau.
**Alle elf sind entschieden.** Dieser Auftrag enthält die Entscheidungen im
Wortlaut. Rückfragen nur, wenn etwas sachlich falsch würde.

**Arbeitsweise:** ein Commit je Punkt. Bestehende Copy bleibt wortgleich, sofern
hier nicht ausdrücklich anders angegeben. Neue Copy ist Entwurf für Cristina und
wird im Wörterbuch als solcher gekennzeichnet. Ersetzte Fassungen bleiben
auskommentiert stehen. Der Prüfer `tools/pruefe_seite.py` läuft vor jedem
Commit.

---

## Ä1 · Hero-Lede an die Karte angleichen

**Problem:** Der Lede endet mit „eine Empfehlung, einzig für dich, statt
zweihundert". Daneben steht die Karte mit zehn Orten. Der erste Satz („nicht zu
voll, nur falsch verteilt") passt zur Karte, der Nachsatz widerspricht ihr — er
verspricht Auswahl-Reduktion, das Bild zeigt Verteilung.

**Entscheidung:** Die Karte bleibt. Der Lede wird angepasst.

**Zu ändern:** nur der Nachsatz nach dem Doppelpunkt. Der erste Satz bleibt
wortgleich.

**Entwurf, Cristina entscheidet:**
> Der Gardasee ist nicht zu voll — nur falsch verteilt. Unica bringt dich
> dorthin, wo er zu dir passt, im richtigen Moment: dorthin, wo heute noch
> Platz ist.

DE / IT / EN. Alte Fassung auskommentiert darunter.

---

## Ä2 · Beat 3 „Der See hat einen Puls" — Zeitangaben

**Problem:** Der Text nennt „jede Stunde" und „vierzehn Stunden im Voraus".
Beides ist brüchig: Die Achse im Bildschirm daneben zeigt 8 bis 20 Uhr, also
dreizehn Spalten. Und „jede Stunde" ist eine Zusage über Infrastruktur, die sich
ändern kann.

**Entscheidung:** „Zehn Orte" bleibt — die Zahl stimmt und steht auch im
Team-Abschnitt. Die beiden Zeitangaben werden qualitativ.

| alt | neu |
|---|---|
| „jede Stunde" | „laufend neu" |
| „vierzehn Stunden im Voraus" | „über den ganzen Tag" |

Der Rest des Absatzes bleibt wortgleich. DE / IT / EN.

---

## Ä3 · Beat 3 — das Wort „erträglich"

**Problem:** Die zweite Ebene des Entscheidungsmodells heißt heute sinngemäß
„Lohnt sich die Richtung — und ist es dort erträglich". „Erträglich" beschreibt
etwas, das man aushält, nicht etwas, das man sucht.

**Entscheidung, Wortlaut steht fest:**
> Komme ich hin — und ist dort gerade Platz?

DE / IT / EN. Alte Fassung auskommentiert.

---

## Ä4 · Beat 4 — neue Überschrift

**Problem:** Die Überschrift lautet heute „Wir schreiben dazu, was wir nicht
wissen." Sie ist die einzige auf der Seite, die mit einer Verneinung führt, die
einzige mit Haupt- und Nebensatz statt Nominalsatz, und die einzige mit „Wir"
als Subjekt.

**Entscheidung, Wortlaut steht fest:**
> Woher die Zahlen *kommen.*

Kursiv gesetzt wird „kommen", wie bei allen anderen Überschriften das letzte
tragende Wort. DE / IT / EN.

---

## Ä5 · Beat 4 — Absatz über Herkunft neu

**Problem:** Der Absatz erklärt heute „links vom Strich gemessen, rechts
vorhergesagt". Das ist die Legendenzeile aus der App. Dort steht der Strich
daneben, auf der Website nicht — der Satz erklärt etwas, das der Leser nicht
sieht.

**Entscheidung, Wortlaut steht fest:**
> Was schon vorbei ist, wurde gemessen. Was noch kommt, ist vorhergesagt. Beides
> steht nebeneinander, und man sieht, welches was ist.

DE / IT / EN. Alte Fassung auskommentiert.

---

## Ä6 · Beat 4 — zweites Gerät

**Neue Aufnahme** liegt in `screenshot/` als `traffic.jpg` (ersetzt die alte
Fassung). Sie zeigt die Zufahrten zu zehn Orten mit echten Werten — Desenzano
14 Minuten, „GESPERRT · Via Custoza", Peschiera „Stau auf 594 m".

**Warum sie gebraucht wird:** Am Fuß der Aufnahme steht die Zeile

> „Verkehr und Wetter sind gemessen. Der Andrang ist gerechnet — aus Ort,
> Wochentag, Jahreszeit und Wetter."

Das ist genau die Aussage, die Beat 4 macht — in der Sprache der App selbst.
Damit zitiert die Seite die App, statt sie zu beschreiben.

**Zwingende Bedingung:** Diese Zeile muss im ausgelieferten Bild vollständig
lesbar sein. In der Rohaufnahme wird sie von der Android-Navigationsleiste
verdeckt.

- Ist sie beim Zuschnitt auf 1080 × 2115 vollständig sichtbar: einbauen
- Ist sie das nicht: **Bild nicht verwenden**, melden, Nachaufnahme anfordern

Beat 4 hat danach zwei Geräte: `meteo` und `traffic`. Das bricht zugleich die
Reihe gleichförmiger Ein-Gerät-Abschnitte.

---

## Ä7 · Neue Aufnahmen für Hero und Beat 3

In `screenshot/` liegen zwei weitere neue Aufnahmen:

- **Hero-Bildschirm** — Karte mit zehn Orten, Werte 30 bis 98, Zusammenfassung
  „31 °C Bedeckt · Wasser 23° · 2 Orte +14 Min · 7 Orte ruhig · 2 voll"
- **`il_giorno`** — Polso-Raster, Achse 8 bis 20 Uhr, Zeitmarke 13 Uhr

Beide ersetzen die eingebundenen Fassungen. Zuschnitt auf 1080 × 2115,
Android-Leisten entfernen, unter 250 KB, EXIF prüfen.

**Zwei Prüfungen dabei:**

1. **Hero:** Die Zusammenfassung sagt „7 Orte ruhig · 2 voll". Zähl die Pins auf
   der Karte nach. Wenn die Zahlen nicht zur Karte passen, melden statt
   einbauen — die Seite argumentiert an dieser Stelle mit Nachprüfbarkeit.
2. **`il_giorno`:** Am unteren Rand steht „RUHIGES FENSTER — Kein Zeitfenster
   verfügbar". Siehe Ä8.

---

## Ä8 · Abstinenz-Beleg zurückholen

**Vorgeschichte:** In einer früheren Runde wurde ein Satz aus Beat 4 gestrichen,
der behauptete, Unica gebe lieber keine Antwort als eine erfundene. Grund: Kein
Bildschirm im Bestand zeigte das, und ein Ehrlichkeitsabschnitt darf nichts
Unbelegtes behaupten.

**Neu:** Die neue `il_giorno`-Aufnahme zeigt am unteren Rand „RUHIGES FENSTER —
Kein Zeitfenster verfügbar". Das ist die App, die sagt: heute habe ich nichts
anzubieten.

**Auftrag:**

- Prüf, ob diese Zeile beim Zuschnitt vollständig sichtbar bleibt
- **Wenn ja:** Der Satz über die leere Antwort kommt zurück in Beat 4, als
  Entwurf für Cristina. Er muss sich auf das beziehen, was im Bild steht — kein
  allgemeines Versprechen
- **Wenn nein:** nichts tun, in `FORTSCHRITT.md` vermerken

**Entwurf für den Fall „ja":**
> Und wenn nichts passt, steht da nichts. „Kein Zeitfenster verfügbar" ist eine
> Antwort, keine Panne.

---

## Ä9 · Beat 5 — Planer-Bildschirm ersetzen

**Problem:** Beat 5 heißt „Daraus wird eine Entscheidung" und zeigt den Planer.
Der eingebundene Bildschirm zeigt aber einen Oggi-Tipp (Solferino) — eine
spontane Empfehlung für jetzt, nicht die geplante Reise. Zwei verschiedene
Fähigkeiten, im selben Abschnitt vermischt.

**Neue Aufnahme** liegt in `screenshot/` als `planer_tag.jpg`. Sie zeigt: Ort
Lazise, „Dein Tag.", einen Unica-Einleitungssatz, drei Tagesreiter (6.–8.9.),
das Tagesthema „Kultur und Natur" und einen Slot mit „Weinverkostung im
Familienweingut · Cantina Le Vigne Alte · Hier wird im Keller verkostet, nicht
im Verkaufsraum · 15 min mit Auto".

Das ist der richtige Bildschirm für diesen Abschnitt.

### Aber: nicht einbauen, solange ein Fehler im Bild steht

In der Slot-Karte steht:

```
Reservierung: pflicht_hochsaison
```

Das ist ein roher Aufzählungswert aus dem Datenmodell, der ungefiltert in die
Oberfläche durchschlägt. Auf einer Website liest sich das wie eine
Debug-Ausgabe.

**Auftrag:**

1. Trag den Befund im App-Repo `garda_compass_stable` ins
   `docs/ENTSCHEIDUNGSREGISTER.md` als offenen Punkt ein — nicht committen,
   dort gilt „kein Commit durch Agenten"
2. Verwende `planer_tag.jpg` **erst**, wenn der Wert in der App als lesbarer
   Text ausgegeben wird (etwa „In der Hochsaison Pflicht")
3. Bis dahin bleibt Solferino stehen. In `FORTSCHRITT.md` vermerken, warum

---

## Ä10 · „Auf Deutsch" korrigieren

**Problem:** Im Chat-Block steht „Frag, was du willst. Auf Deutsch." Die App
bietet drei Sprachen, die Website ebenfalls.

**Entscheidung, Wortlaut steht fest:**
> Auf Deutsch, Italienisch oder Englisch.

DE / IT / EN.

---

## Ä11 · La Carte du Soir vollständig entfernen

**Hintergrund:** La Carte du Soir wird aus der App entfernt. Die Funktion darf
auf der Website nirgends mehr vorkommen.

**Bekannter Fundort:** `di_p` in Beat 6 lautet weiterhin:

> „Ein Stempel für jeden Ort, an dem ihr wart. Abends läuft der Tag als Story
> zurück — und La Carte du Soir schreibt ihn in einem Satz auf, aus eurem
> tatsächlichen Tagesverlauf. Bewusst ohne Bild: Unicas eigene Beobachtung, kein
> Foto-Recycling."

Mehr als die Hälfte des Absatzes beschreibt die Carte. Ein Wortaustausch genügt
nicht.

**Freigegebene Neufassung, wortgleich zu übernehmen:**
> Ein Stempel für jeden Ort, an dem ihr wart — mehr müsst ihr nicht tun. Daraus
> wird eine Spur, die von selbst entsteht: wo ihr wart, in welcher Reihenfolge,
> an welchem Tag. Nach einer Woche steht dort ein Revier, das ihr nie angelegt
> habt.

Die Überschrift „Der Tag, den ihr behaltet." bleibt.

**Zusätzlich:** Alle drei Wörterbücher und alle eingebundenen Bilder auf
„Carte" durchsuchen. Jeden weiteren Fundort melden. Ein Screenshot, der einen
Carte-Filter zeigt, gehört auf die Nachaufnahme-Liste.

---

## Ä12 · Katzen-Satz entfernen

Im Team-Abschnitt:

> „Übrigens: Aus den drei Katzen, mit denen wir kamen, sind inzwischen neun
> geworden. Eine Straßenkatze zog bei uns ein, bekam vier Kätzchen — und der
> Kater lebt jetzt auf unserer Terrasse. Das ist eben auch Italien."

Ersatzlos entfernen. Copy im Wörterbuch aussetzen, nicht löschen. Kein Ersatz.

---

## Ä13 · Partner-Abschnitt verschieben

**Problem:** Der Abschnitt „Für Gastgeber & Betriebe" steht heute zwischen Team
und Warteliste. Ein Gast, der auf die Anmeldung zuläuft, bekommt an der
entscheidenden Stelle ein B2B-Angebot. Das ist eine Abzweigung kurz vor dem Ziel.

**Entscheidung:**

1. Der vollständige Abschnitt entfällt an dieser Stelle. Es gibt eine eigene
   Seite `/partner`, die ausführlicher ist
2. **Nach** dem Wartelisten-Abschnitt kommt ein schmaler, gestalterisch
   prominenter Streifen: ein Satz plus Knopf „Partner werden →" mit Ziel
   `/partner`
3. Der bestehende Link in der Fußzeile bleibt

**Entwurf für den Streifen, Cristina entscheidet:**
> Sie führen ein Hotel, ein Weingut oder eine Osteria am See?
> **Partner werden →**

Der Streifen soll auffallen — dunkel oder in Terracotta, volle Breite, nicht als
weitere helle Karte. Gestaltung entscheidest du.

---

## Nicht Teil dieses Auftrags

- Impressum und Datenschutzerklärung für unicabenaco.com — eigener Vorgang
- Der Rückbau von La Carte du Soir in der App
- Nachaufnahmen für Cerchio (Persona Tim statt Martin) und den Planer-Slot

---

## Abnahme

1. `tools/pruefe_seite.py` grün, beide Selbsttests grün
2. Kein Copy-Verlust: gleiche Schlüsselzahl in DE, IT und EN
3. Alle neuen und geänderten Texte als Entwurf für Cristina gekennzeichnet
4. Alle ersetzten Fassungen auskommentiert vorhanden
5. Neue Bilder: 1080 × 2115, unter 250 KB, ohne EXIF, keine Android-Leisten
6. Geprüft bei 390 / 768 / 1440 px in DE, IT und EN
7. Kein Bild behauptet etwas, das die App nicht leistet
8. Ein Commit je Änderung

## Melden statt selbst entscheiden

- Wenn die Herkunftszeile in `traffic.jpg` nicht vollständig sichtbar wird
- Wenn die Pin-Zählung im Hero-Bildschirm nicht zur Zusammenfassung passt
- Wenn „Carte" an weiteren Stellen auftaucht als in `di_p`
- Wenn eine der neuen Aufnahmen etwas zeigt, das der Seite widerspricht
