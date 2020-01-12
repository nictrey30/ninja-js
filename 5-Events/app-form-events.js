const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  // we don't want the page to refresh when we press submit,
  // (the default action on submit event is that the page refresh)
  // we want to handle the form ourselves
  e.preventDefault();
  // console.log(username.value);
  // getting fields from a form using dot notation and id/name attribute on the input fields
  console.log(form.username.value);
});

const username = 'ninjas@';
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// if (result) {
//   console.log('regex test passed :)');
// } else {
//   console.log('regex test failed :(');
// }

// the search() method searches a string for a value/pattern, and returns the position of the match
let result = username.search(pattern);
if (result !== -1) {
  console.log('regex test passed :)');
} else {
  console.log('regex test failed :(');
}
