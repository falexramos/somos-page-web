const albums = document.querySelectorAll('.album');

albums.forEach((album) => {
    const modal = album.querySelector('.modal');
    const closeModal = album.querySelector('.close-modal');
    const modalContent = album.querySelector('.modal-content');
    const modalImages = Array.from(modalContent.querySelectorAll('img'));
    const modalPrev = album.querySelector('.prev');
    const modalNext = album.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        modalImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
        currentIndex = index;
    }

    modalPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + modalImages.length) % modalImages.length;
        showImage(currentIndex);
    });

    modalNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % modalImages.length;
        showImage(currentIndex);
    });

    album.addEventListener('click', () => {
        modal.style.display = 'block';
        showImage(currentIndex);
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
