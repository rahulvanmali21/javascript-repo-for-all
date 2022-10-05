const quickSort = function (array, low = 0, high = array.length - 1) {
  if (low >= high) {
    return;
  }
  let start = low;
  let end = high;
  let mid = Math.floor(start + (end - start) / 2);
  let pivot = array[mid];
  while (start <= end) {
    while (array[start] < pivot) start += 1;

    while (array[end] > pivot) end -= 1;

    if (start <= end) {
      [array[start], array[end]] = [array[end], array[start]];
      start += 1;
      end -= 1;
    }
  }
  quickSort(array, low, end);
  quickSort(array, start, high);
};


