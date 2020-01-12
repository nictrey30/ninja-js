// callbacks & foreach
const myFunc = callback => {
  let value = 50;
  callback(value);
};

myFunc(value => console.log(value));

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
// let newPeople = [];

// people.forEach(el => {
//   if (el === 'mario' || el === 'luigi') {
//     newPeople.push(el + ' Nintendo');
//   } else {
//     newPeople.push(el + ' Fighter');
//   }
// });
const logPerson = (person, index) => {
  console.log(`${index}: ${person}`);
};
people.forEach(logPerson);
