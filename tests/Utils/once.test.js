const once = require("../../../Utils/once");

describe("utils/once", () => {
  test("with one args", () => {
    function logger(str) {
      console.log(str);
      return str;
    }
    let onceLogger = once(logger);
    let data = "logged it";
    let result = onceLogger(data);
    expect(result).toBe(data);

    result = onceLogger(data);
    expect(result).toBe(undefined);
  });
  test("with mulitple args", () => {
    function sum(args) {
      return args.reduce((acc, i) => i + acc);
    }
    let oncesum = once(sum);
    let data = [1, 2, 3, 4, 5];
    let result = oncesum(data);
    expect(result).toBe(15);

    result = oncesum(data);
    expect(result).toBe(undefined);
  });
});
