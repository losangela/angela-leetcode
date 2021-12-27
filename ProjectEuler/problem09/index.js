/*

Special Pythagorean triplet
Problem 9

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

answer: 200^2 + 375^2 = 425^2 // 31875000
*/

const findPythagoreanTriplet = () => {
  let a = 1;
  let b = 2;
  let c = () => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  let product = () => a * b * c();

  while (a < 333) {
    for (let i = b; i < Math.floor((1000 - a)/2); i++) {
      if (a + b + c() === 1000) {
        break;
      }
      b++;
    }
    if (a + b + c() === 1000) {
      break;
    }
    a++;
    b = a + 1;
  }

  console.log({ a, b, c: c(), product: product()})
}

findPythagoreanTriplet();