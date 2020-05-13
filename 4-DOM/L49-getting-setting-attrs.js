const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.pcgarage.ro');
link.innerText = 'Pc Garage';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('style', 'color: green');
