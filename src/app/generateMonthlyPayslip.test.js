const generateMonthlyPayslip = require('./generateMonthlyPayslip');

describe('Generate monthly payslip unit test', () => {
  test('Should generate correct monthly payslip for Mary', () => {
    const payslip = generateMonthlyPayslip('Mary Song', 60000);

    expect(payslip).toBe(`
    Monthly Payslip for: "Mary Song"
    Gross Monthly Income: $5000
    Monthly Income Tax: $500
    Net Monthly Income: $4500
  `);
  });
});
