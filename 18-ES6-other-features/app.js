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

// spread syntax (objects)
