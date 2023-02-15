

const alarm = function() {
  let times = process.argv.slice(2);
  let timesInt = [];

  function compareNumbers(a, b) {
    return a - b;
  }
  
  for (let time of times) {
    time = parseInt(time);
    time = time * 1000;
    timesInt.push(time);
  }
  timesInt = timesInt.sort(compareNumbers);
  timesInt = timesInt.filter(number => number > 0);
  timesInt = timesInt.filter(number => number !== NaN);
  console.log(timesInt)
  
  for (let i = 0; i < timesInt.length; i++) {
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, timesInt[i]);
  }

}

alarm(process.argv)