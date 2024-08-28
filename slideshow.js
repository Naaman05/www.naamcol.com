// File: slideshow.js

let slideIndex = 0; // Initialize slide index
showSlides(); // Start the slideshow

// Function to show slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Reset to first slide after the last
    slides[slideIndex-1].style.display = "block"; // Display current slide
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Function to control next/previous slide navigation
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
