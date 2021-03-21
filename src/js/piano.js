import {getPianoKeys} from "./pianoKeyDescription";

function createMapOfAudioFiles() {
    let pianoKeys = getPianoKeys();
    let audioFiles = document.querySelectorAll('audio');
    let keyMap = new Map();
    pianoKeys.forEach((pianoKey) => {
        let keyObj = {};
        audioFiles.forEach(audio => {
            if (audio.dataset.letter === pianoKey.dataset.letter) {
                keyObj[`Key${pianoKey.dataset.letter}`] = pianoKey;
                keyObj[pianoKey.dataset.letter] = pianoKey;
                keyMap.set(keyObj, audio)
            }
        })
    })
    return keyMap;
}

const playKeyByKeyboard = () => {
    function play(mapOfAudio) {
        window.addEventListener('keydown', e => {
            mapOfAudio.forEach((audio, key) => {
                if (e.repeat === false) {
                    if (e.code in key) {
                        audio.currentTime = 0;
                        audio.play();
                        key[e.code].classList.add('piano-key--play')
                        setTimeout(function () {
                            key[e.code].classList.remove('piano-key--play');
                        }, 150)
                    }
                }
            })
        })
    }

    play(createMapOfAudioFiles());
}

const playKeyByMouse = () => {
    const firstOctave = document.querySelector('.first-octave');
    let isMouseClicked = false;

    function play(mapOfAudio, e) {
        mapOfAudio.forEach((audio, key) => {
            if (e.target.dataset.letter in key) {
                audio.currentTime = 0;
                audio.play();
                key[e.target.dataset.letter].classList.add('piano-key--play')
                setTimeout(function () {
                    key[e.target.dataset.letter].classList.remove('piano-key--play');
                }, 150)
            }
            isMouseClicked = true;
        })
    }

    firstOctave.addEventListener('mousedown', e => {
        play(createMapOfAudioFiles(), e);
    })

    firstOctave.addEventListener('mouseup', e => {
            isMouseClicked = false;
        }
    )

    firstOctave.addEventListener('mouseover', e => {
            if (isMouseClicked) {
                play(createMapOfAudioFiles(), e)
            }
        }
    )
}


export {playKeyByKeyboard, playKeyByMouse}
