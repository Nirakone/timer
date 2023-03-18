const input = process.argv.slice(2);
//new variable assigned array, the 2 is where reading of the index starts when
//person inputs number after commands

const alarms = input.filter(function(givenNum) {
  //array filter function going through the items of input array
  return !isNaN(givenNum) && givenNum > 0;
  //checks if each number is a number that is also bigger than 0
});

alarms.forEach(function(alarm) {
  //array forEach method to over over items
  setTimeout(function() {
    process.stdout.write('\x07');
    //code given by LHL for beep sounds
  }, alarm * 1000);
  //1 second multiplied by inputed numbers
});
