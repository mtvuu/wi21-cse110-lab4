## Part 1
1. Line 11 will print "prices.length" since "i" will increment until it is equal to prices.length.
"i" is within the scope of the call since it was initialized with "var"
2. Line 12 will print the unrounded discounted price of the last element in the "prices" array 
since discountedPrice will keep changing until the final for loop call, which would be on the final
element in the "prices" array. "discountedPrice" is within the scope of the call because it was 
initialized with "var". 
3. Line 13 will print out "finalPrice" since it was initialized outside of the for loop so it is 
still within the scope of the call.
4. [50,100,150]. For each of the "prices" in the inputted array, the function will take the discount,
given by the argument "discount" which is 0.5 in this case, of each of the prices.
5. Line 11 will cause an error since it is using "i" which was initialized with "let" in the for 
loop so it is out of scope.
6. Line 12 will cause an error since it is using "discountedPrice" which was initialized with "let"
in the for loop so it is out of scope.
7. Line 13 will print out "finalPrice" since it was initialized outside of the for loop so it is 
still within the scope of the call.
8. [50,100,150]. For each of the "prices" in the inputted array, the function will take the discount,
given by the argument "discount" which is 0.5 in this case, of each of the prices.
9. Line 11 will cause an error since it is using "i" which was initialized with "let" in the for 
loop so it is out of scope.
10. Line 12 will cause an error since it is using "discountedPrice" which was initialized with "const"
in the for loop so it is out of scope.
11. Line 13 will print out 0 since "finalPrice" was initialized with "const" so finalPrice cannot be 
reassigned.
12. The function will return an error since we tried to reassign "finalPrice" in the for loop so the
function would fail to run.
13. A: student.name, B: student['Grad Year'], C: student.greeting(), D: student['Favorite Teacher'].name,
E: student.courseLoad[0]
14. Arithmetic\
A. 32 since the 3 is a string and it is addition, the 2 will become a string and they will 
concatenate into 32.\
B. 1 since the subtraction will convert the 3, which is a string, into a integer and 3-2 = 1.\
C. 3 since the 3 is an integer which would convert the null to 0 and 3+0 = 0\
D. 3null since the null will be converted to a string and they will concatenate into 3null.\
E. 4 since the true will be converted to 1 and 1+3 = 4\
F. 0 since the false will be converted to 0, because of the addition, and the null is also 0 so 0+0=0\
G. 3undefined since the undefinied will be converted to a string and they will concatenate into 3undefined\
H. NaN since the 3 is converted to a number and undefined is converted to NaN so the result is NaN.
15. Comparison\
A. true, since the 2 will be converted to a number and 2 > 1 = true\
B. false, since the two are strings and "2" is alphabetically greater than "12"\
C. true, since the string 2 will be converted to a number and 2 is equal to 2\
D. false, since the two types are different\
E. false, since true is converted to 1 and 1 != 2\
F. true, since the both sides are booleans and Boolean(2) is true, so true is equal to true\
16. The "===" operator checks if the two are equal and the same type while the "==" allows conversions to 
determine if the two are equal.
17. "How are you?" is printed because (2==true) is false since true gets converted to 1 and 2 != 1. Then it checks
if 2 is true. This is done by converting the 2 into a boolean which would return true since 2 is not 0. So it will 
print out 'How are you?'.
18. In [part1-question18.js](https://github.com/mtvuu/wi21-cse110-lab4/blob/main/part1/part1-question18.js)
19. The result will be [6, 8, 10]. Each of the elements in "array" is then inputted into the "callback" which takes 
a function and doubles it. The "callback" is doSomething which takes the original element, adds 2, then calls the 
function that doubles it. This result is added to newArr.
20. In [part1-question20.js](https://github.com/mtvuu/wi21-cse110-lab4/blob/main/part1/part1-question20.js)
21. 1 4 3 2
