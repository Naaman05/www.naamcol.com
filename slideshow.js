// JavaScript to handle automatic slideshow

let slideIndex = 0; // Initialize slide index
showSlides(); // Call function to display slides

function showSlides() {
    const slides = document.getElementsByClassName("mySlides"); // Get all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides initially
    }
    slideIndex++; // Increment slide index
    if (slideIndex > slides.length) { 
        slideIndex = 1; // Reset to the first slide if index exceeds number of slides
    }
    slides[slideIndex - 1].style.display = "block"; // Display the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
