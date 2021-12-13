/*

Even Fibonacci numbers
Problem 2

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

const fibonacciSum = () => {
  const mem = {
    0: 1,
    1: 1,
    2: 2,
    3: 3,
    4: 5,
    5: 8,
    6: 13,
    7: 21,
    8: 34,
    9: 55,
    10: 89,
  };

  const recurseFib = (n) => {
    if (mem.hasOwnProperty(n)) {
      return mem[n]
    } else {
      let value = recurseFib(n-1) + recurseFib(n-2);
      mem[n] = value;
      return value;
    }
  }

  let sum = 0;
  let input = 1;
  let complete = false

  while (!complete) {
    let value = recurseFib(input);
    if (value % 2 === 0) {
      sum += value;
    }
    if (value > 4000000) {
      complete = true;
    }
    input++
  }

  return sum;
}

console.log(fibonacciSum()) // 4613732
