const button = document.querySelector('button');
const ul = document.querySelector('ul');

ul.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('coloredLi');
  }
  if (
    e.target.tagName === 'I' &&
    e.target.parentElement.parentElement.className === 'coloredLi'
  ) {
    e.target.parentElement.parentElement.remove();
  }
});

button.addEventListener('click', () => {
  let newLi = prompt('Enter todo: ');
  let html = `<li>${newLi}<a href="#"><i class="fas fa-times"></i></a></li>`;
  ul.innerHTML += html;
});
