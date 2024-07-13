const btnPrecedent = document.querySelector('.slider__btn--previous');
const btnSuivant = document.querySelector('.slider__btn--next');
const slides = document.querySelectorAll('.slide');

let currentSlideIndex = 0;

function updateBtnState(button, condition) {
    button.disabled = condition;
    button.classList.toggle('slider__btn--disabled', condition);
}

function updateAllBtnStates() {
    updateBtnState(btnPrecedent, currentSlideIndex === 0);
    updateBtnState(btnSuivant, currentSlideIndex === slides.length - 1);
}

function updateSliderPosition() {
    slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    updateAllBtnStates();
}

btnPrecedent.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSliderPosition();
    }
});

btnSuivant.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        updateSliderPosition();
    }
});

// Initial update
updateSliderPosition();


/*VIEUX CODE
const btnPrecedent = document.querySelector('.slider__btn--previous');
const btnSuivant = document.querySelector('.slider__btn--next');
const slides = document.querySelectorAll('.slide');

let currentSlideIndex = 0;

function updateBtnState(button, condition) {
    button.disabled = condition;
    button.classList.toggle('slider__btn--disabled', condition);
}

function updateAllBtnStates() {
    updateBtnState(btnPrecedent, currentSlideIndex === 0);
    updateBtnState(btnSuivant, currentSlideIndex === slides.length - 1);
}

function updateSliderPosition() {
    slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    updateAllBtnStates();
}

btnPrecedent.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSliderPosition();
    }
});

btnSuivant.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        updateSliderPosition();
    }
});

// Initial update
updateSliderPosition();
*/
