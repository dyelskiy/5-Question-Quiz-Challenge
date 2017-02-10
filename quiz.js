/*
The Challenge:
Ask at least five questions
Keep track of the number of questions the user answered correctly
Provide a final message after the quiz letting the user know the number of questions he or she got right.
Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.
*/

//My 5 questions 
var question1 = prompt('How many hours in a day?');
var question2 = prompt('How many days in a week?');
var question3 = prompt('How many weeks in a year?');
var question4 = prompt('How many years in a decade?');
var question5 = prompt('How many decades in a century?');

//Test if answers are correct
if (parseInt(question1) === 24) {
  var answer1 = 1;
} else {
  var answer1 = 0;
}
if (parseInt(question2) === 7) {
  var answer2 = 1;
} else {
  var answer2 = 0;
}
if (parseInt(question3) === 52) {
  var answer3 = 1;
} else {
  var answer3 = 0;
}
if (parseInt(question4) === 10) {
  var answer4 = 1;
} else {
  var answer4 = 0;
}
if (parseInt(question4) === 10) {
  var answer5 = 1;
} else {
  var answer5 = 0;
}

//Calculate & display the player's score
var score = (answer1 + answer2 + answer3 + answer4 + answer5);
if (score === 0) {
  alert('<p>Were you even trying? You didn\'t answer any questions correctly!</p>');
} else {
  alert('<p>You answered ' + score +' questions correctly</p>');
}
//Assign a badge to the player
if (score === 5) {
  document.write('<p>Because you correctly answered all 5 question, you earned a gold crown!</p>');
} else if (score === 3 || score === 4) {
  document.write('<p> Because you correctly answered ' + score + ' questions, you earned a silver crown!</p>');
} else if (score === 1 || score === 2) {
  document.write('<p>Because you correctly answered ' + score + ' questions, you earned a bronze crown!</p>');
} else if (score === 1 || score === 2) {
  document.write('<p>Because you correctly answered ' + score + ' questions, you earned a bronze crown!</p>');
} else {
  document.write('<p>You didn\'t answer any questions correctly, you suck!</p>');
}