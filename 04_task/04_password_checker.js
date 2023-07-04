function getPasswordChecker(password) {
    return function(guess) {
        if (guess === password) {
            return true;
        }
        return false;
    }
}

const checker = getPasswordChecker(123)

console.log(checker('dffs'))
console.log(checker(123))
console.log(checker(""))
console.log(checker(undefined))
