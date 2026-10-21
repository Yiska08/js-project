"use strict";
//IMPORT READLINE for reading console log input
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('node:readline');
// askQuestion needs this
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// needs rl
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};
//opens create design menu
function createDesign() {
    console.log("Nail type:  1. Classic  2. Gel  3. Acrylic");
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
    } while (isContinue);
    process.exit(0);
}
// Call the main async function
main();
//# sourceMappingURL=nail_design.js.map