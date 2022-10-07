const quickSort = function (array) {
  if (array.length < 2) {
    return array;
  }
  let left = [];
  let right = [];
  let pivot = array.at(-1);
  for (let index = 0; index < array.length - 1; index++) {
    const element = array[index];
    if (element > pivot) {
      right.push(element);
    } else {
      left.push(element);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

