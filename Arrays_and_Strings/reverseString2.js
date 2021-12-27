function reverseString2(inputString){
    return inputString.split('').reverse().join('');
}


// Driver code
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the string: ",function(input){
    console.log(reverseString2(input));
    rl.close();
});

