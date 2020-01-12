const button = document.querySelector('button');
const ul = document.querySelector('ul');
let deleteBtns = document.querySelectorAll('a');
let deleteBtnsArray = Array.from(deleteBtns);

button.addEventListener('click', () => {
  // console.log('you clicked me');
  let todo = prompt('Enter a todo:');
  let newLi = document.createElement('li');
  newLi.appendChild(document.createTextNode(todo));
  html = '<a href="#"><i class="fas fa-times"></i></a>';
  newLi.innerHTML += html;
  ul.appendChild(newLi);
  // put the new button in the deleteBtnsArray
  let newDelete = document.querySelector('li:last-child a');
  deleteBtnsArray.push(newDelete);
});

ul.addEventListener('click', e => {
  // console.log(e.target);
  lis = document.querySelectorAll('ul li');
  lisArray = Array.from(lis);
  lisArray.forEach(el => {
    if (e.target === el) {
      // console.log(`'${el.textContent}' clicked`);
      // console.log(e.target); -> will print the li because we are checking
      // if e.target is in the lis array
      e.target.classList.toggle('coloredLi');
      // e.target.remove();
    }
  });
  // console.log(e.target); -> will print i, because e.target is now i, and it's not in the lis array
  //  if(e.target.tagname === 'LI') -> an alternative
  if (
    // the all a array includes the i.parent(aka a) clicked element
    deleteBtnsArray.includes(e.target.parentElement) &&
    e.target.parentElement.parentElement.className === 'coloredLi'
  ) {
    e.target.parentElement.parentElement.remove();
  }
});
