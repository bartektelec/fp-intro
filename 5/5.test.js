const rejectOdd = require('./solution.js');

describe.skip('rejectOdd', () => {
  it('should reject odd', () => {
    const input = [1, 2, 3, 4, 5, 6, 20, 40, 80, 99];

    const result = input.filter(rejectOdd);

    expect(result).toEqual([2, 4, 6, 20, 40, 80]);
  });
});
