// async function always return a promise
const getTodos = async () => {
  // fetch('todos/luigi.json').then(() => {})
  const response = await fetch('todos/luigi.json');
  const data = await response.json();
  return data;
};
getTodos()
  .then((data) => console.log('resolved: ', data))
  .catch((err) => console.log('rejected: ', err.message));
