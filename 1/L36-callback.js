let people = ['mario', 'luigi', 'ryu', 'trey', 'chun-li'];

const ul = document.querySelector('ul');

people.forEach((person) => {
  ul.innerHTML += `<li>${person}</li>`;
});
