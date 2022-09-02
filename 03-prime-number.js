/* Determine if the given number is prime or not. A prime number is a natural number greater 
1 that is not product of two smaller natural numbers.
Examples:
p(5) = true (1*5 or 5*1)     
p(4) = false (1*4 or 2*2 or 4*1) */

//BigO = O(n)
function isPrime(n) {
    if (n < 2) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function isPrimeOptimized(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = isPrime;
//module.exports = isPrimeOptimized;

