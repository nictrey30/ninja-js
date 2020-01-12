const title = document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px;') -> will overwrite the old style
title.style.margin = '50px';
title.style.fontSize = '28px';
title.style.textAlign = 'center';

// to remove the margin
title.style.margin = '';

const content = document.querySelector('p');
// console.log(content.classList);
const button = document.querySelector('button');
button.addEventListener('click', () => {
  if (content.className === 'error') {
    content.classList.toggle('error');
    content.classList.toggle('success');
  } else {
    content.classList.toggle('success');
    content.classList.toggle('error');
  }
});
// The className property sets or returns the class name of an element (the value of an element's class attribute).
