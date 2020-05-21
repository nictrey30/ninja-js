// fetch api -> returns a promise
// the promise is only rejected when we get some kind of network error
fetch('todos/luigi.json')
  .then((response) => {
    console.log('resolved, ', response);
    // response.json() -> returns a promise
    return response.json();
  })
  .then((data) => console.log('resolved response.json(), ', data))
  .catch((err) => {
    console.log('rejected, ', err);
  });
