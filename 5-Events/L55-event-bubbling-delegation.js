const ul = document.querySelector('ul');
const button = document.querySelector('button');
const items = document.querySelectorAll('li');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  // ul.append(li);
  ul.prepend(li);
});

// items.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     // if we don't want the event to bubble up to UL, we can stop the propagation
//     e.stopPropagation();
//     console.log('event in LI');
//     e.target.remove();
//   });
// });

ul.addEventListener('click', (e) => {
  // console.log('event in UL');
  // find out what element was clicked inside the ul
  // when we click something in the UL, is that event target an LI ?
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
