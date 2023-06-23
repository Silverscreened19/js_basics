function getPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

function arrayPrime(q) {
    let arrayPrime = []
    for (let i = 2; i <= q; i++) {
        if (getPrime(i)) {
            arrayPrime.push(i);
        }
    }
    return arrayPrime
}

function getPrimeArray() {
    let quantity = +process.argv[2];

    if (isNaN(quantity) || quantity == undefined) {
        console.log('Incorrect input');
        return;
    }
    console.time()
    console.log(arrayPrime(quantity));
    console.timeEnd()
}


getPrimeArray()
