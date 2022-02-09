const myMap = require('./solution.js');

describe.skip('myMap', () => {
  it('should not mutate the initial array', () => {
    const input = [1, 2, 3, 4, 5];

    const result = myMap(input, (x) => x * 2);

    expect(input).toEqual([1, 2, 3, 4, 5]);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it('should return a copy of an array', () => {
    const input = [1, 2, 3, 4, 5];

    const result = myMap(input, (x) => x);

    expect(result).toHaveLength(input.length);
    expect(result).not.toBe(input);
    expect(result).toEqual(input);
  });

  it('should map all values', () => {
    const input = [1, 2, 3, 4, 5];

    const result = myMap(input, (x, index) => x + 100 * index);

    expect(result).not.toEqual(input);
    expect(result).toEqual([1, 102, 203, 304, 405]);
  });
});
