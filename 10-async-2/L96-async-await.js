// async function always return a promise
const getTodos = async () => {
  // fetch('todos/luigi.json').then(() => {})
  const response = await fetch('todos/luigi.json');
  // when we throw a new error inside an async function the promise returned by the async function is rejected
  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }
  const data = await response.json();
  return data;
};
getTodos()
  .then((data) => console.log('resolved: ', data))
  .catch((err) => console.log('rejected: ', err.message));
