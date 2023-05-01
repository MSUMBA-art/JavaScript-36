var red = true;
var blue = false;
var myNum = 5;
var myOtherNum = 4;
var notNum = '5';
var green; // false, null, 0, & undefined returns false

//=== is recommended for to say exactly same as

// IF ELSE STATEMENT
/*if (myNum === notNum) {
  console.log('This statement is true');
} else {
  console.log('the statement is false');
}*/

var colors = ['red', 'green', 'blue', 'yellow'];
var selectedColors = colors[3];

// IF ELSE IF STATEMENT
/*if (selectColors == "red") {
    console.log("The color is Red");
} else if (selectColors == "green") {
    console.log("The color is green");
} else if (selectColors == "yellow") {
    console.log("The color is yellow");
} else {
    console.log("The color is blue");
} */

// SWITCH STATEMENT
/*switch (selectedColors) {
  case 'red':
    console.log('The color is red');
    break;
  case 'green':
        console.log('The color is green');
    break;
  case 'yellow':
    console.log('The color is yellow');
    break;
  case 'blue':
    console.log('The color is blue');
    break;

  default:
    console.log('There was an error');
}*/

// USING &&(ampersand) OPERATORS
// var goodMood = false;
// var gotSleep = true;

// if (goodMood && gotSleep) {
//   console.log('Today is a good day');
// } else {
//   console.log('I am sad');
// }

// USING ||(double pipe) OPERATORS
var mood1 = 'I am not starving';
var mood2 = 'I am Starving';
var gotBreakFast = false;
var gotLunch = false;
var gotDinner = false;

if (gotBreakFast || gotLunch || gotDinner) {
  console.log(mood1);
} else {
  console.log(mood2);
}
