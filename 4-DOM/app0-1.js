const para = document.querySelector('div.error');
console.log(para);

const paras = document.querySelectorAll('p');
paras.forEach((para) => console.log(para));

const errors = document.querySelectorAll('.error');
console.log(errors);

// get element by ID
const title = document.getElementById('page-title');
console.log(title);
// get elements by their class name
const errors2 = document.getElementsByClassName('error'); // - returns a HTML Collection
console.log(errors2);
// get element by their tag name
const para3 = document.getElementsByTagName('p'); // - returns a HTML Collection
console.log(para3);
