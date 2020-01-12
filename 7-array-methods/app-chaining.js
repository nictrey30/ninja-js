const products = [
  { name: 'gold star', price: 30 },
  { name: 'green shell', price: 10 },
  { name: 'red shell', price: 40 },
  { name: 'banana skin', price: 5 },
  { name: 'mushroom', price: 50 }
];

// 1. filter product that isn't over 20 in price
// 2. half price for those products
let cheapSale = products
  .filter(el => el.price < 20)
  .map(el => `The ${el.name} is now ${el.price / 2} RON`);
