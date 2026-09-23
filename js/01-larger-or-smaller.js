//Enter integers
let firstInt = parseInt(prompt("Enter the first integer:"));
let secondInt = parseInt(prompt("Enter the second integer:"));

// Find and display the result
if (firstInt > secondInt) {
  document.write("The larger number is: " + firstInt);
} else if (secondInt > firstInt) {
  document.write("The larger number is: " + secondInt);
} else (firstInt === secondInt) {
  document.write("Both numbers are equal, please enter two different integers");
} 