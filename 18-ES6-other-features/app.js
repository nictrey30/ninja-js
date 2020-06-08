// rest parameter - if we don't know how many parameters we want -> takes all the arguments that we pass into the function when we call it and it bundles them up into a single aray parameter
const double = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};
const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8);
console.log(result);

// spread syntax (arrays) - spreads the array out into its individual components
const people = ['shaun', 'ryu', 'crystal'];
console.log(...people);
const members = ['mario', 'chun-li', ...people];
console.log(members);

// spread syntax (objects)
const person = {
  name: 'shaun',
  age: 30,
  job: 'ninja'
};
const personClone = { ...person, location: 'manchester' };
console.log(personClone);

// sets
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
console.log(namesSet);

const uniqueNames = [...namesSet];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
console.log(ages);

ages.delete(25);
console.log(ages.size);

// if a set has a certain value inside it
console.log(ages.has(30));

// remove all values from the set
ages.clear();
console.log(ages);

const ninjas = new Set([
  { name: 'shaun', age: 30 },
  { name: 'crystal', age: 29 },
  { name: 'chun-li', age: 32 }
]);
ninjas.forEach((ninja) => console.log(ninja.name, ninja.age));
