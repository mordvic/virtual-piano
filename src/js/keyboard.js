import {getPianoKeys} from "./pianoKeyDescription";

function createMapOfKeyboard() {
    let pianoKeys = getPianoKeys();
    let audioFiles = document.querySelectorAll('audio');
    let keyMap = new Map();
    pianoKeys.forEach((pianoKey) => {
        let keyObj = {};
        audioFiles.forEach(audio => {
            if (audio.dataset.letter === pianoKey.dataset.letter) {
                keyObj['audioFile'] = audio;
                keyObj[`Key${pianoKey.dataset.letter}`] = pianoKey;
            }
            keyMap.set(`Key${pianoKey.dataset.letter}`, keyObj);
        })
    })
    return keyMap;
}

const playMusicByKeyboard  = () => {
    function playMusic (mapKeyboard) {
        window.addEventListener('keydown', e => {
            mapKeyboard.forEach((obj, key) => {
                if (e.code === key) {
                    obj.audioFile.currentTime = 0;
                    obj.audioFile.play();
                    obj[key].classList.add('piano-key--play');
                    setTimeout(function () {
                        obj[key].classList.remove('piano-key--play');
                    }, 150)
                }
            })
        })
    }
    playMusic(createMapOfKeyboard());
}



export {playMusicByKeyboard}
