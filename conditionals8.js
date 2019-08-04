/* Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
var output = convertScoreToGrade(91);
console.log(output); // --> 'A'
*/

function convertScoreToGrade(score) {
    if(score > 100 || score < 0) {
        return 'INVALID SCORE';
    }
    if(score >= 90) {
        return 'A';
    } else if(score >= 80) {
        return 'B';
    } else if(score >= 70) {
        return 'C';
    } else if(score >= 60) {
        return 'D';
    } else {
        return 'F';
    } 
}
var output = convertScoreToGrade(1);
console.log(output); // --> 'F'


//Another Way
function convertScoreToGrade(score) {
    // your code here
     var grades= "";
          if (score > 100){
            grades = "INVALID SCORE"
          } else if (score >= 90) {
            grades = "A";
          } else if (score >= 80) {
            grades = "B";
          } else if (score >= 70) {
            grades = "C";
          } else if (score >= 60) {
            grades = "D";
          } else if (score >= 0) {
            grades = "F";
          } else if (score < 0) {
            grades = "INVALID SCORE"
    }
  return grades;
  }

  var output = convertScoreToGrade(1);
  console.log(output); // --> 'F'
  

//Another Way using switch

function convertScoreToGrade(score) {
    var output = "";
    switch (typeof score === 'number') {
    case (score >= 90 && score <=100):
      output = 'A';
      break;
    case (score >= 80 && score <=89):
      output = 'B';
      break;
    case (score >= 70 && score <=79):
      output = 'C';
      break;
    case (score >= 60 && score <=69):
      output = 'D';
      break;
    case (score >= 0 && score <=59):
      output = 'F';
      break;
    default:
      output = 'INVALID SCORE'
    }
    return output;
  }

  var output = convertScoreToGrade(1);
  console.log(output); // --> 'F'


  /* Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
There are is no F+ and there is no F-.
var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score) {
 
    if ( score > 100 || score < 0 ) {
      return 'INVALID SCORE';
    }
    
    if ( score >= 90 ) {
      if ( score <= 92 ) {
        return 'A-';
      } else if ( score >= 98 ) {
        return 'A+';
      } else { 
        return 'A';
      }
    } else if ( score >= 80 ) {
        if ( score <= 82 ) {
          return 'B-';
        } else if ( score >= 88 ) {
          return 'B+';
        } else { 
          return 'B';
        }
    } else if ( score >= 70 ) {
        if ( score <= 72 ) {
          return 'C-';
        } else if ( score >= 78 ) {
          return 'C+';
        } else { 
          return 'C';
        }
    } else if ( score >= 60 ) {
        if ( score <= 62 ) {
          return 'D-';
        } else if ( score >= 68 ) {
          return 'D+';
        } else { 
          return 'D';
        }
    } else {
        return 'F';
    }
  
  } 
  
  var output = convertScoreToGradeWithPlusAndMinus(91);
  console.log(output);

//Another Way
function convertScoreToGradeWithPlusAndMinus(score) {
    var letterGrade = '';
    var scoreString = score.toString();
    
    if (score === 100) {
      letterGrade = 'A';
    } else if (score >= 90) {
          letterGrade = 'A'
      } else if (score >= 80) {
      letterGrade = 'B';
    } else if (score >= 70) {
      letterGrade = 'C';          
    } else if (score >= 60) {
      letterGrade = 'D';
    } else if (score >= 0) {
      letterGrade = 'F';
    } else {
      letterGrade = 'INVALID SCORE';
    }
  
      if (scoreString.substring(1) >= 8 || score === 100) {
          letterGrade += '+';
      } else if (scoreString.substring(1) <= 2 ) {
          letterGrade += '-';
      }
      
      return letterGrade;		
  }
  var output = convertScoreToGradeWithPlusAndMinus(100);
  console.log(output);


