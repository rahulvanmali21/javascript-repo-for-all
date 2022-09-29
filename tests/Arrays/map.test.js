test("Array.map", () => {
  require("../../Polyfills/Array/map");
  let numArray = [1, 2, 3, 4, 5];

  let result = numArray.map((ele) => ele * 2);
  expect(result[0]).toBe(2);
  expect(result).toEqual([2, 4, 6, 8, 10]);
});
