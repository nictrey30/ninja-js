const getTodos = () => {
  const request = new XMLHttpRequest();

  // track the progress of the request
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    } else if (request.readyState === 4) {
      console.log('could not fetch the data');
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
  request.send();
};

getTodos();
