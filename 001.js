/*
Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
var R = require('ramda');

var sequence = R.curry(function(first, last) {
  var f = function(n) {
    return n > last ? false : [n, n + 1];
  };
  return R.unfold(f, first);
});


var c = R.compose(
  R.reduce(function(x, y) {
    return x + y;
  }, 0),
  R.filter(function(n) {
    return n % 3 === 0 || n % 5 === 0;
  })
);

console.log(c(sequence(1, 999)));