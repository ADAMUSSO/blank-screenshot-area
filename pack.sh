#!/usr/bin/env bash
# Builds the installable zip into dist/.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p dist
gnome-extensions pack --force --out-dir=dist --extra-source=LICENSE .
mv -f dist/blank-screenshot-area@adamusso.shell-extension.zip dist/blank-screenshot-area.zip
ls -l dist/
