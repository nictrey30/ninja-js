// arrow functions
const calcArea = radius => 3.14 * radius ** 2;

console.log(`Area of 5 is: ${calcArea(5)}`);
// practice arrow functions
/*
const greet = function() {
  return 'hello, world!';
}
const bill = function(products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax
  }
  return total;
}
*/
const greet = () => 'hello, world!';
console.log(greet());

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
console.log(bill([10, 15, 30], 0.2));
