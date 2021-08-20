# MYOB Code Test. Author: Wenpei Zhang<span id="top"></span>

[Get Started](#start)    
[Code test description](#description)  
[Concept of Coding](#concepts)


## Getting Started <span id="start"></span>    
### Installation    
1. Using ` yarn ` to install all dependencies    
### Start    
1. using ` yarn start ` to run the ***monthly payslip generator***    
2. console input: `GenerateMonthlyPayslip "Mary Song" 60000`    
### Test    
1. Using ```yarn test``` to run all unit test


## Create a console application that given employee annual salary details outputs a monthly pay slip.<span id="description"></span>

**Attributes of the employee are:**  
    •  *name*  
    •  *annual salary*  

**Attributes of the monthly pay slip are:**
|    •  *name*                        | = *name from argument*   |
| :- | :- |
|    •  *gross monthly income*        | = *annual salary* / *12 (months)*  |
|    •  *monthly income tax*          | = (*annual tax rate as provider below*) / *12 (months)*  |
|    •  *net monthly income*          | = *gross monthly income* - *income tax*  |

    
**The following annual tax rates apply:**

| **Taxable income** | **Tax on this income**       |
| :- | :-      | 
| $0 - $20,000       | $0                           |
| $20,001 - $40,000  | 10c for each $1 over $20,000 |
| $40,001 - $80,000  | 20c for each $1 over $40,000 |
| $80,001 - $180,000 | 30c for each $1 over $80,000 |
| $180,001 and over  | 40c for each $1 over $180,000|


**For example, for an employee with an annual salary of $60,000:**
| *gross monthly income* | | 
| :- | :- |
| = 60,000 | / 12  |
| = 5,000 | |


| *monthly income tax*  | | | |
| :- |:- |:- |:- |
| = ((20,000 * 0) | + ((40,000 - 20,000) * 0.1) | + ((60,000 - 40,000) * 0.2)) | / 12  |
| = (0            | + (20,000 * 0.1)            | + (20,000 * 0.2))            | / 12  
| = (0            | + 2,000                     | + 4,000)                     | / 12  |
| = 500| | | |


| *net monthly income* | |
| :- | :- |
| = 5,000 | - 500  |
| = 4,500 | |


**Here is example console input:**  
```
GenerateMonthlyPayslip "Mary Song" 600000
```
**and example output:**  
```
Monthly Payslip for: "Mary Song"
Gross Monthly Income: $5,000
Monthly Income Tax: $500
Net Monthly Income: $4500
```

## Concept of coding.<span id="concepts"></span>
### __1) Test cases__    
there is only one test case shown in the document -> 60,000.    
As the result, I decide to add more salary and monthly tax cases.    
| **salary** | **monthly tax(fraction)** |
| ---------- | ------------------------- |
| 0 | 0/12 |
| 19999 | 0/12 |
| 20000 | 0/12 |
| 20001 | 0.1/12 |
| 40000 | 2000/12 |
| 40001 | 2000.2/12 |
| 60000 | 6000/12 |
| 80000 | 10000/12 |
| 80001 | 10000.3/12 |
| 180000 | 40000/12 |
| 180001 | 40000.4/12 |  

### __2) Tax table dependency__
It would be great if annual tax rates table could be an dependency 
which could passing in getMonthlyTax as a parameter.  
GetMonthlyTax inside only runs calculate logic for decoupling and better maintainable.


### __3) Tax base in tax table__ 
There is a tax base between different tax gap. If each tax table config could have
a tax base which calculated by max and min salary gap, it will help optimizing the 
performance of payslip generator and making codes more readable and maintainable.


### __4) Console CLI__
Console CLI inputs and outputs, I will choose to use readline-sync package.
With GenerateMonthlyPayslip **NAME**(first parameter) **SALARY**(second parameter)
=> outputs


### __5) Solutions on **Monthly Tax Calculate**__    
>**1) Constant** After I created a TAX_TABLE constant file, I tried multiple solutions:    
```
const TAX_TABLE = [
    {
        minSalary: 0,
        maxSalary: 20,000,
        rate: 0,
        taxBase: 0,
    },
];
```
>**2) TAX_TABLE** is an array which includes few tax configs.    
>>a. **Array Reduce**: Using accumulated tax value(starts from 0), every tax config can calculate and add corresponding tax value onto accumulated tax.     
>>b. **Cursive**: Build getMonthlyTax which take two parameters: *salary* & *taxTable* every-time taxTable will shift the first tax config and do if statement to compare salary with maximum & minimum salary. If salary is greater than max then return getMonthlyTax function with salary and new taxTable after shift.    
>>c. **If statement**: Normal compare with if statement, calculate the total tax divided by 12.    
>>d: **Array find**: Using taxTable.find with comparison to find the corresponding tax config. Then calculate the tax and plus the tax base number to get the total tax.   

>**3) Pro and Con** of each solution:    
>>a. Reduce is not readable as too many parameters are using. eg. accumulatedValue, currentValue and initialValue. Also consider about worth in maintain and expand cost.    
>>b. Cursive is similar to reduce. It looks cool and with minimum lines of codes. But very bad readable and maintainable. Also this method is not same as human thinking of calculate.    
>>c. Although if statement is heavy, but it has the best readable. But too many if statement will make this method very bad in maintainable and future expanding.    
>>d. Find is good as it will find the first tax file if callback returns true. It is like normal people do the calculation, found the corresponding config && calculate. Also, it is easy maintain and very good readable.


>**4) Final decision** ---> Find:    
>>Because its logic more similar to human being thinking, also good in maintainable and readable.


[Back to Top](#top)
