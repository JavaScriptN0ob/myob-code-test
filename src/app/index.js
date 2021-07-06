const readlineSync = require('readline-sync');
const generateMonthlyPayslip = require('./generateMonthlyPayslip');

readlineSync.promptCL({
  GenerateMonthlyPayslip: (name, salary) => {
    // eslint-disable-next-line no-console
    console.log(generateMonthlyPayslip(name, salary));
  },
});
