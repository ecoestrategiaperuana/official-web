const allHoverImages = document.querySelectorAll('.hover__container--left--hover picture img');
const imgContainer = document.querySelector('.hover__container--left--img');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('hover__container--left--hover--img--active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('hover__container--left--hover--img--active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('hover__container--left--hover--img--active');
    });
}