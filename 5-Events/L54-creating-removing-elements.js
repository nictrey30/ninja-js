const button = document.querySelector('button');
const ul = document.querySelector('ul');

const items = document.querySelectorAll('li');
items.forEach((item) => {
  item.addEventListener('click', (e) => {
    // e.target.style.textDecoration = 'line-through';
    e.target.remove();
  });
});

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  // ul.append(li);
  ul.prepend(li);
});
