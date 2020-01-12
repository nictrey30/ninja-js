const ul = document.querySelector('.people');
const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const outputLi = el => {
  let newLi = document.createElement('li');
  newLi.innerText = `${el}`;
  ul.appendChild(newLi);
  newLi.style.color = 'purple';
};
people.forEach(outputLi);
