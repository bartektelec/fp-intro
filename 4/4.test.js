const mapFloatToPercent = require('./solution.js');

describe.skip('mapFloatToPercent', () => {
  it('should map floats to percents', () => {
    const input = [0.2, 0.4, 0.55, 0.888];

    const result = input.map(mapFloatToPercent);

    expect(input).toEqual([0.2, 0.4, 0.55, 0.888]);
    expect(result).toEqual(['20%', '40%', '55%', '89%']);
  });
});
