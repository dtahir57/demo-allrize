    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });

    closeButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
