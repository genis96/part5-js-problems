/* Write a function called "multiplyBetween".

Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

Notes:

The product between 1 and 4 is 1 * 2 * 3 = 6.
If num2 is not greater than num1, it should return 0.
var output = multiplyBetween(2, 5);
console.log(output); // --> 24
*/
function multiplyBetween(num1, num2) {
    // satisfy the requirement
    if(num2 <= num1) {
        return 0;
    }
    let answer = 1;
    for(let i = num1; i < num2; i++) {
        // console.log(i) -> 2,3 and 4
        answer *= i;
    }
    return answer;
  }

var output = multiplyBetween(2, 5); //2 * 3 * 4 = 24
console.log(output); // --> 24


/* 
Write a function called "computeSumBetween".

Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

Notes:

The sum between 1 and 4 is 1 + 2 + 3 = 6.
If num2 is not greater than num1, it should return 0.
var output = computeSumBetween(2, 5);
console.log(output); // --> 9
*/
function computeSumBetween(num1, num2) {
    // your code here
    if(num2 <= num1) {
        return 0;
    }
    // if its 1 it will return 10
    let answer = 0;
    for(let i = num1; i < num2; i++) {
         console.log(i);
        answer += i;
    }
    return answer;
  }

var output = computeSumBetween(2, 5); // 2 + 3 + 4
console.log(output); // --> 9