import {changeKeyDescription} from "./pianoKeyDescription";
import {fullScreen} from "./fullScreen";

const getOptionMenu = () => {
    return document.querySelector('.options');
}

const getOptions = () => {
    return document.querySelectorAll('.option');
}

const executeOption = () => {
    function changeStateOfDescription(optionMenu) {
        optionMenu.addEventListener('click', (e) => {
            if (e.target.dataset.option === 'letter') {
                changeKeyDescription(e.target.dataset.option);
                e.target.classList.add('option--active');
                document.querySelector('[data-option=note]').classList.remove('option--active')
            } else if (e.target.dataset.option === 'note') {
                changeKeyDescription(e.target.dataset.option);
                e.target.classList.add('option--active');
                document.querySelector('[data-option=letter]').classList.remove('option--active')
            } else if (e.target.dataset.option === 'fullScreen') {
                fullScreen();
                e.target.classList.toggle('option--active')
            }
        })
    }

    changeStateOfDescription(getOptionMenu())
}

export {executeOption, getOptions};
