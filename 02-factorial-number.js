//Factorial of a number
//Big O = O(n)
// fact(0) = 1
// fact(4) = 4 * 3 * 2 * 1


function fact(n) {
    if (n < 0) {
        return null;
    }
    if (n === 0) {
        return 1;
    }

    let result = n;
    for (i = n - 1; i > 0; i--) {
        result = result * i;
    }

    return result;
}

module.exports = fact;