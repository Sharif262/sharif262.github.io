document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline > li > .timeline-panel');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        items.forEach(item => {
            if (isElementInViewport(item)) {
                item.parentElement.classList.add('timeline-visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const homeSection = document.getElementById('home');
    const mobileNav = document.getElementById('mobile-nav');
    const hamburger = document.getElementById('hamburger');

    function checkScroll() {
        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
        if (homeSectionBottom <= 0) {
            navbar.classList.add('nav-background');
        } else {
            navbar.classList.remove('nav-background');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
    });
});
