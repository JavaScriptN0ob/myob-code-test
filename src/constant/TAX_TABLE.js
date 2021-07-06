const TAX_TABLE = [
  {
    minSalary: 0,
    maxSalary: 20000,
    rate: 0,
    taxBase: 0,
  },
  {
    minSalary: 20000,
    maxSalary: 40000,
    rate: 0.1,
    taxBase: 0,
  },
  {
    minSalary: 40000,
    maxSalary: 80000,
    rate: 0.2,
    taxBase: 2000,
  },
  {
    minSalary: 80000,
    maxSalary: 180000,
    rate: 0.3,
    taxBase: 10000,
  },
  {
    minSalary: 180000,
    maxSalary: Infinity,
    rate: 0.4,
    taxBase: 40000,
  },
];

module.exports = TAX_TABLE;
