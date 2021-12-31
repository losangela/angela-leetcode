/*

Factorial digit sum
Problem 20

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

*/

const factorialOfN = n => {
  let product = BigInt(1);

  for (let i = 2; i <= n; i++) {
     product = BigInt(product) * BigInt(i);
  }

  return product
}

const addDigits = n => {
  let num = BigInt(n).toString();
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i], 10)
  }

  return sum;
}

console.log(addDigits(factorialOfN(100)))