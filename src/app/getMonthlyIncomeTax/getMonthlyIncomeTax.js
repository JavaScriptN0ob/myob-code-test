const getTaxConfig = (salary, taxTable) => (
  taxTable.find((taxConfig) => salary >= taxConfig.minSalary && salary <= taxConfig.maxSalary)
);

const getMonthlyIncomeTax = (salary, taxTable) => {
  const taxConfig = getTaxConfig(salary, taxTable);

  if (!taxConfig) {
    throw new Error('tax config not found base on salary input!');
  }

  const { minSalary, rate, taxBase } = taxConfig;
  const monthlyIncomeTax = ((salary - minSalary) * rate + taxBase) / 12;
  return monthlyIncomeTax;
};

module.exports = getMonthlyIncomeTax;
