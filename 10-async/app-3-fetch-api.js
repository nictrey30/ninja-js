// async & await
// when we put async in front of a function it will always return a promise,
// regardless of what's inside
const getTodos = async () => {
  // await will stop the assignment until the promise has resolved
  // we stall the code only inside this asyn function, which is by itself non-blocking
  const response = await fetch('todos/luisgi.json');
  // console.log(response);
  // the json() method is async, and returns a promise
  const data = await response.json();
  return data;
};
// console.log(1);
// console.log(2);
getTodos()
  .then(data => console.log('resolved', data))
  .catch(err => console.log(`promise rejected ... ${err}`));
// console.log(3);
// console.log(4);
// fetch api
//fetch('todos/luigi.json'); -> returns a promise
// fetch('todos/luigi.json')
//   .then(response => {
//     console.log('resolved', response);
//     // response.json() -> returns a promise
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('rejected', err);
//   });
