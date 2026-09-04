# Spec 0001 — Drei Pfeiler und Produktbeweis

**Repo:** unicabenaco-website · **Datei:** `index.html`
**Grundlage:** Inventur vom 4. September 2026, Commit 9ba4fee
**Branch:** `feature/pfeiler-v2` · Merge durch Tim mit `--ff-only`

---

## Ziel

Die Seite verkauft heute nur die Empfehlungsleistung. Diario und Cerchio — die
beiden Säulen, die für R1 Priorität haben und für Bindung und Burggraben stehen —
erscheinen als Randnotiz und als überholte Beschreibung.

Diese Spec verschiebt das Gewicht und ergänzt Produktbeweise. **Die Abschnittsfolge
bleibt weitgehend erhalten, die vorhandene Copy ebenfalls.**

**Leitsatz:** Gewichtung und Beweis ändern, nicht die Erzählung.

---

## Copy-Regel für diese Spec

Alle bestehenden Texte bleiben **wortgleich**, sofern hier nicht ausdrücklich
anders vermerkt. Hero, Problem-Vignetten, Tagesbogen, Vision, Mission, „Von hier,
für hier", Team-Biografien, FAQ und Partner-Abschnitt sind bewusst so geschrieben
und werden nicht umformuliert, gekürzt oder ergänzt.

Neue Copy entsteht nur an drei Stellen (Ä1, Ä2, Ä5) und ist dort als Entwurf
gekennzeichnet. Cristina entscheidet. DE zuerst, IT und EN danach.

---

## Ä1 — Die drei Pfeiler neu zusammensetzen

Der Abschnitt „Lösung" trägt heute drei Säulen, die alle dasselbe beschreiben:
die Qualität der Empfehlung. Künftig tragen sie die drei Säulen des Produkts.

**Pfeiler 1 — Der richtige Moment** (Planer + Territorio)
Bestehende Säule 1 bleibt inhaltlich, wird aber um den Planer erweitert: Territorio
liefert die Lage, der Planer macht daraus eine Entscheidung. Die Ehrlichkeitszeile
„Keine Straßensensoren, keine Personenzählung. Wetter ist live und echt." bleibt
wortgleich und an dieser Stelle.

**Pfeiler 2 — Dein Tag** (Diario)
Neu. Stempel, Tagesstory, La Carte du Soir. Der Kern der Aussage: warum man die App
am dritten Urlaubstag noch öffnet. Die Carte ist bewusst bildlos — Unicas eigene
Beobachtung aus dem tatsächlichen Tagesverlauf, kein Foto-Recycling.

**Pfeiler 3 — Der Kreis** (Cerchio)
Ersetzt den heutigen eigenständigen Cerchio-Abschnitt, siehe Ä2.

Die bisherige Säule 2 („Eine Entscheidung, kein Katalog") und Säule 3
(„Handverlesen von Menschen, die hier leben") gehen nicht verloren: Säule 2 wandert
inhaltlich in Pfeiler 1, Säule 3 in den Mission-Abschnitt, wo sie als Pfeiler
„Handverlesen, keine Masse" bereits steht. **Kein Satz wird gelöscht, ohne dass
sein Inhalt an anderer Stelle steht.**

## Ä2 — Cerchio auf den aktuellen Stand

Die Seite beschreibt Cerchio als „Fragen und Antworten im Kreis". Das ist der Stand
vor dem Umbau vom Juli 2026 und damit sachlich überholt.

Der geltende Stand: Cerchio ist der **Kreis derer, die jetzt am See sind**.
Wochen-Kohorte statt Dauer-Community, Beiträge verfallen nach sieben Tagen, jede
Woche ein neuer Kreis. Momente entstehen aus echten Diario-Stempeln, sind also per
Konstruktion geerdet. Keine Likes mit Namen, kein Follower-System, kein Algo-Feed.

**Entwurf, Cristina entscheidet:**
> **Der Kreis derer, die jetzt hier sind.**
> Keine Dauer-Community, kein Feed. Jede Woche ein neuer Kreis — was diese Woche am
> See passiert, steht diese Woche drin. Danach ist es vorbei.

Die drei bestehenden Chips („aus lokalen Quellen", „Community-Beiträge", „KI
transparent gekennzeichnet") bleiben wortgleich.

## Ä3 — Ein Produktbeweis je Pfeiler

Jeder Pfeiler bekommt einen echten Bildschirm. Ohne sie bleiben die Pfeiler
Behauptungen.

| Pfeiler | Bildschirm |
|---|---|
| Der richtige Moment | Territorio-Übersicht |
| Dein Tag | Diario oder La Carte du Soir |
| Der Kreis | Cerchio |

**Zwingend:** Der Cerchio-Screenshot darf **keine Persona-Karte** zeigen. Marco und
Elena sind in der App deaktiviert; ein Screenshot mit Persona zeigt einen Zustand,
den es nicht gibt. Dieser Punkt ist in der CLAUDE.md der App ausdrücklich als
„Konsequenz Website" vermerkt.

Darstellung im vorhandenen Geräterahmen, gleiche Technik wie beim Hero-Mockup.

## Ä4 — Hero-Bild wechseln

Statt `oggi_greeting.jpg` die Territorio-Übersicht. Begründung: Ein Bildschirm mit
zehn Orten und laufenden Werten zeigt in der ersten Sekunde, dass hinter der
Empfehlung etwas rechnet. Eine Begrüßung zeigt das nicht.

Hero-Text bleibt wortgleich. „Dein See. Dein Moment." wird nicht angefasst.

## Ä5 — Zielgruppe in Vignette 01

Die erste Problemvignette lautet „34 Grad, zwei Kinder …". Das ist eine Familie mit
Kindern. Die Zielgruppe ist auf `/partner` definiert als Paare 45–80, hohe
Kaufkraft, oft mit Hund, deutschsprachig, wiederkehrend.

Zwei Folgen: Ein Gastgeber, der beide Seiten liest, sieht einen Widerspruch. Und die
Warteliste sammelt Anmeldungen aus dem falschen Segment — in der Kaltstartphase
lässt sich das nicht nachträglich sortieren.

**Nur diese eine Vignette ändern.** Vignetten 02 und 03 bleiben wortgleich.

**Entwurf, Cristina entscheidet:**
> **01 · Der volle Parkplatz**
> 34 Grad, der Hund im Fußraum, dritte Runde um den Block. „Completo." Zwei Stunden
> weg, bevor der Tag richtig begonnen hat.

## Ä6 — Die Saison ergänzen

„Der Gardasee ist nicht zu voll — nur falsch verteilt" wird auf der Gästeseite nur
über den Tagesverlauf eingelöst. Die zweite Hälfte der These — die Saison — steht
ausschließlich auf `/partner` („Der See wechselt fünfmal im Jahr", „Wir füllen die
guten Monate, nicht nur den August").

Ein Satz im Pivot-Block oder in Pfeiler 1 genügt. Für Paare 45+, die nicht im August
fahren müssen, ist das ein Kaufargument.

Formulierung von Cristina. Der bestehende Pivot-Satz „Der See ist nicht das Problem.
Es ist der Moment." bleibt.

## Ä7 — Mission aufwerten

Der Mission-Abschnitt trägt bereits vier Pfeiler: Handverlesen, keine Masse · Echte
Daten, vor Ort verifiziert · Unabhängig · Gut für den ganzen See. Dazu das
Schlusszitat „Das weiß ich nicht sicher — und ich rate nicht."

Das ist inhaltlich das Fundament unter allen drei Pfeilern, steht aber optisch wie
ein weiterer Abschnitt.

**Kein neuer Block, keine neue Copy.** Der vorhandene Abschnitt bekommt die dunkle
Behandlung wie 21:00 im Tagesbogen und rückt damit optisch aus der Reihe. Vision,
Mission und die vier Pfeiler bleiben wortgleich.

## Ä8 — Tote Wörterbuchschlüssel

Die Blöcke `ho_*` („Unser Prinzip / KI recherchiert. Mensch verantwortet.") und
`ab_*` („Wohin wir bauen", drei Roadmap-Karten) sind in allen drei Sprachen
vollständig übersetzt, ihre Abschnitte existieren in der Seite aber nicht mehr.
Dazu `wl_cta`.

**Nicht kommentarlos löschen.** Cristina redigiert diese Datei und hält alles darin
für lebende Copy. Entweder mit einem Kommentar als ausgesetzt kennzeichnen, oder —
Entscheidung von Tim — `ho_*` wieder einbauen: „KI recherchiert. Mensch
verantwortet." ist inhaltlich näher am Fundament als vieles, was heute auf der Seite
steht.

---

## Nicht-Ziele

- **Keine Änderung an Palette, Schriften, Layout-Grundgerüst.**
- **Keine Umformulierung bestehender Copy.** Hero, Vignetten 02 und 03, Tagesbogen,
  Vision, Mission, „Von hier, für hier", Biografien, FAQ, Partner-Abschnitt und alle
  Handlungsaufforderungen bleiben wortgleich.
- **Keine Änderung an der Abschnittsfolge**, außer dass der eigenständige
  Cerchio-Abschnitt in die Pfeiler aufgeht.
- **Keine neuen externen Requests.**
- **Kein Build**, kein Framework, kein Paketmanager.
- `/partner`, `/app` und `/confirmed` sind nicht Gegenstand dieser Spec.
- Die lokale Einbettung der Schriften und die eigene Datenschutzerklärung sind
  eigene Aufgaben und laufen vor oder parallel.

---

## Technische Vorgaben

- Neue Sichttexte als Schlüssel in den drei Wörterbüchern, **DE / IT / EN**
- Neue Bilder lokal in `assets/app/`, nicht von außen geladen
- `loading="lazy"` für alle Bilder unterhalb der Falz
- Bildgrößen prüfen: die Screenshots sind hochformatig, Seitenverhältnis am Bild
  festmachen, nicht am Container
- `prefers-reduced-motion` weiterhin beachten
- Bestehende ARIA-Muster und der Chat-Player bleiben unverändert
- `index.html` bleibt eine Datei

---

## Abnahmekriterien

1. Drei Pfeiler mit je einem Produktbildschirm sichtbar
2. Der Cerchio-Bildschirm zeigt keine Persona-Karte
3. Kein bestehender Satz ist gelöscht, ohne dass sein Inhalt an anderer Stelle steht
4. Alle neuen Texte wechseln korrekt nach IT und EN, keine deutschen Reste
5. Kein neuer externer Request; `grep` auf `http` liefert nur die bekannten Verweise
6. Alle neuen Bilder lokal, `loading="lazy"` gesetzt, keines über 250 KB
7. Kontrast neuer Textelemente ≥ 4.5:1
8. Abschnitt bei 390 px, 768 px und 1440 px angesehen, keine Umbrüche
9. Arbeitsstand in der Commit-Meldung

---

## Offen vor dem Livegang

- **Copy-Freigabe Cristina** für Ä1, Ä2, Ä5 und den Saisonsatz aus Ä6
- **IT- und EN-Fassungen** der neuen Texte
- **Screenshot-Auswahl** Tim, danach dieselben Bildschirme auf IT und EN aufnehmen
- **Entscheidung zu `ho_*`** aus Ä8: aussetzen oder wieder einbauen
