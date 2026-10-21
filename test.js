// Source - https://stackoverflow.com/a/61395541
// Posted by Willian, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-19, License - CC BY-SA 4.0

const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// Main async function
async function main() {
  let i = 0;
  
  do {
    i++;
    // Get user input using await
    const name = await askQuestion("What is your name? ");

    // Print the result
    console.log(`Hello, ${name}!`);

  } while (i < 2);

  process.exit(0);
}

// Call the main async function
main();
