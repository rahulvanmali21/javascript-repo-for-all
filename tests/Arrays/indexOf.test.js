describe("Array.indexOf", () => {
  require("../../Polyfills/Array/indexOf");
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = ["1", "2", "3", "4", "5"];
  let arr3 = [];
  let arr4 = ["R", "#", "f", "h", "q"];

  test("Array of number", () => {
    expect(arr1.indexOf(arr1[4])).toBe(4);
    expect(arr1.indexOf("5")).toBe(-1);
  });
  test("Array of number as strings", () => {
    expect(arr2.indexOf(arr2[4])).toBe(4);
    expect(arr2.indexOf(5)).toBe(-1);
  });
  test("Array of random strings", () => {
    expect(arr4.indexOf(arr4[0])).toBe(0);
    expect(arr4.indexOf(arr4[0].toLowerCase())).toBe(-1);
    expect(arr4.indexOf(arr4[2])).toBe(2);
  });
  test("empty Array", () => {
    expect(arr3.indexOf(5)).toBe(-1);
  });
  test("null search value", () => {
    expect(arr4.indexOf()).toBe(-1);
  });
  test("searching null value in array of null values", () => {
    expect(arr5.indexOf(null)).toBe(0);
    expect(arr5.indexOf(undefined)).toBe(-1);
  });
});
