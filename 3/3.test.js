const myReduce = require('./solution.js');

describe.skip('myReduce', () => {
  it('should not mutate the initial array', () => {
    const input = [1, 2, 3, 4, 5];

    const result = myReduce(input, (a, b) => a + b, 0);

    expect(input).toEqual([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });

  it('should start with first item if no initial value provided', () => {
    const input = [1, 2, 3, 4, 5];

    const result = myReduce(input, (a, b) => a + b * 2);

    expect(result).toEqual(30);
    expect(result).not.toBe(input);
  });
});
