const selectionSort = function (array) {
  function getMaxIndex(arr, start, end) {
    let max = start;
    for (let index = start; index <= end; index++) {
      max = arr[max] < arr[index] ? index : max;
    }
    return max;
  }
  for (let index = 0; index < array.length; index++) {
    let selectionIndex = array.length - index - 1;
    let maxIndex = getMaxIndex(array, 0, selectionIndex);
    [array[maxIndex], array[selectionIndex]] = [
      array[selectionIndex],
      array[maxIndex],
    ];
  }
};

let a = [2, -32, 0, 78, 1];
console.log(a);
selectionSort(a);
console.log(a);
