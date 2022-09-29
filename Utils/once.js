const once = function (func) {
  let funcCalled = false;
  return (...args) => {
    if (!funcCalled) {
      funcCalled = true;
      return func.call(this, ...args);
    }
  };
};
module.exports = once;
