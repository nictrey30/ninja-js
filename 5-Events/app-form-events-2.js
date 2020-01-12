const form = document.querySelector('.signup-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  // testing regex
  let user = form.username.value;
  let pattern = /^[a-z\d]{6,12}$/;

  if (pattern.test(user)) {
    console.log('regex test passed :)');
  } else {
    console.log('regex test failed :(');
  }
  form.reset();
});
