function debouce(func, delay = 300) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.call(this, args);
    }, delay);
  };
}

export default debouce;
