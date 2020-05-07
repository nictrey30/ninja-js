const myFunc = (callbackFn) => {
  let value = 50;
  callbackFn(value);
};
myFunc((value) => console.log(value));

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
people.forEach((person, index) => console.log(`${person} at index ${index}`));
