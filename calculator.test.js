// calculator.test.js
const add = require('./calculator');

describe('add function', () => {
    test('returns 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('returns the number itself when a single number is provided as a string', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });
});
