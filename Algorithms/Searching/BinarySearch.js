export const BinarySearch = function (arr, target) {
  if (arr.length < 1) {
    return -1;
  }
  if (arr.length === 1 && arr[0] === target) {
    return 0;
  }
  while (end > start) {
    let mid = (end - start) / 2 + start;
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      mid = end;
    } else {
      start = mid;
    }
  }
  return -1;
};
