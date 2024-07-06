document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.timeline > li > .timeline-panel');
  const navbar = document.getElementById('navbar');
  const homeSection = document.getElementById('home');
  const navLinks = document.querySelectorAll('.nav-right a');

  // Check if elements are in viewport
  const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  };

  // Handle scroll for timeline animations
  const handleScroll = () => {
      items.forEach(item => {
          if (isElementInViewport(item)) {
              item.parentElement.classList.add('timeline-visible');
          }
      });

      // Check if navbar should have background
      const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
      if (homeSectionBottom <= 0) {
          navbar.classList.add('nav-background');
      } else {
          navbar.classList.remove('nav-background');
      }
  };

  // Initial scroll check
  handleScroll();

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Smooth scrolling
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          window.scrollTo({
              top: targetElement.offsetTop - navbar.offsetHeight, // Adjust for navbar height
              behavior: 'smooth'
          });
      });
  });
});

// script.js
function toggleNav() {
    const navRight = document.getElementById('nav-right');
    navRight.classList.toggle('show');
}
