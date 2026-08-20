#!/usr/bin/env bash
# rename_scan.sh — Abnahme-Gate für die Rename-Tasks WEB-01 … WEB-04
#
# Rein lesend. Idempotent. Schreibt nichts, ändert nichts.
# Zählt die Muster, die vor und nach jedem Rename-Task geprüft werden.
#
# Nutzung:
#   tools/rename_scan.sh [PFAD]       Zählung im Repo (Default: Repo-Root)
#   tools/rename_scan.sh --list       zusätzlich alle Fundstellen mit Datei:Zeile
#   tools/rename_scan.sh --csv        CSV auf stdout: muster,datei,zeile,fundstelle
#   tools/rename_scan.sh --selftest   Muster gegen einen Referenzstand prüfen
#   tools/rename_scan.sh --help
#
# Ausgeschlossen: .git, node_modules, build, Binärdateien, dieses Skript selbst.
#
# Zwei Klassen von Mustern:
#   1. zeilenweise (grep)   — findet "garda unica", "garda-unica", "gardaunica"
#   2. markup-tolerant (py) — findet den Namen auch, wenn Markup dazwischensteht,
#      z. B. Garda <em style="…">Unica</em>. Klasse 1 ist dafür blind: sie erlaubt
#      zwischen den Wörtern höchstens ein Trennzeichen. Genau daran ist die Abnahme
#      von WEB-01 vorbeigelaufen. Klasse 2 kommt hinzu, sie ersetzt Klasse 1 nicht.
set -uo pipefail

usage() { sed -n '2,22p' "$0" | sed 's/^# \{0,1\}//'; exit 0; }

MODE="count"; ROOT="."
for a in "$@"; do
  case "$a" in
    --help|-h) usage ;;
    --list) MODE="list" ;;
    --csv)  MODE="csv" ;;
    --selftest) MODE="selftest" ;;
    *) ROOT="$a" ;;
  esac
done
cd "$ROOT" 2>/dev/null || { echo "Pfad nicht gefunden: $ROOT" >&2; exit 1; }

# Zwei Dateien reden ueber die Umbenennung, statt sie zu enthalten, und nennen
# die alten Namen zwangslaeufig: dieses Skript (Suchmuster als Literale) und
# FORTSCHRITT.md (Protokoll). Beide wuerden sich sonst selbst als Fundstelle
# zaehlen und jede Abnahme verfaelschen.
META=(rename_scan.sh FORTSCHRITT.md)
EXCLUDES=(--exclude-dir=.git --exclude-dir=node_modules --exclude-dir=build
          --exclude-dir=.dart_tool
          --exclude=*.png --exclude=*.jpg --exclude=*.jpeg
          --exclude=*.webp --exclude=*.pdf --exclude=*.ico --exclude=*.ttf)
for m in "${META[@]}"; do EXCLUDES+=(--exclude="$m"); done

# name|regex|erwartung_nach_WEB-01
PATTERNS=(
  "M2 alte Domain (URL)|gardaunica\.(com|de|it|app|eu)|0"
  "M3 alte Mailadressen|@gardaunica\.|0"
  "MK Wortmarke alt|Garda <em>Unica</em>|0"
  "MK Wortmarke neu|Unica <em>Benaco</em>|5"
  "M1 garda-unica gesamt|garda[ _-]?unica|Rest = sichtbarer Text (WEB-02/03/04)"
  "M8 unica-benaco|unica[ _-]?benaco|steigend"
  "M9 benaco-unica (Gegenprobe)|benaco[ _-]?unica|0"
  "NEG Geografie Garda|lago di garda|gardasee|unveraendert"
  "NEG Peschiera|peschiera|unveraendert"
)

if [ "$MODE" = "csv" ]; then echo "muster,datei,zeile,fundstelle"; fi

# ---------------------------------------------------------------------------
#  Klasse 2 — markup-tolerant.
#  Laeuft ueber die ganze Datei statt zeilenweise, damit das Muster auch dann
#  greift, wenn zwischen den beiden Woertern ein Zeilenumbruch steht.
#  MK-MU alt : findet "Garda …markup… Unica"
#  MK-MU neu : dasselbe gespiegelt fuer den neuen Namen. Faellt der auf 0,
#              waehrend MK-MU alt steht, hat eine Ersetzung die Wortstellung
#              zerschossen.
# ---------------------------------------------------------------------------
markup_scan() {   # $1 = Wurzel, $2 = MODE
python3 - "$1" "$2" <<'PY'
import os, re, sys
root, mode = sys.argv[1], sys.argv[2]
SEP = r'(?:\s|&nbsp;|<[^>]{0,60}>){0,4}'
PAT = [("MK-MU alt (markup)",  re.compile(r'garda' + SEP + r'unica',  re.I | re.S), "0"),
       ("MK-MU neu (markup)",  re.compile(r'unica' + SEP + r'benaco', re.I | re.S), "7 Platzierungen = 13 Vorkommen")]
SKIP_EXT = {'png','jpg','jpeg','webp','pdf','ico','ttf','woff','woff2'}
SKIP_DIR = {'.git','node_modules','build','.dart_tool'}
SKIP_FILE = {'rename_scan.sh','FORTSCHRITT.md'}   # reden ueber den Rename, s. o.
# Trivialfaelle ohne Markup deckt bereits die zeilenweise Klasse 1 ab.
PLAIN = re.compile(r'^[a-z]+[ _-]?[a-z]+$', re.I)

files = []
for dp, dn, fn in os.walk(root):
    dn[:] = [d for d in dn if d not in SKIP_DIR]
    for f in sorted(fn):
        if f in SKIP_FILE or f.rsplit('.', 1)[-1].lower() in SKIP_EXT:
            continue
        files.append(os.path.join(dp, f))

for name, rx, soll in PAT:
    hits = []
    for p in files:
        try:
            s = open(p, encoding='utf-8').read()
        except (UnicodeDecodeError, OSError):
            continue
        for m in rx.finditer(s):
            frag = m.group(0)
            if PLAIN.fullmatch(frag):
                continue
            hits.append((os.path.relpath(p, root), s.count('\n', 0, m.start()) + 1, frag))
    if mode == 'count':
        nf = len({h[0] for h in hits})
        print("%-32s %4d Vork.  in %2d Dateien   (Soll nach WEB-01a: %s)" % (name, len(hits), nf, soll))
    elif mode == 'list':
        print("\n== %s  (%d Vorkommen)  Soll: %s" % (name, len(hits), soll))
        for f, l, frag in hits:
            print("%s:%d:%s" % (f, l, frag[:110]))
    elif mode == 'csv':
        for f, l, frag in hits:
            print('%s,%s,%s,"%s"' % (name, f, l, frag[:160].replace('"', '""')))
PY
}

for entry in "${PATTERNS[@]}"; do
  name="${entry%%|*}"; rest="${entry#*|}"; rx="${rest%|*}"; soll="${rest##*|}"
  n=$(grep -rIiEl "$rx" . "${EXCLUDES[@]}" 2>/dev/null | wc -l)
  lines=$(grep -rIiE "$rx" . "${EXCLUDES[@]}" 2>/dev/null | wc -l)
  case "$MODE" in
    count) printf "%-32s %4s Zeilen in %2s Dateien   (Soll nach WEB-01: %s)\n" "$name" "$lines" "$n" "$soll" ;;
    list)
      printf "\n== %s  (%s Zeilen)  Soll: %s\n" "$name" "$lines" "$soll"
      grep -rInIiE "$rx" . "${EXCLUDES[@]}" 2>/dev/null | sed 's/^\.\///' | cut -c1-150
      ;;
    csv)
      grep -rInIiE "$rx" . "${EXCLUDES[@]}" 2>/dev/null | sed 's/^\.\///' \
        | awk -F: -v m="$name" '{f=$1;l=$2;$1="";$2="";s=substr($0,3);gsub(/"/,"\"\"",s);printf "%s,%s,%s,\"%s\"\n",m,f,l,substr(s,1,160)}'
      ;;
  esac
done

[ "$MODE" = "selftest" ] || markup_scan . "$MODE"

# ---------------------------------------------------------------------------
#  Selbsttest: das Muster gegen einen Referenzstand laufen lassen, auf dem die
#  Fundstellen nachweislich vorhanden sind (Default: main, Stand vor WEB-01).
#  Ein Pruefwerkzeug, das seine eigene Luecke nicht nachweisen kann, ist keines.
#  Erwartung: 13 Vorkommen = 7 Platzierungen. Die Differenz kommt daher, dass
#  die beiden Fusszeilen je viermal im Repo stehen (DOM + DE + IT + EN).
# ---------------------------------------------------------------------------
if [ "$MODE" = "selftest" ]; then
  REF="${SELFTEST_REF:-main}"
  SOLL="${SELFTEST_SOLL:-13}"
  git rev-parse --verify -q "$REF" >/dev/null || { echo "Referenz '$REF' nicht gefunden." >&2; exit 1; }
  TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
  git archive "$REF" | tar -x -C "$TMP"
  echo "Selbsttest gegen '$REF' ($(git rev-parse --short "$REF")):"
  got=$(markup_scan "$TMP" list | grep -c '^[^=[:space:]].*:[0-9]*:')
  markup_scan "$TMP" list | sed -n '/MK-MU alt/,/^$/p' | sed 's/^/  /'
  echo
  if [ "$got" -ge "$SOLL" ]; then
    echo "OK — $got Fundstellen (Soll >= $SOLL). Muster greift durch Markup hindurch."
  else
    echo "FEHLGESCHLAGEN — nur $got Fundstellen, erwartet >= $SOLL. Muster ist zu eng." >&2
    exit 1
  fi
fi
