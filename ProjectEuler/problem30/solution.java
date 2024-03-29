/*

Digit fifth powers
Problem 30

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

*/

package ProjectEuler.problem30;

public class solution {

  public static int sumOfDigitsPowered5(int n) {
    int sum = 0;

    while (n != 0) {
      int digit = n % 10;
      sum += (int) Math.pow(digit, 5);
      n /= 10;
    }

    return sum;
  }

  public static void main(String args[]) {
    // 9^5 * 7 will be a 6 digit number, so count up to the first 7 digit number.

    int count = 0;

    for (int i = 2; i < 1_000_000; i++) {
      if (i == sumOfDigitsPowered5(i)) {
        count++;
      }
    }

    System.out.println(count);

  }
}
