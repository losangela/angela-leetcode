/*

Non-abundant sums
Problem 23

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

*/

package ProjectEuler.problem23;

import java.util.HashSet;
import java.util.Set;

class Solution {

  public static int properDivisorsSummed(int n) {
    int totalSum = 0;
    for (int i = 1; i < n; i++) {
      if (n % i == 0) {
        totalSum += i;
      }
    }

    return totalSum;
  }

  public static boolean isAbundantNumber(int n) {
    if (properDivisorsSummed(n) > n) {
      return true;
    } else {
      return false;
    }
  }

  public static void main(String args[]) {
    Set<Integer> allAbundantNumbers = new HashSet<Integer>();
    // Set<Integer> allIntNoAbundantNumbers = new HashSet<Integer>();
    int allIntNoAbundantNumbers = 0;

    for (int i = 1; i <= 28123; i++) {
      if (isAbundantNumber(i)) {
        allAbundantNumbers.add(i);
      }

      boolean canBeSummedWithAbundantNumbers = false;

      for (int j = 1; j < i; j++) {
        if (allAbundantNumbers.contains(j) && allAbundantNumbers.contains(i - j)) {
          canBeSummedWithAbundantNumbers = true;
          break;
        }
      }

      if (!canBeSummedWithAbundantNumbers) {
        // allIntNoAbundantNumbers.add(i);
        allIntNoAbundantNumbers += i;
      }

    }
    
    System.out.println(allIntNoAbundantNumbers);

  }

}