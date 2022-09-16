Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let index = 0; index < promises.length; index++) {
      const promise = promises[index];
      promise
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};
