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

const videoContainer = document.getElementById('video-container');
const thumbnail = document.getElementById('video-thumbnail');
const playButton = document.getElementById('play-button');

videoContainer.addEventListener('click', function () {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/p0jKEHdSo-Y?autoplay=1&rel=0');
  iframe.setAttribute('title', 'Mirissa Wave Co. Activities');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('allowfullscreen', '');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.borderRadius = '12px';

  videoContainer.innerHTML = ''; // Remove thumbnail + button
  videoContainer.appendChild(iframe);
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Auto-close navbar when a link is clicked (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});



