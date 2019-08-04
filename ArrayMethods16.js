/* Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:

If the array is empty, it should return an empty string ("").
If the array contains no strings; it should return an empty string.
var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/
function getLongestWordOfMixedElements(arr) {
    // your code here
    if(arr < 1) {
        return '';
    }

    let thisHold = '';
    for(var i in arr) {
        if(arr[i].length > thisHold) {
            thisHold = arr[i];
        }
    }
    return thisHold;
  }

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'


/* Write a function called "getLargestNumberAmongMixedElements".

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:

The array might contain values of a type other than numbers.
If the array is empty, it should return 0.
If the array contains no numbers, it should return 0.
var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if(arr < 1) {
        return 0;
    }
    let thisHold = [];
    // checks for numbers
    for(var i in arr) {
        if(typeof arr[i] === 'number') {
            thisHold.push(arr[i]);
        }
    }

    if(thisHold.length < 1) {
        return 0;
    }
    let largest = thisHold[0];
    // checks for largest number
    for(var i in thisHold) {
        if(thisHold[i] > largest) {
            largest = thisHold[i];
        }
    }
    return largest;
  }

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5


//Another Way using filter/sort and pop methods
function getLargestNumberAmongMixedElements(arr) {
    if(!arr.length) {
        return 0;
    }
    var largest = arr.filter(function(elem) {
        if(typeof elem === 'number') {
            return elem;
        }
    })
    .sort(function (start, end) {
        return start - end;
    });

    return (!largest.length) ? 0 : largest.pop();
}


var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5