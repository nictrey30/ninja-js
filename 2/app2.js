const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
const ul = document.querySelector('.people');

function createLi(content) {
  let html = `<li>${content}</li>`;
  ul.innerHTML += html;
}

people.forEach(el => {
  createLi(el);
});
