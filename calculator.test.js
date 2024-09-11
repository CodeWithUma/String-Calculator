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

    test('returns the sum of a large amount of numbers', () => {
        const input = Array.from({ length: 100 }, (_, i) => i + 1).join(","); // "1,2,3,...,100"
        expect(add(input)).toBe(5050); // Sum of numbers from 1 to 100
    });

    test('throws an error when a negative number is provided', () => {
        expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
    });

    test('throws an error when multiple negative numbers are provided', () => {
        expect(() => add("-1,-3,5")).toThrow("negative numbers not allowed: -1, -3");
    });
});
