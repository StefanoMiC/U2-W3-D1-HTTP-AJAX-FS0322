const myPromise = () =>
  new Promise((resolve, reject) => {
    if (false) {
      setTimeout(function () {
        resolve("Promise Fulfilled Successfully");
      }, 3000);
    } else {
      reject("Error happened");
    }
  });

myPromise()
  .then(data => console.log(data))
  .catch(err => console.log(err));
