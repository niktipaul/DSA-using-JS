const reverseString3 = inputString => [...inputString].reverse().join('');

// Driver code
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the string: ",function(input){
    console.log(reverseString3(input));
    rl.close();
});

