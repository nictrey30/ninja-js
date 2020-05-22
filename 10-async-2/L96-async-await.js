// async function always return a promise
const getTodos = async () => {
  // fetch('todos/luigi.json').then(() => {})
  const response = await fetch('todos/luigi.json');
};
