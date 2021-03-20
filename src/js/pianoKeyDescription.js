const getPianoKeys = () => {
    return document.querySelectorAll('.piano-key');
}

const getPianoKeysLetters = (pianoKeys) => {
    const pianoKeysLetter = [];
    pianoKeys.forEach((key)=> pianoKeysLetter.push(key.dataset.letter));
    return pianoKeysLetter;
}

const createDescriptionKey = (key, value) => {
    let span = document.createElement('span');
    span.innerText = value;
    key.appendChild(span);
}

const addInitialKeyDescription = () => {
    let keys = getPianoKeys();
    keys.forEach((key => createDescriptionKey(key, key.dataset.note)));
}

const changeKeyDescriptionByClick = () => {
    let keyOptions = document.querySelector('.options');
    keyOptions.addEventListener('click', (e) => {
        if (e.target.dataset.optionKey === 'letter') {
            changeKeyDescriptionByOption(e.target.dataset.optionKey)
        } else if (e.target.dataset.optionKey === 'note') {
            changeKeyDescriptionByOption(e.target.dataset.optionKey)
        }
    })
}

const changeKeyDescriptionByOption = (optionKey) => {
    let pianoKeys = getPianoKeys();
    pianoKeys.forEach((key) => {
        if (optionKey === 'letter') {
            key.firstChild.innerText = key.dataset.letter;
        } else if (optionKey === 'note') {
            key.firstChild.innerText = key.dataset.note;
        }
    })
}

export  {addInitialKeyDescription, changeKeyDescriptionByClick, getPianoKeys, getPianoKeysLetters};
