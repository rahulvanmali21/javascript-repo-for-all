describe("String.includes", () => {
  require("../../Polyfills/String/includes");
  let string = "Hello , My age is 25";

  test("finding normal substring", () => {
    let substring1 = "Hello";
    expect(string.includes(substring1)).toBe(true);
  });
  test("finding substring doest exist", () => {
    let substring2 = "Bye";
    expect(string.includes(substring2)).toBe(false);
  });
  test("finding empty substring", () => {
    expect(string.includes("")).toBe(true);
  });
  test("finding null substring", () => {
    expect(string.includes()).toBe(false);
  });
  test("finding uppercase substring", () => {
    let substring = "Hello";
    expect(string.includes(substring.toUpperCase())).toBe(false);
  });
  test("finding lower case substring", () => {
    let substring = "Hello";
    expect(string.includes(substring.toLowerCase())).toBe(false);
  });
  test("finding number as string", () => {
    let substring = "25";

    expect(string.includes(substring)).toBe(true);
  });
  test("finding number as NumBer", () => {
    let substring = 25;
    expect(string.includes(substring)).toBe(true);
  });
  test("finding Object", () => {
    let substring = { hello: "world" };

    expect(string.includes(substring)).toBe(false);
  });
});
