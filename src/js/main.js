'use strict';

import {addInitialKeyDescription} from "./pianoKeyDescription";
import {playKeyByKeyboard, playKeyByMouse} from "./piano";
import {executeOption} from "./options";

document.addEventListener("DOMContentLoaded", (e) => {
    alert('Прошу принять во внимание Bundle.js это собранный проект с помощью Webpack в нем сожержится еще дополнительный код, который вставляет сборщик')
    addInitialKeyDescription();
    executeOption();
    playKeyByKeyboard();
    playKeyByMouse();

} );
