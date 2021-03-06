# Multiples of 3 and 5
# Problem 1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

R = require('ramda');

sequence = (first, last) ->
  R.unfold(((n) -> if n > last then false else [n, n + 1]), first)


getMultiples = R.compose(
  R.reduce(((x, y) -> x + y), 0),
  R.filter((n) ->  n % 3 is 0 || n % 5 is 0)
)

multiples = getMultiples(sequence(1, 999))
console.log(multiples);