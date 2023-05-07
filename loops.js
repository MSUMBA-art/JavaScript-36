// FOR LOOP

/* for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}*/

//  working with arrays in for loop

/* var colors = ["red", "blue", "yellow", "green", "orange", "purple"]

for (var eachColor of colors) {
    console.log(eachColor);
}*/

// working with strings in for loop
/*var myString = 'Here I  am testing a string';

for (var i = 0; i < myString.length; i++) {
    console.log(myString);
}

for (var eachLetter of myString) {
    console.log(eachLetter);
}
*/

var i = 1;
var text = '';

while (i < 11) {
    text += `The incrementor is ${i}, the incrementor squared is ${i * i}'\n`
    i++
}
console.log(text);
