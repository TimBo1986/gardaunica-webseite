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
#   tools/rename_scan.sh --help
#
# Ausgeschlossen: .git, node_modules, build, Binärdateien.
set -uo pipefail

usage() { sed -n '2,16p' "$0" | sed 's/^# \{0,1\}//'; exit 0; }

MODE="count"; ROOT="."
for a in "$@"; do
  case "$a" in
    --help|-h) usage ;;
    --list) MODE="list" ;;
    --csv)  MODE="csv" ;;
    *) ROOT="$a" ;;
  esac
done
cd "$ROOT" 2>/dev/null || { echo "Pfad nicht gefunden: $ROOT" >&2; exit 1; }

# rename_scan.sh selbst ausschliessen: die Suchmuster stehen als Literale im
# Skript und wuerden sich sonst selbst als Fundstelle zaehlen.
EXCLUDES=(--exclude-dir=.git --exclude-dir=node_modules --exclude-dir=build
          --exclude-dir=.dart_tool --exclude=rename_scan.sh
          --exclude=*.png --exclude=*.jpg --exclude=*.jpeg
          --exclude=*.webp --exclude=*.pdf --exclude=*.ico --exclude=*.ttf)

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
