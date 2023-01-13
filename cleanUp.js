// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// Added semi-colon after console log command to close that line of code.
function nameQuestion() {
  console.log("Hello, what is your name?");
}
nameQuestion()


// EX 2:
// Adjusted indentation of function code block and closing curly bracket to correct syntax, and
// added semi-colon to end of line 22.
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
// I don't know if this is actually "cleaner", but it seems more flexible to me, since you could 
// input any instructions. Instead of just using the console.log command five times, I arranged the steps  
// as strings in an array of variables defined as "instructions". Then I wrote a function with parameter
// "instructions" utilizing a for loop to call those variables in sequence and print them until all 
// variables had been called once. 
var instructions = ["Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper", 
                  "Pulse basil and pine nuts", "Add garlic and cheeses", "Slowly pour in oil", "Season"];
function makeFreshPesto(instructions) {
  for (var i = 0; i < instructions.length; i++) {
    console.log(instructions[i]);
  }
}

makeFreshPesto(instructions);


// EX 4:
// Moved the console log printout . to be inside the backtic, so that it didn't interrupt syntax and
// runs smoothly, added semi-colon to close line 53. I also added a line of code to run the function
// to test that it works correctly, and lastly capitalized the t in "The" because I'm a pedant.
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`The average is: ${avg}.`);
}

average(3, 5)