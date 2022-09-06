
const powerOfTwo = require('./04-power-of-two');

test('Is power of two 1', () => {
    expect(powerOfTwo(1)).toBe(true);
});

test('Is power of two 2', () => {
    expect(powerOfTwo(2)).toBe(true);
});

test('Is power of two 5', () => {
    expect(powerOfTwo(5)).toBe(false);
});