const mergeSortInPlace = function (array, s = 0, e = array.length) {
  if (e - s === 1) {
    return;
  }
  let m = Math.floor(s + e) / 2;
  mergeSortInPlace(array, s, m);
  mergeSortInPlace(array, m, e);
  mergeInplace(array, s, m, e);
};

function mergeInplace(arr, s, m, e) {
  let tempArr = [];
  let i = s;
  let j = m;

  while (i < m && j < e) {
    if (arr[i] < arr[j]) {
      tempArr.push(arr[i]);
      i += 1;
    } else {
      tempArr.push(arr[j]);
      j += 1;
    }
  }
  while (i < m) {
    tempArr.push(arr[i]);
    i += 1;
  }
  while (j < e) {
    tempArr.push(arr[j]);
    j += 1;
  }
  for (let l = 0; l < tempArr.length; l++) {
    arr[s + l] = tempArr[l];
  }
}
