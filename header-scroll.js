// JavaScript to handle header show/hide on scroll
let lastScrollTop = 0;
const header = document.querySelector('.main-header');
const threshold = 5; // Minimum scroll distance before header is hidden/shown

function onScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - scrollTop) <= threshold) {
        return;
    }

    if (scrollTop > lastScrollTop) {
        // Scrolling down - hide the header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show the header
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}

window.addEventListener('scroll', () => {
    window.requestAnimationFrame(onScroll);
});
