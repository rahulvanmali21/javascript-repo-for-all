export const LinearSearch = function (arr, target) {
  let start = 0;
  while (start < arr.length - 1) {
    if (arr[start] === target) {
      return start;
    }
    start += 1;
  }
};
