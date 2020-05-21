const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  // track the progress of the request
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText);
      const data = JSON.parse(request.responseText); // -> array of js objects
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // console.log('could not fetch the data');
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
};

// callback hell
getTodos('todos/luigi.json', (err, data) => {
  console.log(data);
  getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/shaun.json', (err, data) => {
      console.log(data);
    });
  });
});
