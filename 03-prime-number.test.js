const { expect } = require('@jest/globals');
const isPrime = require('./03-prime-number');

test('Is prime of 1', () => {
    expect(isPrime(1)).toBe(false);
})

test('Is prime of 5', () => {
    expect(isPrime(5)).toBe(true);
})

test('Is prime of 4', () => {
    expect(isPrime(4)).toBe(false);
})