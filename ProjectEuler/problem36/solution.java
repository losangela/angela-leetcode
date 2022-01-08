/*

Double-base palindromes
Problem 36

The decimal number, 585 = 1001001001<2> (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

*/
package ProjectEuler.problem36;

import java.util.Arrays;
import java.util.Collections;

public class solution {

  private static boolean isPalindrome(int n, int b) {
    // String num = Integer.toString(n, b);
    // StringBuffer reversing = new StringBuffer(num);
    // reversing.reverse();
    // String reversed = reversing.toString();
    // return num.equals(reversed);

    int reversed = 0;
    int k = n;
 
    while (k > 0) {
        reversed = b * reversed + k % b;
        k /= b;
    }
    return n == reversed;
  }

  private static int allPalindromicNumbers(int n) {
    int sum = 0;
    for (int i = 1; i < n; i = i + 2) {
      if (isPalindrome(i, 2) && isPalindrome(i, 10)) {
        sum += i;
      }
    }
    return sum;
  }

  public static void main(String args[]) {
    long startTime = System.currentTimeMillis();
    int answer = allPalindromicNumbers(1_000_000);
    long endTime = System.currentTimeMillis();
    System.out.println("Done! The answer is: " + answer + " and the runtime was: " + (endTime-startTime) + "ms");

  }
}
