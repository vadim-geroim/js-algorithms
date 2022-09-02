const { expect } = require('@jest/globals');
const fact = require('./02-factorial-number');

test('factorial of 0', () => {
    expect(fact(0)).toBe(1);
})

test('factorial of 1', () => {
    expect(fact(1)).toBe(1);
})

test('factorial of 4', () => {
    expect(fact(4)).toBe(24);
})

test('factorial of 5', () => {
    expect(fact(5)).toBe(120);
})