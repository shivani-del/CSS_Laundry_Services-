document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle menu when hamburger button is clicked
    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('menu-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburgerBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('menu-open')) {
            navMenu.classList.remove('menu-open');
        }
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480 && navMenu.classList.contains('menu-open')) {
            navMenu.classList.remove('menu-open');
        }
    });
});
