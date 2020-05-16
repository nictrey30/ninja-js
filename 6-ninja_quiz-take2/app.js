const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];
  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  // scroll to the top
  window.scrollTo(0, 0);
  // show results on page

  result.classList.remove('d-none');
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    }
    output++;
  }, 10);
});

let i = 0;
const timer = setInterval(() => {
  console.log('hello world');
  i++;
  if (i === 5) {
    clearInterval(timer);
  }
}, 1000);
