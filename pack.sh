#!/usr/bin/env bash
# Builds the installable zip into dist/.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p dist
gnome-extensions pack --force --out-dir=dist --extra-source=LICENSE .
ls -l dist/
