const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  // track the progress of our request with readystatechange
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });
  request.open('GET', resource);
  request.send();
};

// getTodos('todos/luigi.json', (err, data) => {
//   console.log('callback fired');
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
getTodos('todos/luigi.json', (err, data) => {
  console.log(data);
  getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/shaun.json', (err, data) => {
      console.log(data);
    });
  });
});
