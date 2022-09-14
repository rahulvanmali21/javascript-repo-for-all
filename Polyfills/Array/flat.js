Array.prototype.flat = function (depth = 1) {
  let arr = this;
  function flattenArray(arr, depth) {
    let output = [];
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      if (Array.isArray(element) && depth > 0) {
        output.push(...flattenArray(element, depth - 1));
      } else {
        output.push(element);
      }
    }
    return output;
  }
  return flattenArray(arr, depth);
};

let a = [1, 2, 3, [[4, 5], 6]];

console.log(a);
console.log(a.flat(2));
