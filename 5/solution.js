// Create a pure function that can be passed to a filter HOF
// the function is a helper for getting rid of odd numbers

const rejectOdd = (input) => input % 2 === 0;

module.exports = rejectOdd;
