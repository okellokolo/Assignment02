var coinFlip = Math.round(Math.random()) + 1; //coin flip

var choice = prompt("Heads or Tails"); //Heads or tails
if (coinFlip == 1) {
  var flipResult = "heads";
} else {
  var flipResult = "tails";
}

if (flipResult == choice) {
  if (flipResult == "heads") {
    alert("The flip was heads and you chose heads...you win!");
  } else {
    alert("The flip was head and you chose tails...you lose!");
  }
} else {
  if (flipResult == "heads") {
    alert("The flip was heads and you chose tails...you lose!");
  } else {
    alert("The flip was tails and you chose tails...you win!");
  }
}
