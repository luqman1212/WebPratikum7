document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const popup = document.querySelector('#menuPopup');
    const popupImage = document.querySelector('#popupImage');
    const popupTitle = document.querySelector('#popupTitle');
    const popupDescription = document.querySelector('#popupDescription');
    const closeBtn = document.querySelector('.close-btn');

    // Event listener untuk pop-up
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');
            const image = item.getAttribute('data-image');

            popupTitle.textContent = title;
            popupDescription.textContent = description;
            popupImage.src = image;

            popup.style.display = 'flex';
        });
    });

    // Menutup pop-up
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Menutup pop-up saat klik di luar konten
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});