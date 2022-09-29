test("Array.forEach", () => {
  require("../../Polyfills/Array/forEach");
  let numArray = [1, 2, 3, 4, 5];

  let result = [];
  numArray.forEach((ele, i) => (result[i] = ele * 2));
  expect(result[0]).toBe(2);
  expect(result).toEqual([2, 4, 6, 8, 10]);
});
