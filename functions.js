// 1: Write a function named printGreeting that prints a simple greeting message, the same one,
// every time it is called. Call this function 3 times.

function printGreeting(name) {
    console.log(`Hi there, ${name}!`);
  }
  
 printGreeting("Em")
 printGreeting("Jennifer Coolidge")
 printGreeting("Aubrey Plaza")

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that 
// interpolates the data passed in.

function multiplyByThree(number) {
    var result = number * 3
    console.log(`${number} multiplied by 3 is ${result}.`);
  }
  
  multiplyByThree(1) 
  multiplyByThree(10) 
  multiplyByThree(100) 


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the 
// name of a company, and the numbers will represent the minimum and maximum of a pay range for 
// a posted job. The function should print out a sentence that includes the name of the company 
// and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function jobPosting(company, min, max)  {
    var sum = max - min
    console.log(`This job in ${company} has a pay range of $${sum}.00.`)
}

jobPosting("Hell", 199334, 200000) 


// 4: Write a function that satisfies the following interaction pattern:
// checkStock(4, "Coffee");
// // => "Coffee is stocked"

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"

function checkStock (item, amount)  {
    if (amount >= 4)  {
        console.log(`${item} is stocked.`);
    } else if (amount <= 3 && amount >= 1)    {
        console.log(`${item} - running LOW`)
    } else {
        console.log(`${item} - OUT of stock!`)
    }
}

checkStock ("Tortillas", 3)