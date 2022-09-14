function memoize(func, context) {
  let cache = {};
  return (...args) => {
    let argsString = JSON.stringify(args);
    if (!cache[argsString]) {
      cache[argsString] = func.call(context || this, args);
    }
    return cache[argsString];
  };
}

export default memoize;
