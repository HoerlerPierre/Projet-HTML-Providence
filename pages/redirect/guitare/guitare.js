// slide des guitares et informations

let currentSlide = 0;

function updateInfoBox() {
    const infos = document.querySelectorAll('.info-content');
    infos.forEach((info, index) => {
        if (index === currentSlide) {
            info.classList.add('active');
        } else {
            info.classList.remove('active');
        }
    });
}

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
    updateInfoBox();
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
    updateInfoBox();
}

updateInfoBox();