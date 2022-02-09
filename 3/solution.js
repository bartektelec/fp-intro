// Using imperative coding, implement your own reduce function
// the reduce function should take 3 arguments:
// array to reduce over, a callback function to execute on it and an initial value
// it should return a new array with items, not mutate the array

const myReduce = (array, fn, initialValue = null) => {
  return array.reduce(fn, initialValue);
};

module.exports = myReduce;
