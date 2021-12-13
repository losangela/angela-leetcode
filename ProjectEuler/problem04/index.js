/*

Largest palindrome product 
Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

export const numberIsPalindrome = (n) => {
  const str = n.toString();
  let isPalindrome = true;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

const largestPalindromeOfProductOfTwo3DigitNumbers = () => {
  let i = 999;

  let palindrome = 0;

  while (i > 99) {
    for (let j = 999; j > 99; j--) {
      let product = i * j;
      if (numberIsPalindrome(product)) {
        palindrome = Math.max(product, palindrome);
        break;
      }
    }
    i--;
  }

  return palindrome;
}

console.log(largestPalindromeOfProductOfTwo3DigitNumbers())
