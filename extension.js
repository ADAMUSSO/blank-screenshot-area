// SPDX-License-Identifier: GPL-2.0-or-later

import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension, InjectionManager} from 'resource:///org/gnome/shell/extensions/extension.js';

// When the screenshot UI closes, GNOME Shell calls UIAreaSelector.reset(),
// which deliberately keeps the last selection. After the original reset()
// we shrink the selection to 1 px in the top-left corner, so no rectangle
// is visible the next time and dragging anywhere draws a new one.
function clearSelection(selector) {
    selector._startX = selector._lastX = 0;
    selector._startY = selector._lastY = 0;
    selector._updateSelectionRect();
}

export default class BlankScreenshotAreaExtension extends Extension {
    enable() {
        const selector = Main.screenshotUI?._areaSelector;
        if (!selector)
            return;

        this._injectionManager = new InjectionManager();
        this._injectionManager.overrideMethod(
            Object.getPrototypeOf(selector), 'reset', originalReset => function () {
                originalReset.call(this);
                clearSelection(this);
            });

        clearSelection(selector);
    }

    disable() {
        this._injectionManager?.clear();
        this._injectionManager = null;
    }
}
