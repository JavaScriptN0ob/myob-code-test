const getMonthlyIncomeTax = require('./getMonthlyIncomeTax');
const TAX_TABLE = require('../../constant/TAX_TABLE');

describe('Monthly income tax unit test', () => {
  test('Should return 0 when parameter is 0', () => {
    const monthlyIncomeTax = getMonthlyIncomeTax(0, TAX_TABLE);

    expect(monthlyIncomeTax).toBe(0);
  });

  test('Should return 19999 when parameter is 0', () => {
    const monthlyIncomeTax = getMonthlyIncomeTax(19999, TAX_TABLE);

    expect(monthlyIncomeTax).toBe(0);
  });

  test('Should return 20000 when parameter is 0', () => {
    const monthlyIncomeTax = getMonthlyIncomeTax(20000, TAX_TABLE);

    expect(monthlyIncomeTax).toBe(0);
  });

  test('Should return 20001 when parameter is 0.1/12', () => {
    const monthlyIncomeTax = getMonthlyIncomeTax(20001, TAX_TABLE);

    expect(monthlyIncomeTax).toBe(0.1 / 12);
  });

  test('Should return 40000 when parameter is 2000/12', () => {
    const monthlyIncomeTax = getMonthlyIncomeTax(40000, TAX_TABLE);

    expect(monthlyIncomeTax).toBe(2000 / 12);
  });

  test('Should return 60000 when parameter is 6000/12', () => {
    const monthlyIncomeTax = getMonthlyIncomeTax(60000, TAX_TABLE);

    expect(monthlyIncomeTax).toBe(6000 / 12);
  });

  test('Should return 80000 when parameter is 10000/12', () => {
    const monthlyIncomeTax = getMonthlyIncomeTax(80000, TAX_TABLE);

    expect(monthlyIncomeTax).toBe(10000 / 12);
  });

  test('Should return 80001 when parameter is 10000.3/12', () => {
    const monthlyIncomeTax = getMonthlyIncomeTax(80001, TAX_TABLE);

    expect(monthlyIncomeTax).toBe(10000.3 / 12);
  });

  test('Should return 180000 when parameter is 40000/12', () => {
    const monthlyIncomeTax = getMonthlyIncomeTax(180000, TAX_TABLE);

    expect(monthlyIncomeTax).toBe(40000 / 12);
  });

  test('Should return 180001 when parameter is 40000.4/12', () => {
    const monthlyIncomeTax = getMonthlyIncomeTax(180001, TAX_TABLE);

    expect(monthlyIncomeTax).toBe(40000.4 / 12);
  });

  test('Should throw error when parameter is negative', () => {
    try {
      getMonthlyIncomeTax(-1, TAX_TABLE);
    } catch (error) {
      expect(error).toHaveProperty('message', 'tax config not found base on salary input!');
    }
  });
});
