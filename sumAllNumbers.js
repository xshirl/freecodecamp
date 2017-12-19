/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  var sum = 0;
    for (var j = Math.min(arr[0], arr[1]); j <= Math.max(arr[0], arr[1]); j++) {
      sum +=j;
    }
  return sum;
}
console.log(sumAll([1, 4]));
