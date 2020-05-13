// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });
const items = document.querySelectorAll('li');
items.forEach((item) => {
  // "e" is an event object created by the browser about the event that happened
  item.addEventListener('click', (e) => {
    // console.log('item clicked');
    // console.log(e.target);
    e.target.style.textDecoration = 'line-through';
  });
});
