const getTodos = resource => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('could not fetch data');
      }
    });
    request.open('GET', resource);
    request.send();
  });
};

// getTodos('https://jsonplaceholder.typicode.com/todoss/1')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

getTodos('todos/luigi.json')
  .then(data => {
    console.log(data);
    return getTodos('todos/mario.json');
  })
  .then(data => {
    console.log(data);
    return getTodos('todos/shaun.json');
  })
  .then(data => console.log(data))
  .catch(err => console.log('promise rejected', err));
