/* Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24
*/

function computeFactorialOfN(n) {
    // your code here
    let total = 1;
    for(var i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
  }

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24


/* Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
*/

function repeatString(string, num) {
    // your code here
    let total = '';
    for(var i = 0; i < num; i++) {
        total += string;
    }
    return total;
  }

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'


//Another Way - Using concat()
function repeatString(string, num) {
    let total = '';
    for(var i = 0; i < num; i++) {
        total = total.concat(string);
    }
    return total;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'




