/*

Sum square difference
Problem 6

The sum of the squares of the first ten natural numbers is,

  1^2 + 2^2 + 3^2 + .... + 10^2 = 385

The square of the sum of the first ten natural numbers is,

  (1 + 2 + 3 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

  3025 - 385 = 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

export const sumOfSquaresUpTo = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2)
  }

  return sum;
}

export const sumOfNumbersUpTo = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i
  }

  return sum;
}

const differenceOfSumOfSquaresAndSumOfNumbersSquared = (n) => {
  return Math.pow(sumOfNumbersUpTo(n), 2) - sumOfSquaresUpTo(n)
}

console.time('test');
console.log(differenceOfSumOfSquaresAndSumOfNumbersSquared(100));
console.timeEnd('test');
