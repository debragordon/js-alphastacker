// Create an alphabet array to reference in the for loop.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variable that will be the result of the loop written to the console.
var alphaString = "";

// decide to use a for loop to save time ... jump into the array and write the desired element to the console
for (var i = 0; i < alphabet.length; i++) {

// adding to var alphabet with +=
  alphaString += alphabet[i];

// nest an if statement to test for the 5th letter, determined that if it is divisible by 5 it will be the 5th element and will get a space after it
  if ((i + 1) % 5 === 0) {

// answer (alphaString) now gets added (every 5th time)
    alphaString += " ";
  }

// loop will console out the alphabet until the .length funciton is satisfied
  console.log(alphaString);

}