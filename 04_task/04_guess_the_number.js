const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const numberToGuess = Math.floor(Math.random() * 10);
console.log(numberToGuess);
let counter = 1

function guessTheNumber() {
    rl.question(`Current try is ${counter}. Input number from 0 to 9 or \'q\' for exit: `, (answer) => {
        if (answer == 'q') {
            rl.close();
            return
        } else if (isNaN(answer) && (answer !== "q") || (answer < 0) || (answer > 10) || (answer === "")) {
            console.log("Wrong input. Try again");
        } else if (answer < numberToGuess) {
            console.log("Too small. Try again");
        } else if (answer > numberToGuess) {
            console.log("Too big. Try again");
        } else if (+answer === numberToGuess) {
            console.log(`You guessed it! Tries used: ${counter}`);
            rl.close();
            return
        }
        counter++;
        guessTheNumber();
    });
}

guessTheNumber()
