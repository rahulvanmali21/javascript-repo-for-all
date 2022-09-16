Promise.any = function (promises) {
  var errorOutput = new Array(promises.length);
  var counter = 0;
  return new Promise((resolve, reject) => {
    for (let index = 0; index < promises.length; index++) {
      const promise = promises[index];
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          errorOutput[index] = err;
          counter += 1;
          if (counter === promises.length) {
            reject(errorOutput);
          }
        });
    }
  });
};
