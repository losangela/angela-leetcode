/*

10001st prime
Problem 7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

import { numberIsPrime } from "../problem03/index.js";

const findNthPrimeNumber = (n) => {
  const primes = [];
  let i = 2;
  
  while (primes.length < n) {
    if (numberIsPrime(i)) {
      primes.push(i);
    }
    i++
  }
  return primes[n - 1]
}


console.log(findNthPrimeNumber(10_001))