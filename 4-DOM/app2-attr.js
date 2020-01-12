const link = document.querySelector('a');
// how to get an attribute
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.setAttribute('target', '_blank');
link.innerText = 'The Net Ninja WebSite';

const msg = document.querySelector('p');
// log the value of the class of the p tag
// console.log(msg.className);
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success'); // -> change the class
// msg.classList.add('success');
msg.setAttribute('style', 'color: red');
