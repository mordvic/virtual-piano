const getPianoKeys = () => {
    return document.querySelectorAll('.piano-key');
}

const createDescriptionKey = (key, value) => {
    let span = document.createElement('span');
    span.innerText = value;
    key.appendChild(span);
}

const addInitialKeyDescription = () => {
    function initialDescription(typeOfDescription) {
        let keys = getPianoKeys();
        let getOptionByType = document.querySelector(`[data-option=${typeOfDescription}]`);
        getOptionByType.classList.add(('option--active'));
        if (typeOfDescription === 'note') {
            keys.forEach((key => createDescriptionKey(key, key.dataset.note)));
        } else {
            keys.forEach((key => createDescriptionKey(key, key.dataset.letter)));
        }
    }

    initialDescription('letter')
}

const changeKeyDescription = (optionKey) => {
    let pianoKeys = getPianoKeys();
    pianoKeys.forEach((key) => {
        if (optionKey === 'letter') {
            key.firstChild.innerText = key.dataset.letter;
        } else if (optionKey === 'note') {
            key.firstChild.innerText = key.dataset.note;
        }
    })
}

export {addInitialKeyDescription, getPianoKeys, changeKeyDescription};
