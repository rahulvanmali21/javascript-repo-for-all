Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let completed = 0;
    let output = [];
    for (let index = 0; index < array.length; index++) {
      promises[index]
        .then((result) => {
          output[index] = result;
          completed += 1;
          if (completed === promises.length) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
