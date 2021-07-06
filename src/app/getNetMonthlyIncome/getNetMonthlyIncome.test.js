const getNetMonthlyIncome = require('./getNetMonthlyIncome');

describe('net monthly income unit test', () => {
  test('Should return income minus tax correctly', () => {
    const netIncome = getNetMonthlyIncome(1000, 500);

    expect(netIncome).toBe(500);
  });
});
