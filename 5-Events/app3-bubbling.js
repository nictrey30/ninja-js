const ul = document.querySelector('ul');
const button = document.querySelector('button');
const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    console.log('event in LI');
    e.stopPropagation();
    // e.target.remove();
  });
});

ul.addEventListener('click', e => {
  console.log('event in ul');
});
