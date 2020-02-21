// # Javascript Functions IC

// ### Exercise 1:
// - Ask the user to enter two numbers
// - Create a function that takes two numbers and retruns the sum
// - Print the sum of the numbers the user entered to the console using the function you created

// ```
// Example Output

// if the user enters 10 and 15 

// The sum of 10 and 15 is 25
// ```
let user1 = prompt("Enter Two Numbers" );
function addNumbers (num1,num2)
{
    return (num1+num2);

}
let userInput1 =100
let userInput2 =50

console.log(`The sum of ${userInput1} and ${userInput2} is ${addNumbers(userInput1,userInput2)}`) 
let sum = addNumbers(userInput1,userInput2);
console.log(sum);




// ### Exercise 2:
// - Create a function that takes any array and prints each elememt in the array
// ```
// Example Output

// if you pass in an array with the value ["Autumn", "Kevin", "Kenn"]

// Autumn
// Kevin
// Kenn
// ```
function printArray (ArrayName)
{
    let anyArray = ["Autumn", "Kevin", "Kenn"];

    console.log("Autumn", "Kevin", "Kenn");
}





// ### Exercise 3:
// - Create a function that asks the user to enter a name until they enter q or Q
// - if they enter "Kevin" call a function that alerts "Cool Dude"