let slides = document.getElementsByClassName("mySlides");
let slideIndex = 0;
let carouselTimer;
carousel();

function carousel() {

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex > slides.length -1) {slideIndex = 0}
    
    console.log(slideIndex);
    slides[slideIndex].style.display = "block";
    slideIndex++;
    
    window.clearTimeout(carouselTimer)
    carouselTimer = setTimeout(carousel, 5000); // change image every 2 seconds
}

function plusSlides (increment) {
    slideIndex = (increment < 1) ? slideIndex == 1 ? (slides.length - 1) : slideIndex - 2: slideIndex;
    carousel();
}