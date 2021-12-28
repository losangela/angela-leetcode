/*

Power digit sum
Problem 16

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

*/

const sumOfDigitsOfN = (n) => {
  let bigNToString = BigInt(n).toString();
  let sum = 0;
  for (let i = 0; i < bigNToString.length; i++) {
    sum += parseInt(bigNToString[i], 10);
  };
  return sum;
};

console.log(sumOfDigitsOfN(2**1000));
