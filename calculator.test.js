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

    test('returns the sum of two numbers separated by a comma', () => {
        expect(add("1,2")).toBe(3);
        expect(add("3,7")).toBe(10);
    });

    test('returns the sum of multiple numbers separated by commas', () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("4,5,6,7")).toBe(22);
    });
});
