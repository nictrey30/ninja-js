const prices = [10, 30, 15, 25, 50, 40, 5];

let salePrices = prices.map(el => el + el * 0.3);

const products = [
  { name: 'gold star', price: 20 },
  { name: 'mushroom', price: 40 },
  { name: 'green shells', price: 30 },
  { name: 'banana skin', price: 10 },
  { name: 'red shells', price: 50 }
];
// change the price to half price if it's over 30
// destructive method
// let saleProducts = products.map(el => {
//   if (el.price > 30) el.price /= 2;
//   return el;
// });

// non-destructive method
let saleProducts = products.map(el => {
  if (el.price > 30) {
    return { name: el.name, price: el.price / 2 };
  } else {
    return el;
  }
});
