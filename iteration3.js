/* Write a function called "computeSummationToN".

Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

Notes:

If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
var output = computeSummationToN(6);
console.log(output); // --> 21
*/
function computeSummationToN(n) {
    // your code here
    let total = 0;
    for(var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
  }

var output = computeSummationToN(6);
console.log(output); // --> 21


//Another Way -> Using recursion
function computeSummationToN(n) {
    if(n === 1) return 1
    return n + computeSummationToN(n - 1);
}

var output = computeSummationToN(6);
console.log(output); // --> 21


//Another Way -> Using formula 
function computeSummationToN(n) {
    return n * (n + 1) / 2;
}

var output = computeSummationToN(6);
console.log(output); // --> 21