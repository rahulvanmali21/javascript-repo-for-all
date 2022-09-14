function once(func) {
  let funcCalled = false;
  return (...args) => {
    if (!funcCalled) {
      funcCalled = true;
      func.call(this, args);
    }
  };
}
export default once;
