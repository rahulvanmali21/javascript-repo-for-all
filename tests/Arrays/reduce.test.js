test("Array.reduce", () => {
  require("../../Polyfills/Array/reduce");
  let numArray = [1, 2, 3, 4, 5];
  let sum = numArray.reduce((acc, ele) => ele + acc, 0);
  expect(sum).toBe(1 + 2 + 3 + 4 + 5);

  sum = numArray.reduce((acc, ele) => ele + acc, 15);
  expect(sum).toBe(1 + 2 + 3 + 4 + 5 + 15);
});
