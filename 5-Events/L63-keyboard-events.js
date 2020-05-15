const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-z]{6,12}$/i;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = 'username valid';
  } else {
    // feedback help info
    feedback.textContent =
      'username must contain letters only and be between 6-12 characters long';
  }
});

// live feedback
form.username.addEventListener('keyup', (e) => {
  // console.log(e.target.value, form.username.value); -> the same thing
  if (usernamePattern.test(e.target.value)) {
    e.target.className = 'passed';
  } else {
    e.target.className = 'failed';
  }
});
