document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline > li > .timeline-panel');
    const navbar = document.getElementById('navbar');
    const homeSection = document.getElementById('home');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

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

        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
        if (homeSectionBottom <= 0) {
            navbar.classList.add('nav-background');
        } else {
            navbar.classList.remove('nav-background');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileNav.classList.remove('show');
        }
    });
});
