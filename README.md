# Blank Screenshot Area

A small GNOME Shell extension that makes the built-in screenshot tool forget the last selected area.

By default, GNOME remembers the rectangle you selected last time and shows it again whenever you open the screenshot UI. With this extension the screen opens without a selection, and you draw a new area every time, like the Windows Snipping Tool.

It works no matter how you open the screenshot UI (Print key, `Shift+Super+S` or a custom shortcut).

## Compatibility

| GNOME Shell | Status |
|---|---|
| 50 | tested |
| older / newer | not tested yet |

The extension changes an internal part of GNOME Shell's screenshot UI, which may differ between versions. If you try it on another version, please open an issue and say whether it worked.

## Installation

1. Download `blank-screenshot-area.zip` from [Releases](https://github.com/ADAMUSSO/blank-screenshot-area/releases).
2. Install it:
   ```bash
   gnome-extensions install --force blank-screenshot-area.zip
   ```
3. Log out and log back in. On Wayland, GNOME only loads newly installed extensions after you log in again.
4. Enable it:
   ```bash
   gnome-extensions enable blank-screenshot-area@adamusso
   ```

### From source

```bash
git clone https://github.com/ADAMUSSO/blank-screenshot-area.git
cd blank-screenshot-area
./pack.sh
gnome-extensions install --force dist/blank-screenshot-area.zip
```

Then log out, log back in and enable it as in step 4.

## Uninstall

```bash
gnome-extensions uninstall blank-screenshot-area@adamusso
```

## Known limitations

- When you open the screenshot UI, a 1 × 1 px selection sits in the top-left corner of the screen, and a tiny dot or handle may show there. If you press Capture without drawing an area, you get a 1 px image.

## How it works

When the screenshot UI closes, GNOME Shell calls `reset()` on its area selector, and that method deliberately keeps the previous selection. The extension overrides `reset()` and, after the original runs, shrinks the selection to 1 px in the corner.

## License

GPL-2.0-or-later, see [LICENSE](LICENSE).
