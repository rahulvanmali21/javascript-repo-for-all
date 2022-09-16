Promise.allSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let promisesExecuted = 0;
    for (let index = 0; index < promises.length; index++) {
      const promise = promises[index];
      promise
        .then((data) => {
          result[index] = { value: data, status: "fulfilled" };
          promisesExecuted += 1;
        })
        .catch((error) => {
          result[index] = { reason: error, status: "fulfilled" };
          promisesExecuted += 1;
        })
        .finally(() => {
          if (promisesExecuted === promises.length) {
            resolve(result);
          }
        });
    }
  });
};
