'use strict';

import {addInitialKeyDescription, changeKeyDescriptionByClick, getPianoKeys} from "./pianoKeyDescription";
import {playMusicByKeyboard} from "./keyboard";

document.addEventListener("DOMContentLoaded", (e) => {
    addInitialKeyDescription();
    changeKeyDescriptionByClick();
    playMusicByKeyboard();

} );
