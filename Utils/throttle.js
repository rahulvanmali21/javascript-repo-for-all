function throttle(func, delay = 200) {
  let shouldWait = false;
  let waitingArgs;
  const timeOutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      func(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeOutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    func(...args);
    shouldWait = true;
    setTimeout(timeOutFunc, delay);
  };
}
