function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    const numberArray = numbers.split(",");

    const negativeNumbers = numberArray.filter(num => parseInt(num) < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
}


module.exports = add;
