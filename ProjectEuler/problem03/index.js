/*

Largest prime factor
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/


export const numberIsPrime = (n) => { // must be greater than 2
  if (n < 2) {
    return false
  }
  let isPrime = true;
  let i = 2;
  let stop = Math.ceil(n/2);
  while (i <= stop) {
    if (n % i === 0) {
      isPrime = false
      break;
    }
    i++
  }
  return isPrime
}

// console.log(numberIsPrime(2))