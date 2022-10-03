const mergeSort = function (array) {
  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
};

function merge(left, right) {
  let leftpointer = 0;
  let rightpointer = 0;
  let output = [];
  while (leftpointer < left.length && rightpointer < right.length) {
    if (left[leftpointer] < right[rightpointer]) {
      output.push(left[leftpointer]);
      leftpointer += 1;
    } else {
      output.push(right[rightpointer]);
      rightpointer += 1;
    }
  }
  while (leftpointer < left.length) {
    output.push(left[leftpointer]);
    leftpointer += 1;
  }
  while (rightpointer < right.length) {
    output.push(right[rightpointer]);
    rightpointer += 1;
  }
  return output;
}

let a = [4, 6, 2, 1, 4, 6, 2, 1, 4, 6, 2, 1, 4, 6, 2, 1];
console.log(a);

console.log(mergeSort(a));
