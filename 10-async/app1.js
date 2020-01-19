const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  // we can track the progress of the request using an event listener -> readystatechange
  request.addEventListener('readystatechange', () => {
    // the state that the current request is in -> readyState
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText);
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // console.log('some error occured');
      callback('could not fetch data', undefined);
    }
  });

  // setting up the request
  request.open('GET', resource);
  // sending the request
  request.send();
};

getTodos('todos/luigi.json', (err, data) => {
  console.log(data);
  getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/shaun.json', (err, data) => {
      console.log(data);
    });
  });
});
