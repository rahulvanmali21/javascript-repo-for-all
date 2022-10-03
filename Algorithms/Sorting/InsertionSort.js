const insertionSort = function (array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] < arr[j - 1]) {
        [array[j], array[i]] = [array[i], array[j]];
      } else {
        break;
      }
    }
  }
};
