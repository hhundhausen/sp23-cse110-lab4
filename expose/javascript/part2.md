1. Line 12 will output **3**, because the code prints to the console the variable **i** which is declared with the keyword **var** and set to the length the variable **prices**. The keyword **var** provides access to a variable anywhere inside the function it is defined. The variable **prices** has three elements. Therefore, line 12 can access the **i** to print its value of 3. 

2. Line 13 will output **150**, because the code prints to the console the variable **discountedPrice** which is declared with the keyword **var** and set to the equation **prices[i] * ( 1 - discount)**. The variable **discountedPrice** is used to cacluate the discounted price of each element in **prices**, and the last element was **300**. Therefore, line 13 can access **discountedPrice** to print the value of **300 * (1 - 0.5)** which is **150**. 


3. Line 14 will output **150**, because the code prints to the console the variable **finalPrice** whcih is declared with the keyword **var** and set to the equation **Math.round(discountedPrice * 100) / 100**. The variable discountedPrice after the for loop initalized on line 6 will equal 150. Therefore, line 14 can access **finalPrice** to print the value of **Math.round(150 * 100) / 100** which is **150**. 

4. The function **discountedPrices** will return **[50, 100, 150]**, because it takes the initial value of the variable **prices** which was **[100, 200, 300]** and applies a discount with the value of the variable **discount** which was **0.5**. Therefore, the function applied a fifty-percent discount on each element in **prices**. 

5. The code at line 12 causes an error because it tries to print to the console the variable **i** which is declared with the **let** keyword. The **let** keyword prevents variables from being called outside of its block scope. Since line 12 is outside of the block scope of **i** it will cause an error. 

6. The code at line 13 causes an error because it tries to print to the console the variable **discountedPrice** which is declared with the **let** keyword. The **let** keyword prevents variables from being called outside of its block scope. Since line 13 is outside of the block scope of **discountedPrice** it causes an error.  

7. Line 14 will print the value **150**, because it prints to the console the variable **finalPrice** whcih is declared with the **let** keyword.  The **let** keyword prevents variables from being called outside of its block scope. Since line 14 is inside the block scope of **finalPrice** it will print its value which is **150**. 

8. The function will return **[50, 100, 150]** because it on line 16 it returns the variable **discounted** which is declared with the **let** keyword. The **let** keyword prevents variables from being called outside of its block scope. Since **discounted** is returned inside of its block scope, the function will return the inital values of **prices** at a fifty-percent discount. 

9. The code at line 11 will cause an error because it tries to print the variable **i** which is declared with the **let** keyword. The **let** keyword prevents variables from being called outside of its block scope. Line 11 is outside of the variable **i**'s block scope which causes an error. 

10. The code at line 12 will print **3**, because it prints to the console the variable **length** which is declared with the **const** keyword and first assigned to the length of the variable **prices**. The **const** keyword provides a variable the same scope as the **let** keyword and prevents a varibale from being reassigned after the first assinged. The variable **length** was only assigned once to the length of prices, **3**, and line 12 is within its scope. Therefore, the code at line 12 will print **3**.

11.  The function will return **[50, 100, 150]** because at line 14 the variable **discounted** is returned. The variable **discounted** is declared with the **const** keyword. The **const** keyword provides a variable the same scope as the **let** keyword and prevents a varibale from being reassigned after the first assinged. Although, line 8 pushes values into **discounted** it is not being reassinged. Hence, the function will be able to return the variable **discounted** which is  **[50, 100, 150]**.  

12. *Data Types*
a. user.name 
b. student['Grad Year']
c. student.greeting()
d. student['Favorite Teacher'].name
e. student.courseLoad[0]

13. *Arithmetic* 
a. ``` ‘3’ + 2 ```
    The output is **32**, because in JavaScript intergers will map to their exact string representation and the values are being concatenated. 
b. ```‘3’ - 2```
    The output is **1**, because in JavaScript the minus sign only performs subtraction between numbers. 
c. ```3 + null```
    The output is **3**, because the line of code adds the numner three to the null value which in math operations becomes the number 0. 
d. ```‘3’ + null```
    The output is **3null**, because the line of code concatenates a string with the value ```null```. In string operations the value ```null``` will convert to a to its string representation which is ```null```.  
e. ```true + 3```
    The output is **4**, because the line of code is adding the number 3 to value ```true``` which in math operations will convert to the numnber 1. 
f. ```false + null```
    The output is 0, because the line of code is adding the value ```false``` to the value ```null```. Both values in math operations conver to the number 0, which means the code is adding zero with zero. 
e. ```'3' + undefined```
    The output is **3undefined**, because the line of code is adding a string with the value ```undefined```. In string operatons, the value of ```undefined``` is converted to its string representation which is ```undefined```. 
f. ```'3' - undefined```
    The output is **NaN**, because the line of code is subtracting the string ```'3'``` with the value ```undefined```. The value ```undefined``` becomes ```NaN``` in numerial operations. 

14. *Comparison* 
a. ```‘2’ > 1```
    The output is **true**, because in JavaScript comparing values of different types will convert the values to numbers. Hence, since the number 2 is greater than the number 1 the line of code will output true. 
b. ```‘2’ < ‘12’```
    The output is **false**, because JavaScript compares two strings in lexicographical order. Hence, since the first charcter in the string ```'12'``` which is '1' is greater than '2' the line of code will print false.  
c. ```2 == ‘2’```
    The output is **true**, because JavaScript will convert values of different types to numbers and compare. Since the number 2 is equal to the number 2, the line of code will print true.  
d. ```2 === ‘2’```
    The output is **false**, because JavaScript will test equality with the triple equal sign without type conversion. Since the values are of different types (one is a number and the other is a string) the output will be false. 
e. ```true == 2```
    The output will be **false**, because JavaScript will convert the value of different types to numbers. The value true will be converted to its numeric represetation **1** and it be compared against the number 2. Since number 1 and number 2 do not equal one another the code will output false. 
f. ```true === Boolean(2)```
    The output is **true**, because the line of code will first perform ```Boolean(2)``` conversion which will equal to true. Then, the line of code it will check if true equals true, which is correct. 
15.  The difference between **==** and **===** operators is the conversion of types. The **==** operation will convert values of different types to compare. The **===** operation will not convert values of different types to compare. 
16. Part written in [part2-question16.js](part2-question16.js) 
17. The function above when called with the parameters ```modifyArray([1,2,3], doSomething)``` will output all of each element in ```[1, 2, 3]``` multipled by two. I arrived from this result, because the modifyArray function is iterating through all of the elements and the doSomething function is being called on each element to multiple it by two. Therefore the output will be **[2, 4, 6]**. 
18. Question was completed in [part2-question18.js](part2-question18.js)
19. The output of the above code is: 
    ```
    1 
    4
    3 
    2 
    ```