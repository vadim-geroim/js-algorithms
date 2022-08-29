// fib(2) = [0,1] 
// fib(3) = [0,1,1]
// fib(n) ?

function fib(n) {
    let numbers = [];

    if (n === 0) {
        return console.log("Please enter a valid number");
    }

    if (n === 1) {
        numbers.push(0);
        return console.log('Fib => ', numbers);
    }

    if (n === 2) {
        numbers.push(0, 1);
        return console.log('Fib => ', numbers)
    }

    numbers.push(0, 1);

    for (i = 2; i < n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2]);
    }

    console.log('Fib => ', numbers);
}

fib(7)