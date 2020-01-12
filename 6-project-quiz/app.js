const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const scoreDisplay = document.querySelector(".score");

form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;
  let userAnswers = [];
  const inputs = document.querySelectorAll(".my-5 input");
  const inputsArray = Array.from(inputs);
  inputsArray.forEach(el => {
    if (el.checked) {
      userAnswers.push(el.value);
    }
  });
  correctAnswers.forEach((el, index) => {
    if (el === userAnswers[index]) {
      score++;
    }
  });
  scrollTo(0, 0);
  scoreDisplay.textContent = `Your score is ${(score / correctAnswers.length) *
    100} %`;
});

let i = 0;
const timer = setInterval(() => {
  console.log("hello");
  i++;
  if (i === 5) {
    clearInterval(timer);
  }
}, 1000);
