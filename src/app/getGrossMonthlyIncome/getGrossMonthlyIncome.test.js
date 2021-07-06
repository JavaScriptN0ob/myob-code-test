const getGrossMonthlyIncome = require('./getGrossMonthlyIncome');

describe('Gross monthly income unit test', () => {
  test('Should return salary as input and return salary divided by 12', () => {
    const monthlyIncome = {
      0: getGrossMonthlyIncome(0),
      20000: getGrossMonthlyIncome(20000),
      40000: getGrossMonthlyIncome(40000),
      80000: getGrossMonthlyIncome(80000),
      180000: getGrossMonthlyIncome(180000),
    };

    expect(monthlyIncome[0]).toBe(0);
    expect(monthlyIncome[20000]).toBe(20000 / 12);
    expect(monthlyIncome[40000]).toBe(40000 / 12);
    expect(monthlyIncome[80000]).toBe(80000 / 12);
    expect(monthlyIncome[180000]).toBe(180000 / 12);
  });
});
