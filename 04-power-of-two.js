//Power of Two
// isPowerOfTwo(1) = true(Math.pow(2, 0))
//BigO=O(logn)
/* 
Pseudocode
if remainder is not 0 in any step, 'n' is not a power of two
if remainder is 0 and 'n' comes down to 1 eventually, n is a power of two.
*/

function isPowerOfTwo(number) {
    if (number < 1) {
        return false;
    }

    while (number > 1) {
        if (number % 2 != 0) {
            return false;
        }

        number = number / 2;
    }

    return true;
}

module.exports = isPowerOfTwo;