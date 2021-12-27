/*

Summation of primes
Problem 10

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

import { numberIsPrime } from "../problem03/index.js";

const allPrimesBetweenSummed = (start, stop) => {
  let allPrimes = 0;

  for (let i = start; i <= stop; i = i + 2) {
    if (numberIsPrime(i)) {
      allPrimes += i;
    }
  };

  return allPrimes;
}

const sums = {
  // 100_000: allPrimesBetweenSummed(1, 100_000) + 2,
  // 200_000: allPrimesBetweenSummed(100_001, 200_000),
  // 300_000: allPrimesBetweenSummed(200_001, 300_000),
  // 400_000: allPrimesBetweenSummed(300_001, 400_000),
  // 500_000: allPrimesBetweenSummed(400_001, 500_000),
  // 600_000: allPrimesBetweenSummed(500_001, 600_000),
  // 700_000: allPrimesBetweenSummed(600_001, 700_000),
  // 800_000: allPrimesBetweenSummed(700_001, 800_000),
  // 900_000: allPrimesBetweenSummed(800_001, 900_000),
  // 1_000_000: allPrimesBetweenSummed(900_001, 1_000_000),
  // 1_100_000: allPrimesBetweenSummed(1_000_001, 1_100_000),
  // 1_200_000: allPrimesBetweenSummed(1_100_001, 1_200_000),
  // 1_300_000: allPrimesBetweenSummed(1_200_001, 1_300_000),
  // 1_400_000: allPrimesBetweenSummed(1_300_001, 1_400_000),
  // 1_500_000: allPrimesBetweenSummed(1_400_001, 1_500_000),
  // 1_600_000: allPrimesBetweenSummed(1_500_001, 1_600_000),
  // 1_700_000: allPrimesBetweenSummed(1_600_001, 1_700_000),
  // 1_800_000: allPrimesBetweenSummed(1_700_001, 1_800_000),
  // 1_900_000: allPrimesBetweenSummed(1_800_001, 1_900_000),
  // 2_000_000: allPrimesBetweenSummed(1_900_001, 1_999_999),
}

// console.log(sums)