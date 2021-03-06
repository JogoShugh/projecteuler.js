//Even Fibonacci numbers
//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

'use strict';

let R = require('ramda');

let getFibonacci = o => o.current > 4000000 ? false : [o.current, {current: o.next , next: o.current + o.next }];
let fibs = R.unfold(getFibonacci, { current: 0, next: 1 });

let filterAndSumFibs = R.pipe(
  R.filter(n => n % 2 === 0),
  R.reduce((x, y) => x + y, 0)
);

console.log(filterAndSumFibs(fibs));
