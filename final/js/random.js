// Collect input from a user
const input = prompt('Please provide a number');

// Convert the input to a number
const number = parseInt(input);

// Use Math.random() and the user's number to generate a random number
const randomNumber = Math.floor(Math.random() * number) + 1;

// Create a message displaying the random number
console.log(`${randomNumber} is a random number between 1 and ${number}.`);
