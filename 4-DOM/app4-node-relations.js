const article = document.querySelector('article');
// console.log(article.children); -. HTMLCollection

console.log(Array.from(article.children)); // -> returns a new array

Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
});

// The difference between parentElement and parentNode, is that parentElement returns null if the parent node is not an element node:
const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);
