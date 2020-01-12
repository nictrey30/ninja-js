//  common string methods
let result;
let email = 'traian21a@yahoo.com';
// result = email.lastIndexOf('o');
result = email.slice(0, email.indexOf('@'));
result = email.substr(0, 9); // from position 0 , 9 characters
result = email.replace('yahoo', 'google');

// nummbers
let radius = 10;
const PI = 3.14;

// arrays
let ninjas = ['shaun', 'ryu', 'chun-li'];
// join array into a single string
result = ninjas.join(', ');
result = ninjas.indexOf('chun-li');
result = ninjas.concat(['ana', 'iulia']);

// booleans
result = email.includes('@');
let names = ['mario', 'luigi', 'toad'];
result = names.includes('luigi');

// type conversion
let score = '100';

// console.log(result);
console.log(typeof score);
console.log(Number(score) + 1);

// switch statement
let grade = 'D';
switch (grade) {
  case 'A':
    console.log('grade is A');
    break;
  case 'B':
    console.log('grade is B');
    break;
  case 'C':
    console.log('grade is C');
    break;
  case 'D':
    console.log('grade is D');
    break;
  case 'E':
    console.log('grade is E');
    break;
  default:
    console.log('your grade is wrong');
}
