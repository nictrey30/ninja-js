const para = document.querySelector('div>p');
// console.log(para.innerText); // inner text of the para element
// para.innerText = 'ninjas are awesome';

// const paras = document.querySelectorAll('p');
// paras.forEach(el => {
//   console.log(el.innerText);
//   el.innerText += ' new text';
// });

const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2>this is a new h2</h2>';
const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
  // let text = document.createTextNode(person);
  // let newPara = document.createElement('p');
  // newPara.appendChild(text);
  // content.appendChild(newPara);
});
