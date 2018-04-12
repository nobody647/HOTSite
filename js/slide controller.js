// This script controls the slideshow on the home page

var interval = 7000; //Number of miliseconds between slide changes. 1000ms = 1 second
var currentSlide = 0; //Current slide

//When the page finishes loading, call nextSlide() regularly at the specified interval
$(document).ready(function () {
    window.setInterval(function () {
        nextSlide();
    }, interval);
});

function nextSlide() {
    var slides = document.getElementsByClassName("slide"); //Array of all slides

    //Increment slide
    if (currentSlide < slides.length) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }


    //Show active slide
    slides[currentSlide].style.opacity = "1";

    //Hide other slides
    for (var i = 0; i < slides.length; i++) {
        if (i != currentSlide) {
            slides[i].style.opacity = "0";
        }
    }

}