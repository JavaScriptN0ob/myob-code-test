const getGrossMonthlyIncome = require('./getGrossMonthlyIncome/getGrossMonthlyIncome');
const getMonthlyIncomeTax = require('./getMonthlyIncomeTax/getMonthlyIncomeTax');
const getNetMonthlyIncome = require('./getNetMonthlyIncome/getNetMOnthlyIncome');
const TAX_TABLE = require('../constant/TAX_TABLE');

const generateMonthlyPayslip = (name, salary) => {
  const grossMonthlyIncome = getGrossMonthlyIncome(salary);
  const monthlyIncomeTax = getMonthlyIncomeTax(salary, TAX_TABLE);
  const netMonthlyIncome = getNetMonthlyIncome(grossMonthlyIncome, monthlyIncomeTax);

  const finalPayslip = `
    Monthly Payslip for: "${name}"
    Gross Monthly Income: $${grossMonthlyIncome}
    Monthly Income Tax: $${monthlyIncomeTax}
    Net Monthly Income: $${netMonthlyIncome}
  `;

  return finalPayslip;
};

module.exports = generateMonthlyPayslip;
