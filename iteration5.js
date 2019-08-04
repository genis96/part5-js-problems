/* Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:

It should not use the multiply operator - *
var output = multiply(4, 7);
console.log(output); // --> 28
*/
function multiply(num1, num2) {
    // your code here
    let answer = 0;
    for(var i = 0; i < num1; i++) {
        answer += num2;
    }
    if(num1 < 0) {
        while(num1 < 0) {
            answer -= num2;
            num1++;
        }
    }
    return answer;
  }

var output = multiply(4, 7);
console.log(output); // --> 28


//It works! But not accepted in HR bc it needs to also take in negatives and return negatives, here it will return 0 if its -4
function multiply(num1, num2) {
    // your code here
    let answer = 0;
    for(var i = 0; i < num1; i++) {
        answer += num2;
    }
    return answer;
  }

var output = multiply(4, 7);
console.log(output); // --> 28

var output = multiply(-4, 7);
console.log(output); // --> -28 BUT it will return 0

/* 
4 + 4 + 4 + 4 + 4 + 4 + 4 = 28
*/