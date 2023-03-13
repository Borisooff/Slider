const slider = document.querySelector('#slider');
const upBtn = document.querySelector('#up-btn');
const downBtn = document.querySelector('#down-btn');
const slideBar = document.querySelector('#slidebar');
const mainSlide = document.querySelector('.main__slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const sliderHeight = slider.clientHeight;

let activeSlideIndex = 0;

slideBar.style.top = `-${(slidesCount - 1) * sliderHeight}px`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp') {
        changeSlide('up');
    } else if (e.key === 'ArrowDown') {
        changeSlide('down');
    };
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        };
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        };
    };

    mainSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideBar.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
};