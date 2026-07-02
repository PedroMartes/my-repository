document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const images = document.querySelectorAll('.timeline-image');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
    };

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox.classList.contains('active')) {
                closeLightbox();
            }
            if (cardModal.classList.contains('active')) {
                fecharCardModal();
            }
        }
    });

    const cards = document.querySelectorAll('.timeline-row');
    const cardModal = document.getElementById('card-modal');
    const cardModalBody = document.getElementById('card-modal-body');
    const cardModalClose = document.getElementById('card-modal-close');

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.timeline-image')) {
                return;
            }

            cardModalBody.innerHTML = card.innerHTML;
            cardModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    cardModalClose.addEventListener('click', () => {
        fecharCardModal();
    });

    cardModal.addEventListener('click', (e) => {
        if (e.target === cardModal) {
            fecharCardModal();
        }
    });

    function fecharCardModal() {
        cardModal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            cardModalBody.innerHTML = '';
        }, 300);
    }

    const heartsContainer = document.querySelector('.hearts-background');
    const totalHearts = 35;

    for (let i = 0; i < totalHearts; i++) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.classList.add('scattered-heart');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z');
        svg.appendChild(path);

        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        const randomSize = Math.random() * 18 + 10;
        const randomOpacity = Math.random() * 0.12 + 0.05;
        const randomRotation = Math.random() * 60 - 30;

        svg.style.top = `${randomTop}%`;
        svg.style.left = `${randomLeft}%`;
        svg.style.width = `${randomSize}px`;
        svg.style.height = `${randomSize}px`;
        svg.style.opacity = randomOpacity;
        svg.style.transform = `rotate(${randomRotation}deg)`;

        heartsContainer.appendChild(svg);
    }
});