// Using imperative coding, implement your own filter function
// the filter function should take two arguments:
// array to filter over, and a predicate callback function to execute on it
// it should return a new array with items not passing the test removed

const myFilter = (array, fn) => {
  return array.filter(fn);
};

module.exports = myFilter;
