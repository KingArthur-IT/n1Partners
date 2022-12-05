//MODAL
const modal = document.querySelector('.wins-modal');


document.querySelectorAll('.letter').forEach((el) => {
    el.addEventListener('click', () => {
        if (modal){
            modal.classList.add('displayed');
            document.querySelector('body').classList.add('overflow-hidden');
            setTimeout(() => {
                modal.classList.add('visible');
            }, 300);
        }
    })
});

const closeModal = () => {
    if (modal){
        modal.classList.remove('visible');
        document.querySelector('body').classList.remove('overflow-hidden');
        setTimeout(() => {
            modal.classList.remove('displayed');
        }, 300);
    }
};

document.querySelector('.wins-modal__close')?.addEventListener('click', () => closeModal());
modal.addEventListener('click', () => closeModal());

document.querySelector('.wins-modal__hero').addEventListener('click', e => e.stopPropagation())