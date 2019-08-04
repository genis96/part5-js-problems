/* Write a function called "computeCompoundInterest".

Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061
Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest  This shows the formula used to calculate the total compound interest generated.
*/
/* Pseudo
principal : 1500 ->  original principal sum
interest rate : .043%
compouding frequency : 4 months (quarterly)
time : 6 years

principal : 1500 ->  original principal sum
Formula : P = P(1 + r / n)^n*t
P = 1500(1 + .043 / 4) ^4*6 = 1938.84
Then, subtract original principal(1500) from newamount(1938.84) and this is the amount of interest received .. So...
1938.84 - 1500 = $438.84

check this MDN Link on Math.pow() 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
*/

/* NEW : Math.pow() -> MDN - The Math.pow() function returns the base to the exponent power, that is, base**exponent.
Syntax : Math.pow(base, exponent)
Return the value of the number 4 to the power of 3 (4*4*4):
Math.pow(4, 3);
Examples: 
  var a = Math.pow(0, 1); 0
  var b = Math.pow(1, 1); 1
  var c = Math.pow(1, 10); 1
  var d = Math.pow(3, 3); 27
  var e = Math.pow(-3, 3); -27
  var f = Math.pow(2, 4); 16
*/

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    // your code here
    let totalEndAmount = 0;
    return principal * Math.pow((1 + interestRate / compoundingFrequency), (compoundingFrequency * timeInYears)) - principal;
  }

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061




//Another Way WITHOUT using Math.pow();
function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    let totalEndAmount = principal * ((1 + (interestRate / compoundingFrequency)) **(timeInYears * compoundingFrequency))
    return totalEndAmount - principal;
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061


//This is returning : 1938.84 - not 438 - why? bc : i forgot to substract in the return - correct answer above this one
function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    let totalEndAmount = principal * ((1 + (interestRate / compoundingFrequency)) **(timeInYears * compoundingFrequency))
    return totalEndAmount;
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061

