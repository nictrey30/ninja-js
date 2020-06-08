// we can pass identifiers to the symbols to describe what they are
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);
console.log(symbolOne === symbolTwo);

// symbols can be used as keys(property names) in objects
const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja.belt = 'black';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';

console.log(ninja);
