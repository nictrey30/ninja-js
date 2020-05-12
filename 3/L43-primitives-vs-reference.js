// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
scoreOne = 100;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);
// scoreOne: 100, scoreTwo: 50

// reference values
let userOne = { name: 'Ryu', age: 30 };
let userTwo = userOne;
userOne.age = 50;

console.log(userOne, userTwo);
// { name: 'Ryu', age: 50 } { name: 'Ryu', age: 50 }
