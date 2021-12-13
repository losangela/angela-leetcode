/*

Smallest multiple
Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

const isEvenlyDivisibleUpTo20 = (n) => {
  let answer = true;

  for (let i = 2; i <= 20; i++) {
    let divided = n / i;
    if (Math.floor(divided) !== Math.ceil(divided)) {
      answer = false;
      break;
    }
  }

  return answer;
}

const findSmallestPositiveNumber = () => {
  let i = 2520;
  let foundNumber = false;

  while (!foundNumber) {
    if (isEvenlyDivisibleUpTo20(i)) {
      foundNumber = true;
      return i
    }
    i += 20;
  }

}

console.log(findSmallestPositiveNumber())