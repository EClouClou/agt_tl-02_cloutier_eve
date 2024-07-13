// JavaScript pour fermer l'élément
const featureCloseBtns = document.querySelectorAll('.feature--close');
const overlay = document.querySelector('.overlay');

function closeFeature() {
    overlay.classList.remove('feature--open');
}

featureCloseBtns.forEach(button => {
    button.addEventListener('click', closeFeature);
});

// JavaScript pour ouvrir l'élément
const featureOpenBtns = document.querySelectorAll('.feature--open');

function openFeature() {
    overlay.classList.add('feature--open');
}

featureOpenBtns.forEach(button => {
    button.addEventListener('click', openFeature);
});