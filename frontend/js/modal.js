document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('open-modal');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('modal-close');
    const backBtn = document.getElementById('modal-back');

    function openModal(e) {
        if (e) e.preventDefault();
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backBtn) backBtn.addEventListener('click', closeModal);

    // close on overlay click
    modal.addEventListener('click', (ev) => {
        if (ev.target === modal) closeModal();
    });

    // close on ESC
    document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
});