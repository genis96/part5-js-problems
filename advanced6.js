/* Write a function called "modulo".

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:

Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
0 % ANYNUMBER = 0.
ANYNUMBER % 0 = NaN.
If either operand is NaN, then the result is NaN.
Modulo always returns the sign of the first number, even if the remainder is 0.
var output = modulo(25, 4);
console.log(output); // --> 1
*/
//Math.floor() -> returns the greatest integer less than or equal to its numeric arguement -> without Math.floor() it will return 0 and not 1
function modulo(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return NaN;
    }
    if(num1 === 0){
        return 0;
    }
    if(num2 === 0){
        return NaN;
    }
    
    let num1Result = Math.abs(num1); //returns 25
    let num2Result = Math.abs(num2); //returns 4
    // console.log(num1Result); returns 25
    // console.log(num2Result); returns 4
    let answer = num1Result - Math.floor(num1Result / num2Result) * num2Result;
    // console.log(answer); returns 1 -> 6 * 4 = 24 , 25 - 24 = 1
    if(num1 < 0) {
        return -(answer); //if negative itll return negative
    } else {
        return answer; //returns regular number
    }

}

var output = modulo(25, 4);
console.log(output); // --> 1


//Another Way - still does not work on HR but does return correct answer
function modulo(num1, num2) {
    let answer = num1 / num2;
    let theNumber = NaN;
    if(num1 < 0 ||  num2 < 0) {
        theNumber = Math.round(answer);
    } else {
        theNumber = Math.floor(answer);
    }
    let thisHold = theNumber * num2;
    console.log(thisHold); //returns 24
    let remainder = num1 - thisHold; //25 - 24
    return remainder;
}

var output = modulo(25, 4);
console.log(output); // --> 1


//Another Way - still does not work on HR but does return correct answer
function modulo(num1, num2) {
    // your code here
    i = parseInt(num1 / num2);
    console.log(i); //returns 6
    j = i * num2;
    console.log(j); //returns 24 (6 * 4)
    return num1 - j; // 25 - 24 = 1
  }

var output = modulo(25, 4);
console.log(output); // --> 1


//Another Way
//Math.trunc() - not an accepted answer although it does work
function modulo(num1, num2) {
    return num1 - (Math.trunc(num1/num2) * num2);
  }
var output = modulo(25, 4);
console.log(output); // --> 1
/* The Math.trunc() function returns the integer part of a number by removing any fractional digits.
 Unlike the other three Math methods: Math.floor(), Math.ceil() and Math.round(), the way Math.trunc() works is very simple. It truncates (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number.

The argument passed to this method will be converted to number type implicitly.

Because trunc() is a static method of Math, you always use it as Math.trunc(), rather than as a method of a Math object you created (Math is not a constructor).
console.log(Math.trunc(13.37));
// expected output: 13

console.log(Math.trunc(42.84));
// expected output: 42

console.log(Math.trunc(0.123));
// expected output: 0

console.log(Math.trunc(-0.123));
// expected output: -0
*/


//Works but thats not what the question asks for - its here just for reference
function modulo(num1, num2) {
    // your code here
    return num1 % num2;
  }

var output = modulo(25, 4);
console.log(output); // --> 1