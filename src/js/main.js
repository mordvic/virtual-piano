'use strict';

import {addInitialKeyDescription, changeKeyDescriptionByClick} from "./pianoKeyDescription";

document.addEventListener("DOMContentLoaded", (e) => {
    addInitialKeyDescription();
    changeKeyDescriptionByClick();
} );
