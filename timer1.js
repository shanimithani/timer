
const beepAtIntervals = function(secondsArray) {
  secondsArray.forEach((seconds) => {
    if (typeof seconds === 'number' && seconds > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
  });
};

const input = process.argv.slice(2);
const beeps = input.map(Number);
beepAtIntervals(beeps);