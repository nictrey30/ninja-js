const button = document.querySelector('button');
const popupWraper = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});
close.addEventListener('click', () => {
  popup.style.display = 'none';
});
popupWraper.addEventListener('click', (e) => {
  console.log(e.target);
  popup.style.display = 'none';
});
