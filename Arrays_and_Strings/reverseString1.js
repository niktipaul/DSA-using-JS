function reverseString1(inputString){
    const reverseList = [];
    const totalItems = inputString.length - 1;
    for (let i = totalItems; i >= 0; i--){
        reverseList.push(inputString[i]);
    }
    return reverseList.join('');
}


// Driver code
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the string: ",function(input){
    console.log(reverseString1(input));
    rl.close();
});

