/*
Reverse the provided string.
*/

function reverseString(str) {
  var arr = str.split("").reverse().join("");
  return arr;
}

console.log(reverseString("Greetings"));
