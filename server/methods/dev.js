const newError = (error) => {
  throw new Error(error);
};

const runTimes = (times = 1) => {
  const callback = (fn) => {
    [...Array(times).keys()].forEach(fn);
  };
  return {with: callback};
};

const devMethods = {
  newError,
  runTimes,
};

module.exports = devMethods;
