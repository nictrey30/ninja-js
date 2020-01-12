const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   // validation
//   const username = form.username.value;
//   if (usernamePattern.test(username)) {
//     feedback.textContent = 'username valid';
//   } else {
//     feedback.textContent =
//       'username must contain letters only between 6-12 char long';
//   }
// });
form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value); -> the same thing
  // validation
  // console.log(e.target.value);
  if (usernamePattern.test(e.target.value)) {
    e.target.parentElement.className = 'valid';
  } else {
    e.target.parentElement.className = 'error';
  }
});
