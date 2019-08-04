/* Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

Notes:

If there is a tie, it should return the first word in the tie.
var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
*/
/* Pseudo
- create a variable to return the longest word
- but there are 3 so.. store them all in one variable, create new variable and make it an array -> thisHold = [...]
- iterate over the words, take their lengths 
- create a conditional comparing the words to the first var
- then store it inside
- return it
*/
function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let longest = '';
    let thisHold = [word1, word2, word3];
    for(let i = 0; i < thisHold.length; i++) {
        if(thisHold[i].length > longest.length) {
            longest = thisHold[i];
        }
    }
    return longest;
  }

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'



//Another Way:
function getLongestOfThreeWords(word1, word2, word3) {
    let longest = word1;
    if(word2.length > longest.length) {
        longest = word2;
    }
    if(word3.length > longest.length) {
        longest = word3;
    }
    return longest;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'


/* Write a function called "findShortestOfThreeWords".

Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

Notes:

If there are ties, it should return the first word in the parameters list.
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/
// let shortest = word1; -> used to compare to the other words instead of it being "" only, its a placeholder for the 1st element in the array

function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let shortest = word1;
    let thisHold = [word1, word2, word3];
    for(let i = 0; i < thisHold.length; i++) {
        if(thisHold[i].length < shortest.length) {
            shortest = thisHold[i];
        }
    }
    return shortest;
  }

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

//Another Way
function findShortestOfThreeWords(word1, word2, word3) {
    let shortest = word1;
    if(word2.length < shortest.length) {
        shortest = word2;
    }
    if(word3.length < shortest.length) {
        shortest = word3;
    }
    return shortest;
}

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

//Another Way
function findShortestOfThreeWords(str1, str2, str3) {
    var strArr = [str1, str2, str3];
    var shortestStr = str1;
    for (var i in strArr) {
      if (strArr[i].length < shortestStr.length) {  
        shortestStr = strArr[i]; string
      }
    }
    return shortestStr;
  }
  
  var output = findShortestOfThreeWords('a', 'two', 'three');
  console.log(output); // --> 'a'