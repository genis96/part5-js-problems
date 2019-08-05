/* Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even.

Notes:

It does so without using the modulo operator (%).
It should work for negative numbers and zero.
var output = isEvenWithoutModulo(8);
console.log(output); // --> true
*/
function isEvenWithoutModulo(num) {
    // your code here
    let answer = num / 2;
    return Number.isInteger(answer);
  }

var output = isEvenWithoutModulo(8);
console.log(output); // --> true


//Another Way
function isEvenWithoutModulo(num) {
    // your code here
    if(num === 0) {
        return false;
    }
    //taking away the -
    num = Math.abs(num);
    while(num >= 2) {
        num -= 2;
        console.log(num) //6, 4, 2, 0 -> counting backwards
    }
    if(num === 1) {
        return false;
    } else {
        return true;
    }
  }

var output = isEvenWithoutModulo(8);
console.log(output); // --> true


