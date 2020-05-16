//  for the products over 20, sell it by half price
const products = [
  { name: 'gold star', price: 30 },
  { name: 'green shell', price: 10 },
  { name: 'red shell', price: 40 },
  { name: 'banana skin', price: 5 },
  { name: 'mushroom', price: 50 }
];

let cheapProducts = products
  .filter((product) => product.price > 20)
  .map((el) => {
    return { name: el.name, price: el.price / 2 };
  });

console.log(cheapProducts);
