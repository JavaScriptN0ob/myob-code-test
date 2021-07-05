# MonthlyPayslipCalculator by Wayne<span id="top"></span>

[Code test description](#description)  
[Concept of Coding](#concepts)


#### Create a console application that given employee annual salary details outputs a monthly pay slip.<span id="description"></span>

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


| *net monthly income* |
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

#### Concept of coding.<span id="concepts"></span>
1. Test cases
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


2. It would be great if annual tax rates table could be an dependency 
which could passing in getMonthlyTax as a parameter.  
GetMonthlyTax inside only runs calculate logic for decoupling and better maintainable.


3. There is a tax base between different tax gap. If each tax table config could have
a tax base which calculated by max and min salary gap, it will help optimizing the 
performance of payslip generator and making codes more readable and maintainable.


4. Console CLI inputs and outputs, I will choose to use readline-sync package.
With GenerateMonthlyPayslip **NAME**(first parameter) **SALARY**(second parameter)
=> outputs


[Back to Top](#top)