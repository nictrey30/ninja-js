const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(form.username.value);
});

// testing regex
const username = 'shaun';
const pattern = /^[a-z]{5,12}$/;

// let result = pattern.test(username);
// if (result) {
//   console.log('regex test passed');
// } else {
//   console.log('regex test failed');
// }

let result = username.search(pattern);
console.log(result);
