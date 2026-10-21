//IMPORT READLINE for reading console log input

const readline = require("node:readline");

// askQuestion needs this
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// needs rl
const askQuestion = (question: string) => {
  return new Promise((resolve) => {
    rl.question(question, (answer: string) => {
      resolve(answer);
    });
  });
};

//define object for my chosen design
const NailType = {
  "1": "Classic",
  "2": "Gel",
  "3": "Acrylic",
};

const NailShape = {
  "1": "Round",
  "2": "Square",
  "3": "Almond",
  "4": "Stiletto",
};

const NailColor = {
  "1": "Pink",
  "2": "Red",
  "3": "Lavender",
  "4": "Black",
};

//opens create design menu
async function createDesign() {
  //define array to store saved design
  let savedDesign = [];

  //requests nail TYPES -> USER
  console.log("Nail type:  1. Classic  2. Gel  3. Acrylic");

  let choice = await readInput();

  //loops if input is not one from nail types
  while (choice !== "1" && choice !== "2" && choice !== "3") {
    console.log("Nail type:  1. Classic  2. Gel  3. Acrylic");
    choice = await readInput();
  }
  //saves the choice of nail TYPE
  savedDesign.push(NailType[choice]);

  //requests nail SHAPES -> USER
  console.log("Shape: 1. Round 2. Square  3. Almond  4. Stiletto");

  let shape = await readInput();

  //loops if input is not one from nail shapes
  while (shape !== "1" && shape !== "2" && shape !== "3" && shape !== "4") {
    console.log("Shape: 1. Round 2. Square  3. Almond  4. Stiletto");
    shape = await readInput();
  }
  //saves the choice of nail SHAPE
  savedDesign.push(NailShape[shape]);

  //requests nail COLOR -> USER
  console.log("Base color: 1. Pink 2. Red 3. Lavender  4. Black");

  let color = await readInput();

  //loops if input is not one from nail shapes
  while (color !== "1" && color !== "2" && color !== "3" && color !== "4") {
    console.log("Base color: 1. Pink 2. Red 3. Lavender  4. Black");
    color = await readInput();
  }
  //saves the choice of nail COLOR
  savedDesign.push(NailColor[color]);

  console.log(savedDesign);
  return savedDesign;
}

async function readInput() {
  const raw_input = await askQuestion("Enter your choice: ");
  return String(raw_input);
}

// Main async function
async function main() {
  let isContinue = 0;

  do {
    console.log("╔══════════════════════════════╗");
    console.log("║          NAIL CAFÉ           ║");
    console.log("║      Nail Design Studio      ║");
    console.log("╚══════════════════════════════╝");
    console.log("\n1. Create design");
    console.log("2. Exit");

    // Get user input using await (waits for promise to resolve)
    const raw_input = await askQuestion("Enter your choice: ");

    // calls the option
    // String(value) -> takes in any value and explicitly cast it into String during runtime
    const name = String(raw_input);

    switch (name) {
      case "1":
        await createDesign();
        break;
      case "2":
        break;
    }
  } while (isContinue);

  process.exit(0);
}

// Call the main async function
main();
