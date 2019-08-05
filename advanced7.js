/* 
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:

It does so without using the modulo operator (%).
It should work for negative numbers and zero.
var output = isOddWithoutModulo(17);
console.log(output); // --> true
*/
/* Pseudo
How else can i return the value of an odd number? w/o % ...
isInteger -> Boolean, returns true is the number passed is an integer, false otherwise
*/
function isOddWithoutModulo(num) {
    // your code here
    let answer = num / 2;
    return !Number.isInteger(answer); //returns true or false
  }

var output = isOddWithoutModulo(17);
console.log(output); // --> true

// Another Way
function isOddWithoutModulo(num) {
    // your code here
    if(num === 0) {
        return false;
    }
    // gets rid of negative signs
    num = Math.abs(num);

    while(num >= 2) {
        num -= 2;
    }
    if(num === 1) {
        return true;
    } else {
        return false;
    }
  }

var output = isOddWithoutModulo(17);
console.log(output); // --> true


// Another Way
function isOddWithoutModulo(num) {
    // your code here
    if(num > 0) {
        for(let i = num; i > 1; i-=2) {
            num -= 2;
        }
    } else {
        for(var i = num; i < 1; i+=2) {
            num += 2;
        }
    }
    // console.log(num) // returns 1

    let thisIsOdd = false;
    if(num === 0 || num === 2) {
        thisIsOdd = false;
    } else {
        thisIsOdd = true;
    }
    return thisIsOdd;

  }

var output = isOddWithoutModulo(17);
console.log(output); // --> true


//Simle Solution but does not meet requirements bc it uses modulo %
function isOddWithoutModulo(num) {
    // your code here
    return num % 2 !== 0;
  }

var output = isOddWithoutModulo(17);
console.log(output); // --> true



