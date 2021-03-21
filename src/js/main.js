'use strict';

import {addInitialKeyDescription} from "./pianoKeyDescription";
import {playKeyByKeyboard, playKeyByMouse} from "./piano";
import {executeOption} from "./options";

document.addEventListener("DOMContentLoaded", (e) => {
    addInitialKeyDescription();
    executeOption();
    playKeyByKeyboard();
    playKeyByMouse();

} );
