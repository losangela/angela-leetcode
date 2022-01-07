/*

Digit factorials
Problem 34

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: As 1! = 1 and 2! = 2 are not sums they are not included.

*/

package ProjectEuler.problem34;

import java.util.ArrayList;

public class solution {
  public static void main(String args[]) {
    ArrayList<Integer> factorials = new ArrayList<Integer>();
    for (int i = 0; i < 10; i++) {
      if (i < 2) {
        factorials.add(1);
      } else {
        factorials.add(i * factorials.get(i - 1));
      }
    }

    ArrayList<Integer> solutions = new ArrayList<Integer>();
    int sum = 0;

    for (int i = 10; i < 100_000_000; i++) {
      int number = i;
      int numberFactorialSum = 0;
    
      while (number > 0) {
        numberFactorialSum += factorials.get(number % 10);
        number /= 10;
      }
      if (numberFactorialSum == i) {
        solutions.add(i);
        sum += i;
      }
    }
    
    System.out.println(solutions);
    System.out.println(sum);
  }
}
