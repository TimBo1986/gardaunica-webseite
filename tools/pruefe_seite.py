#!/usr/bin/env python3
# pruefe_seite.py — Abnahme-Gate fuer die Seiten dieses Repos
#
# Rein lesend. Idempotent. Schreibt nichts, aendert nichts.
#
# Nutzung:
#   tools/pruefe_seite.py [DATEI] [VERGLEICHSSTAND]
#   tools/pruefe_seite.py index.html main
#   tools/pruefe_seite.py --selftest
#   tools/pruefe_seite.py --help
#
# DATEI          Default: index.html
# VERGLEICHSSTAND  git-Referenz, gegen die geprueft wird. Default: HEAD.
#
# Exit 0 = keine Fehler. Exit 1 = mindestens ein Fehler.
# Hinweise sind Beobachtungen und lassen den Lauf gruen.
#
# ---------------------------------------------------------------------------
# Warum die Schluesselpruefung in BEIDE Richtungen laeuft
#
# Die erste Fassung kannte nur eine Richtung: "steht im DOM, fehlt im
# Woerterbuch". Beim Aufloesen des Saeulen-Abschnitts (Spec 0002) lief ein
# Loeschbereich versehentlich ueber einen ganzen Beat hinweg — der Abschnitt
# "Wir schreiben dazu, was wir nicht wissen" verschwand samt Ueberschrift,
# Fliesstext und Geraet. Alle verbliebenen DOM-Schluessel hatten weiterhin
# ihren Woerterbucheintrag, also meldete der Pruefer gruen, waehrend ein
# ganzer Abschnitt fehlte. Ein Gate, das nur eine Richtung kennt, ist von
# einem gruenen Gate nicht zu unterscheiden.
#
# Seither gilt: ein Schluessel, der im Vergleichsstand im DOM stand und jetzt
# nicht mehr, ist ein FEHLER — es sei denn, er ist im Woerterbuch mit einem
# Kommentar als ausgesetzt vermerkt. Aussetzen ist eine Entscheidung und
# gehoert aufgeschrieben; stilles Verschwinden ist ein Versehen.
#
# Derselbe Fehler hat auf Anhieb eine zweite Luecke aufgedeckt: ls_eyebrow und
# ls_h2, die Ueberschrift des aufgeloesten Abschnitts, waren ebenfalls ohne
# Vermerk weg.
# ---------------------------------------------------------------------------

import io, os, re, subprocess, sys

SPRACHEN = ('de', 'it', 'en')

# Bewusst in allen Sprachen identisch — kein Uebersetzungsrest.
GLEICH_OK = {'ex_eyebrow', 'c_role', 'l_role', 't_role', 'wl_name',
             'foot_left', 'wl_mail', 'orte_label', 'm0_q', 'm4_q',
             'mi_vlabel', 'mi_mlabel'}

# Externe Verweise, die es geben darf. Alles andere ist ein neuer Request.
# www.lagonord.it kam am 7.9.2026 dazu: die Fusszeilen-Signatur zeigt seither
# dorthin. Die drei .de-Eintraege bleiben stehen, sie werden weiter gebraucht —
# sie stecken in auskommentierten Vorfassungen, und Punkt 6 liest die ganze
# Datei, Kommentare eingeschlossen.
BEKANNT = {'https://www.lagonord.it',
           'https://www.lagonord.de', 'https://www.lagonord.de/privacy.html',
           'https://www.lagonord.de/imprint.html', 'https://unicabenaco.com',
           'https://unicabenaco.com/assets/og.jpg',
           'https://www.instagram.com/luna_the_digital_dog/'}

# Bilder, die schon vor Spec 0001 ohne loading="lazy" dastanden.
VORBESTAND = {'assets/app/onboarding_wer.jpg', 'assets/cristina.jpg',
              'assets/tim.jpg', 'assets/luna.jpg'}


def usage():
    print(''.join(l[2:] if l.startswith('# ') else l[1:]
                  for l in io.open(__file__, encoding='utf-8')
                  .read().split('\n\n')[0].splitlines(True)[1:]))
    sys.exit(0)


def woerterbuch(quelle, lang):
    """Ein Sprachblock als {schluessel: "wert mit Anfuehrungszeichen"}.

    Schluessel stehen mehrere pro Zeile, Werte duerfen Kommas und maskierte
    Anfuehrungszeichen enthalten — darum Token fuer Token statt zeilenweise.
    """
    m = re.search(r'\n %s:\{\n(.*?)\n },?\n [a-z]{2}:\{|\n %s:\{\n(.*?)\n }\n};'
                  % (lang, lang), quelle, re.S)
    blob = (m.group(1) or m.group(2)) if m else ''
    return dict(re.findall(r'(?:^|[,{]\s*)\s*([a-z_0-9]+):("(?:[^"\\]|\\.)*")',
                           blob, re.M))


def dom_schluessel(quelle):
    """Nur sichtbares Markup. Auskommentiertes ist Notiz, kein DOM."""
    ohne = re.sub(r'<!--.*?-->', ' ', quelle, flags=re.S)
    return set(re.findall(r'data-i18n(?:-ph)?="([a-z_0-9]+)"', ohne))


def pruefe(s, alt, mit_bildern=True):
    """Gibt (fehler, hinweise) zurueck. s = Datei jetzt, alt = Vergleichsstand."""
    fehler, hinweise = [], []
    sichtbar = re.sub(r'<!--.*?-->', lambda c: ' ' * len(c.group(0)), s, flags=re.S)

    # 1 · Inline-JS syntaktisch gueltig
    try:
        i = s.rindex('<script>'); j = s.index('</script>', i)
        tmp = '/tmp/_pruefe_seite_inline.js'
        io.open(tmp, 'w', encoding='utf-8').write(s[i + 8:j])
        r = subprocess.run(['node', '--check', tmp], capture_output=True, text=True)
        if r.returncode:
            fehler.append('Inline-JS ungueltig:\n' + r.stderr.strip()[:600])
    except ValueError:
        hinweise.append('kein Inline-<script> gefunden, Syntaxpruefung uebersprungen')

    woerter = {l: woerterbuch(s, l) for l in SPRACHEN}
    if not all(woerter.values()):
        fehler.append('Woerterbuch nicht gefunden: '
                      + ' '.join('%s=%d' % (l, len(woerter[l])) for l in SPRACHEN))
        return fehler, hinweise

    dom = dom_schluessel(s)

    # 2 · Richtung eins: steht im DOM, fehlt im Woerterbuch
    for k in sorted(dom):
        fehlt = [l.upper() for l in SPRACHEN if k not in woerter[l]]
        if fehlt:
            fehler.append('Schluessel %s fehlt in %s' % (k, '/'.join(fehlt)))

    # 3 · keine deutschen Reste in IT und EN
    for k in sorted(dom):
        if k in GLEICH_OK or k not in woerter['de']:
            continue
        for l in ('it', 'en'):
            if woerter[l].get(k) == woerter['de'][k]:
                hinweise.append('%s: %s gleicht der DE-Fassung' % (l.upper(), k))

    if alt:
        # 4 · kein Copy-Verlust: jeder Wert von damals steht noch irgendwo,
        #     sei es live oder als auskommentierte Vorfassung
        for lang in SPRACHEN:
            for k, v in woerterbuch(alt, lang).items():
                if v not in s:
                    fehler.append('COPY-VERLUST %s.%s: %s' % (lang, k, v[:70]))

        # 5 · Richtung zwei: stand im DOM, ist verschwunden.
        #     Siehe Kopfkommentar — das ist die Richtung, die gefehlt hat.
        kommentare = ' '.join(re.findall(r'/\*.*?\*/', s, re.S))
        for k in sorted(dom_schluessel(alt) - dom):
            if k in kommentare:
                hinweise.append('%s ist ausgesetzt und nicht mehr im DOM' % k)
            else:
                fehler.append('ABSCHNITT WEG? %s stand im DOM und fehlt jetzt, '
                              'ohne Vermerk im Woerterbuch' % k)

    # 6 · keine neuen externen Verweise
    for u in sorted(set(re.findall(r'https?://[^"\'\\ )<]+', s))):
        if u not in BEKANNT:
            fehler.append('neuer externer Verweis: ' + u)

    # 7 · Bilder lokal, lazy unterhalb der Falz, unter der Groessengrenze
    if mit_bildern:
        falz = s.index('<!-- 2 · PROBLEM') if '<!-- 2 · PROBLEM' in s else 0
        for m in re.finditer(r'<img\b[^>]*>', sichtbar):
            tag, pos = m.group(0), m.start()
            treffer = re.search(r'src="([^"]*)"', tag)
            if not treffer or not treffer.group(1):
                continue
            src = treffer.group(1)
            if src.startswith(('http', '//')):
                fehler.append('externes Bild: ' + src)
                continue
            if pos > falz and 'loading="lazy"' not in tag:
                (hinweise if src in VORBESTAND else fehler).append(
                    'kein loading="lazy" unterhalb der Falz: ' + src
                    + (' (Altbestand)' if src in VORBESTAND else ''))
            if os.path.exists(src):
                kb = os.path.getsize(src) / 1000
                grenze = 200 if src.startswith('assets/foto/') else 250
                if kb > grenze:
                    fehler.append('%s ist %.0f KB (Grenze %d KB)' % (src, kb, grenze))
            elif 'onerror=' not in tag:
                fehler.append('%s fehlt und hat keinen onerror-Rueckfall' % src)
            else:
                hinweise.append('PLATZHALTER, Datei fehlt: ' + src)

    return fehler, hinweise


def selftest():
    """Beweist, dass Richtung zwei wirklich anschlaegt.

    Ein Gate, das nichts findet, weil es nichts anschaut, ist von einem gruenen
    Gate nicht zu unterscheiden. Also: einen Abschnitt kuenstlich entfernen und
    verlangen, dass der Pruefer meckert.
    """
    datei = next((d for d in ('prototyp2.html', 'index.html') if os.path.exists(d)),
                 'index.html')
    s = io.open(datei, encoding='utf-8').read()

    m = re.search(r'\n<section\b.*?\n</section>\n', s, re.S)
    if not m:
        print('FEHLGESCHLAGEN — kein <section> in %s gefunden' % datei)
        return 1
    verstuemmelt = s[:m.start()] + '\n' + s[m.end():]
    weg = sorted(dom_schluessel(s) - dom_schluessel(verstuemmelt))
    if not weg:
        print('FEHLGESCHLAGEN — der entfernte Abschnitt trug keine Schluessel, '
              'der Test prueft nichts')
        return 1

    fehler, _ = pruefe(verstuemmelt, s, mit_bildern=False)
    treffer = [f for f in fehler if f.startswith('ABSCHNITT WEG?')]
    if not treffer:
        print('FEHLGESCHLAGEN — Abschnitt mit %d Schluesseln entfernt (%s …), '
              'Pruefer blieb still. Genau dieser Fall ist der Grund fuer die '
              'zweite Richtung.' % (len(weg), ', '.join(weg[:3])))
        return 1

    fehler_sauber, _ = pruefe(s, s, mit_bildern=False)
    falsch = [f for f in fehler_sauber if f.startswith('ABSCHNITT WEG?')]
    if falsch:
        print('FEHLGESCHLAGEN — unveraenderte Datei meldet ABSCHNITT WEG:\n  '
              + '\n  '.join(falsch[:3]))
        return 1

    print('OK — Abschnitt mit %d Schluesseln entfernt, %d davon gemeldet. '
          'Unveraenderte Datei bleibt still.' % (len(weg), len(treffer)))
    return 0


def main():
    args = [a for a in sys.argv[1:]]
    if '--help' in args or '-h' in args:
        usage()
    if '--selftest' in args:
        sys.exit(selftest())

    datei = args[0] if args else 'index.html'
    basis = args[1] if len(args) > 1 else 'HEAD'
    if not os.path.exists(datei):
        print('Datei nicht gefunden: ' + datei, file=sys.stderr)
        sys.exit(2)

    s = io.open(datei, encoding='utf-8').read()
    alt = subprocess.run(['git', 'show', '%s:%s' % (basis, datei)],
                         capture_output=True, text=True).stdout

    fehler, hinweise = pruefe(s, alt)
    for h in hinweise:
        print('  hinweis  ' + h)
    for f in fehler:
        print('  FEHLER   ' + f)

    woerter = {l: woerterbuch(s, l) for l in SPRACHEN}
    if fehler:
        print('FEHLGESCHLAGEN — %d Fehler in %s' % (len(fehler), datei))
    else:
        print('OK — %s: %d Schluessel im DOM, %s im Woerterbuch'
              % (datei, len(dom_schluessel(s)),
                 '/'.join(str(len(woerter[l])) for l in SPRACHEN)))
    sys.exit(1 if fehler else 0)


if __name__ == '__main__':
    main()
