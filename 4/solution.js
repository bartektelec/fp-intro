// Create a pure function that will convert a decimal to a percent
// when passed to a map function
// the input will be a float between 0 and 1 - i.e 0.5
// the expected result will be a string with percentage value including a "%" suffix
// use Math.round() on the values

const mapFloatToPercent = (input) => Math.round(input * 100) + '%';

module.exports = mapFloatToPercent;
