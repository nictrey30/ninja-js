const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // validation
  const username = form.username.value;
  const usernamePattern = /^[a-z]{6,12}$/i;
  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = 'username valid';
  } else {
    // feedback help info
    feedback.textContent =
      'username must contain letters only and be between 6-12 characters long';
  }
});
