function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    const menuButton = document.querySelector('.menu-button');
    
    if (navbar.style.right === '0%') {
        navbar.style.right = '-100%';
        menuButton.style.display = 'block'; // Show menu button when navbar is closed
    } else {
        navbar.style.right = '0%';
        menuButton.style.display = 'none'; // Hide menu button when navbar is open
    }
}

const currentPage = window.location.pathname.split('/').pop();
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
