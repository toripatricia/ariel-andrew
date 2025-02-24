function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    const menuButton = document.querySelector('.menu-button');
    const overlay = document.getElementById('overlay');

    if (navbar.style.right === '0%') {
        navbar.style.right = '-100%';
        menuButton.style.display = 'block'; // Show menu button when navbar is closed
        overlay.style.display = 'none'; // Hide overlay when navbar is closed
    } else {
        navbar.style.right = '0%';
        menuButton.style.display = 'none'; // Hide menu button when navbar is open
        overlay.style.display = 'block'; // Show overlay when navbar is open
    }
}

// Close navbar when clicking outside
document.addEventListener('click', function (event) {
    const navbar = document.getElementById('navbar');
    const menuButton = document.querySelector('.menu-button');
    const overlay = document.getElementById('overlay');

    // Check if the navbar is open and if the click is outside the navbar or menu button
    if (navbar.style.right === '0%' && !navbar.contains(event.target) && !menuButton.contains(event.target)) {
        navbar.style.right = '-100%';
        menuButton.style.display = 'block'; // Show menu button when navbar is closed
        overlay.style.display = 'none'; // Hide overlay when navbar is closed
    }
});

// Highlight the current page link
const currentPage = window.location.pathname.split('/').pop();
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});



// scroll animation


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(element => {
    observer.observe(element);
  });
});
