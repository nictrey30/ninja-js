// promise example
const getSomething = () => {
  // resolve, reject are build-in functions in the Promise API
  return new Promise((resolve, reject) => {
    // fetch something

    // resolve('some data');
    reject('some error');
  });
};

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
