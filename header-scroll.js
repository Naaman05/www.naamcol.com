// JavaScript to hide/show the header on scroll
let lastScrollTop = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // User is scrolling down, hide the header
        header.style.top = '-60px'; // Adjust this value to the negative height of your header
    } else {
        // User is scrolling up, show the header
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});
