require("../../Polyfills/String/capitalize");
test("Normal Test", () => {
  let str = "rahul";
  let output = str.capitalize();
  expect(output[0]).toBe(str[0].toUpperCase());
  expect(output[1]).toBe(str[1]);
  expect(output.length).toBe(str.length);
});
