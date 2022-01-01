/*

Amicable numbers
Problem 21

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

*/

const allProperDivisorsOfN = n => {
  let factors = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors
}

const sumOfArray = array => array.reduce((x, y) => x + y, 0);

const sumOfAllAmicableNumbers = () => {
  const mem = [];

  for (let i = 1; i <= 10000; i++) {
    if (!mem[i]) {
      let a = i;
      let b = sumOfArray(allProperDivisorsOfN(a));
      if (a !== b && sumOfArray(allProperDivisorsOfN(b)) === a) {
        mem[a] = true;
        mem[b] = true;
      }
    }
  }

  return mem.reduce((x, y, i) => y ? x + i : x, 0)

}

console.log(sumOfAllAmicableNumbers())