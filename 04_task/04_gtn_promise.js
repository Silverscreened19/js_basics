const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const numberToGuess = Math.floor(Math.random() * 10);
console.log(numberToGuess);
let counter = 1;

async function askTheNumber() {
    let promise = new Promise(function (resolve, reject) {
        rl.question("Input number from 0 to 9 or \'q\' for exit: ", (input) => {
            rl.pause();
            return resolve(input);
        });
    });
    return await promise;
}

async function guessTheNumber() {
    while (true) {
        let answer = await askTheNumber();

        if (answer === "q") {
            console.log(`Tries used ${counter}. Bye-bye`)
            rl.close();
            break
        }

        if (isNaN(answer) && (answer !== "q") || (answer < 0) || (answer > 9) || (answer === "")) {
            console.log(`Current try is ${counter}. Wrong input. Try again`);
        } else if (answer < numberToGuess) {
            console.log(`Current try is ${counter}. Too small. Try again`);
        } else if (answer > numberToGuess) {
            console.log(`Current try is ${counter}. Too big. Try again`);
        } else if (+answer === numberToGuess) {
            console.log(`You guessed it! Tries used: ${counter}`);
            break
        }
        counter++;
    }
    rl.close();
    return
}

guessTheNumber();
