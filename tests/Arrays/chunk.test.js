describe("Array.chunk", () => {
  require("../../Polyfills/Array/chunk");

  let array = Array(15)
    .fill(1)
    .map((_, i) => i);
  require();
  test("chunk size less than array length", () => {
    let chunkedArray = array.chunk(3);
    expect(chunkedArray[0]).toEqual([0, 1, 2]);
    expect(chunkedArray.length).toBe(5);
  });
  test("chunk size equal to array length", () => {
    let chunkedArray = array.chunk(array.length);
    expect(chunkedArray.length).toBe(array.length);
    expect(chunkedArray).toEqual(array);
  });
  test("chunk size larger than array length", () => {
    let chunkedArray = array.chunk(array.length + 10);
    expect(chunkedArray.length).toBe(array.length);
    expect(chunkedArray).toEqual(array);
  });

  test("chunk size 0", () => {
    let chunkedArray = array.chunk(0);
    expect(chunkedArray.length).toBe(array.length);
    expect(chunkedArray).toEqual(array);
  });

  test("chunk size 0 && array size 0", () => {
    let arr = [];
    let chunkedArray = arr.chunk(0);
    expect(chunkedArray.length).toBe(arr.length);
    expect(chunkedArray).toEqual(arr);
  });
  test(" array size 0", () => {
    let arr = [];
    let chunkedArray = arr.chunk(10);
    expect(chunkedArray.length).toBe(arr.length);
    expect(chunkedArray).toEqual(arr);
  });
});
