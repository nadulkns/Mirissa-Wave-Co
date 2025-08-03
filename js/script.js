document.addEventListener('DOMContentLoaded', function () {
  // Flatpickr calendar
  flatpickr('#date', {
    minDate: 'today',
    dateFormat: 'Y-m-d',
  });

  // Section scroll animations
  const animatedSections = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.2 }
  );
  animatedSections.forEach((section) => observer.observe(section));

  // Highlight active section in navbar
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150; // adjust for sticky nav
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
