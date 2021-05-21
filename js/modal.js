const moreElem = document.querySelector('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
  modalElem.classList.remove('hidden');
};

const closeModal = () => {
  modalElem.classList.add('hidden');
};

moreElem.addEventListener('click', openModal);
modalElem.addEventListener('click', e => {
  const target = e.target;

  if (target.classList.contains('overlay') ||
      target.classList.contains('modal__close')) {
    closeModal()
  }

  if (target.classList.contains('modal__title')) {
    target.style.color = "tomato"
  }
})