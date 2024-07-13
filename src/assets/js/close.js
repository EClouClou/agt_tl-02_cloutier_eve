function closeFeature(e) {
    const feature = e.target.closest('.overlay, .header-top');
    feature.classList.add('feature--hidden');
}

const btnClose = document.querySelectorAll('.feature--close');

btnClose.forEach(button => {
    button.addEventListener('click', closeFeature);
});