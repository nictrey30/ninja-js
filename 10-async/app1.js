const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // the state that the current request is in -> readyState
  console.log(request, request.readyState);
});

// setting up the request
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// sending the request
request.send();

// we can track the progress of the request using an event listener -> readystatechange
