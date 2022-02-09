const multiplyBy = require('./solution.js');

describe.skip('multiplyBy', () => {
  it('should create a pure function by calling a function', () => {
    const input = [1, 2, 3, 4, 5];
    const multiplyBy234 = multiplyBy(234);

    const result = input.map(multiplyBy234);

    expect(input).toEqual([1, 2, 3, 4, 5]);
    expect(result).toEqual([234, 468, 702, 936, 1170]);
  });
});
