const para1 = document.querySelector('div>p:first-child');
const para2 = document.querySelector('.error');
const divError = document.querySelector('div.error');
// console.log(para2);
// console.log(divError);

// grab all the p tags
const allParas = document.querySelectorAll('p');
let arrayParas = Array.prototype.slice.call(allParas);

// allParas is a NodeList
// console.log(allParas[0]);
allParas.forEach(el => console.log(el));

const errors = document.querySelectorAll('.error'); // - returns a NodeList

// get element by ID
const title = document.getElementById('page-title');
console.log(title);
// get elements by their class name
const errors2 = document.getElementsByClassName('error'); // - returns a HTML Collection
console.log(errors2);
// get element by their tag name
const para3 = document.getElementsByTagName('p'); // - returns a HTML Collection
