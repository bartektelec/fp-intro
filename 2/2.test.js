const myFilter = require('./solution.js');

describe.skip('myFilter', () => {
  it('should not mutate the initial array', () => {
    const input = [1, 2, 3, 4, 5];

    const result = myFilter(input, (x) => x % 2 === 0);

    expect(input).toEqual([1, 2, 3, 4, 5]);
    expect(result).toEqual([2, 4]);
  });

  it('should return a copy of an array', () => {
    const input = [1, 2, 3, 4, 5];

    const result = myFilter(input, (x) => x === 2 || x === 5);

    expect(result).toEqual([2, 5]);
    expect(result).not.toBe(input);
  });
});
