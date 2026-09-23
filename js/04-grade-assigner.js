// Collect a number from the user
let userInput = parseIint(prompt("Please enter a number between 1 and 100:"));

// Validate that the input is a number and falls between 1 and 100
if (isNaN(score) || score < 1 || score > 100) {
  console.log("Error: Only numbers between 1 and 100 are accepted.");
} else {
  // Determine the grade based on the score
  if (score >= 60 && score <= 69) {
    console.log("You received a D");
  } else if (userInput >= 70 && userInput <= 79) {
    console.log("You received a C");
  } else if (userInput >= 80 && userInput <= 89) {
    console.log("You received a B");
  } else if (userInput >= 90 && userInput <= 100) {
    console.log("You received an A");
  } else if (userInput < 60) {
    console.log("You received an F");
  } else {
    console.log("Nothing to worry about");
  }
}
