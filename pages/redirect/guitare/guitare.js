// slide des guitares

let currentSlide = 0;

function slideLeft() {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    const slideWidth = document.querySelector('.slide').clientWidth;
    slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

function slideRight() {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    const slideWidth = document.querySelector('.slide').clientWidth;
    slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

