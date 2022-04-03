import server from '../index';
import chalk from 'chalk';

const isDevMode = () => {
  return server.settings.env === 'development';
};

const newError = (error) => {
  const isInDevelopment = isDevMode();
  if (isInDevelopment) {
    const message = chalk.red(error);
    return console.error(chalk.bgRed.black.bold('Error'), message);
  }
  throw new Error(error);
};

const runTimes = (times = 1) => {
  const callback = (fn) => {
    [...Array(times).keys()].forEach(fn);
  };
  return {with: callback};
};

export const devMethods = {
  isDevMode,
  newError,
  runTimes,
};
