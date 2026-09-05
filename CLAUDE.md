# CLAUDE.md — Arbeitsregeln für dieses Repo

Statische Seite, kein Build, kein Framework, kein Paketmanager. Jede Seite ist
**eine Datei**: Markup, CSS und die drei Wörterbücher DE/IT/EN stehen darin.
Schriften sind lokal als base64 eingebettet — kein Google-Fonts-Aufruf.

| Datei | Was |
|---|---|
| `index.html` | Gästeseite, **Livestand** |
| `partner.html` · `app.html` · `confirmed.html` | die übrigen Seiten |
| `prototyp2.html` | Entwurf für den Storyline-Umbau, `noindex`, nicht live |
| `assets/lang.js` | Spracherkennung, für alle Seiten gemeinsam |
| `docs/specs/` | Vorgaben · `FORTSCHRITT.md` Arbeitsprotokoll |

---

## Zwei Gates, beide rein lesend

```
tools/rename_scan.sh            Umbenennung Garda Unica -> Unica Benaco
tools/pruefe_seite.py [DATEI] [STAND]   Seitenprüfung
tools/pruefe_seite.py --selftest
```

`pruefe_seite.py` prüft: Inline-JS gültig · jeder `data-i18n` im DOM hat einen
Eintrag in allen drei Wörterbüchern · keine deutschen Reste in IT/EN · kein
Copy-Verlust gegen den Vergleichsstand · keine neuen externen Verweise · Bilder
lokal, `loading="lazy"` unterhalb der Falz, unter der Größengrenze.

### Die Schlüsselprüfung läuft in beide Richtungen — und warum

Die erste Fassung kannte nur eine Richtung: *steht im DOM, fehlt im
Wörterbuch*. Beim Auflösen des Säulen-Abschnitts lief ein Löschbereich
versehentlich über einen ganzen Beat hinweg. Der Abschnitt „Wir schreiben dazu,
was wir nicht wissen" verschwand samt Überschrift, Fließtext und Gerät — und
**der Prüfer meldete grün**, weil alle verbliebenen Schlüssel weiterhin ihren
Eintrag hatten. Ein Gate, das nur eine Richtung kennt, ist von einem grünen
Gate nicht zu unterscheiden.

Seither gilt die zweite Richtung: *stand im DOM, ist verschwunden* → **FEHLER**,
es sei denn, der Schlüssel ist im Wörterbuch mit einem Kommentar als
ausgesetzt vermerkt. Aussetzen ist eine Entscheidung und gehört aufgeschrieben;
stilles Verschwinden ist ein Versehen.

Derselbe Fehler deckte auf Anhieb eine zweite Lücke auf: `ls_eyebrow` und
`ls_h2`, die Überschrift desselben Abschnitts, waren ebenfalls ohne Vermerk weg.

**Der Prüfer läuft vor jedem Commit, der Markup entfernt.** Ohne Ausnahme.

`--selftest` entfernt künstlich einen Abschnitt und verlangt, dass der Prüfer
meckert — und dass er bei unveränderter Datei still bleibt. Ein Test, der nichts
findet, weil er nichts anschaut, ist von einem grünen Test nicht zu
unterscheiden.

---

## Copy

**Bestehende Texte bleiben wortgleich.** Sie sind bewusst so geschrieben und
werden nicht umformuliert, gekürzt oder ergänzt — auch nicht „nur kurz
geglättet".

**Nichts wird gelöscht, nur ausgesetzt.** Ein Schlüssel, dessen Abschnitt
wegfällt, bleibt im Wörterbuch stehen, mit einem Kommentar darüber: warum, und
wo der Inhalt jetzt steht. Wird ein Text ersetzt, steht die alte Fassung
auskommentiert direkt darunter. Cristina redigiert diese Datei und hält alles
darin für lebende Copy.

**Neue Copy ist immer Entwurf.** Im Quelltext als `ENTWURF — Cristina
entscheidet` gekennzeichnet, in der Commit-Meldung unter `OFFEN` genannt. DE
zuerst, IT und EN danach — auch die sind Entwurf, nicht Freigabe.

---

## Bilder

App-Aufnahmen **1080 × 2115**, Status- und Navigationsleiste entfernt, unter
250 KB. Landschaftsfotos unter 200 KB. Grenzen dezimal gerechnet.

### Keine EXIF-Ortsdaten

Handyaufnahmen speichern Koordinaten. Das Impressum dieser Seite führt auf eine
Privatanschrift — Fotos, die den Aufnahmeort mitliefern, haben hier nichts
verloren. `Fotos/peschiera_4.jpg` trug 45°26′20″N, 10°41′41″E.

Neukodieren verwirft EXIF, aber **darauf wird sich nicht verlassen**: nach dem
Schreiben prüfen, dass nichts übrig ist.

```python
k = Image.open(ziel); assert not k.getexif(), 'EXIF uebrig'
```

Stand heute: 0 von 28 Dateien unter `assets/` tragen EXIF.

### Keine erkennbaren realen Personen ohne Einwilligung

Betrifft vor allem **Profilbilder in Screenshots**. `assets/app/profilo.jpg`
zeigte das Selfie einer realen Person, gut erkennbar, an einem Hafen — mit
committet und in einen Beat eingebunden, bevor es auffiel. Der Kreis ist jetzt
gepixelt und weichgezeichnet, harter Rand, damit es ein Profilbild bleibt und
kein Fleck. Bei der Nachaufnahme kommt ein neutrales Bild hinein.

Die Ausnahme sind die eigenen Porträts unter `assets/` — Cristina, Tim, Luna.
Die gehören dorthin.

Das Seitenverhältnis wird am Bild festgemacht, nicht am Container. `height:auto`
zusammen mit `min-height:100%` hat jede Geräteaufnahme um 9,5 % in die Länge
gezogen, über Monate unbemerkt.

**Fehlt eine Datei, wird sie nicht ersetzt.** Der Platz bekommt das fertige
Markup mit `onerror="…remove()"` und einen Kommentar: Dateiname, Anforderung,
und der Hinweis, sie nicht durch ein anderes Bild zu ersetzen. Lieber eine
sichtbare Lücke als ein falsches Bild.

**Screenshots erzählen denselben Tag zur selben Stunde.** `territorio_map` und
`meteo` sind die Referenz: 31 Grad, klarer Himmel, 14 Uhr. Wer eine Aufnahme
nachzieht, trifft das. Persona durchgehend Martin.

**Kein Bild behauptet, was die App nicht kann.** Eine Aufnahme mit „Tisch um
19:00 reserviert" kam nicht auf die Seite, weil die App nicht reserviert —
`fakten[]` wird ungeprüft aus der Modellantwort gelesen. Vor dem Einbau prüfen,
ob das Sichtbare gedeckt ist.

---

## Commits

**Ein Commit je Änderung**, nicht mehrere gebündelt. Die Meldung nennt den
Arbeitsstand, die Abweichungen von der Vorgabe mit Begründung, und unter
`OFFEN` alles, was noch fehlt oder freizugeben ist.

**Kein Commit ohne Tims Freigabe.** Gilt auch für Unteraufträge an Agenten.

Abweichungen von einer Vorgabe werden gezählt und begründet, nicht
weggeschaut — und nicht durch Anpassen des Soll-Werts erledigt. Wird ein
Soll-Wert nachgezogen, steht der Grund je Treffer daneben.

---

## Was nicht angefasst wird

Palette, Schriften und das Layout-Grundgerüst. Der Chat-Player und die
bestehenden ARIA-Muster. `prefers-reduced-motion` gilt weiter. Keine neuen
externen Requests. Kein Build.

`index.html` bleibt unberührt, solange ein Entwurf in `prototyp2.html` läuft.
