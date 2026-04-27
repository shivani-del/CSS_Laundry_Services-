// Select the hamburger button and the navigation menu
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

// Check if elements exist before adding event listener
if (hamburgerBtn && navMenu) {
    // Add click event listener to the hamburger button
    hamburgerBtn.addEventListener('click', () => {
        // Toggle the 'menu-open' class to show/hide the menu
        navMenu.classList.toggle('menu-open');
        
        // Toggle an 'active' class on the button itself (useful for CSS animations)
        hamburgerBtn.classList.toggle('active');
    });
}
