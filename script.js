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

    function checkScroll() {
        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
        if (homeSectionBottom <= 0) {
            navbar.classList.add('nav-background');
        } else {
            navbar.classList.remove('nav-background');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check in case user starts scrolled down
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const homeSection = document.getElementById('home');

    window.addEventListener('scroll', function () {
        const homeHeight = homeSection.offsetHeight;
        if (window.scrollY > homeHeight - navbar.offsetHeight) {
            navbar.classList.add('nav-background');
        } else {
            navbar.classList.remove('nav-background');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    hamburger.addEventListener('click', function () {
        if (mobileNav.style.display === 'flex') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'flex';
        }
    });

    // Close the mobile menu when a link is clicked
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileNav.style.display = 'none';
        });
    });
});
