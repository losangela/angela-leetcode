/*

Circular primes
Problem 35

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?

*/
package ProjectEuler.problem35;

import java.util.ArrayList;
import java.util.HashSet;

public class solution {

  public static boolean numberIsPrime(int n) {
    if (n < 2) {
      return false;
    }
    boolean isPrime = true;
    int i = 2;
    int stop = (int) Math.ceil(n/2);
    while (i <= stop) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
      i++;
    }
    return isPrime;
  }

  public static ArrayList<Integer> allCircularNumbersOfN(int n) {
    ArrayList<Integer> answer = new ArrayList<Integer>();
    int numberOfDigits = String.valueOf(n).length();

    while (answer.size() < numberOfDigits) {
      int moveToFront = (int) ((n % 10) * Math.pow(10, numberOfDigits - 1));
      n = (n / 10) + moveToFront;
      if (answer.contains(n)) {
        break;
      } else {
        answer.add(n);
      }
    }

    return answer;
  }
  public static void main(String args[]) {
    HashSet<Integer> allCircularPrimes = new HashSet<Integer>();
    allCircularPrimes.add(2);

    for (int i = 3; i < 1_000_000; i = i + 2) {
      if (!allCircularPrimes.contains(i) && numberIsPrime(i)) {
        ArrayList<Integer> circularNums = allCircularNumbersOfN(i);
        boolean allNumsPrime = true;
        for (int j = 0; j < circularNums.size(); j++) {
          if (!numberIsPrime(circularNums.get(j))) {
            allNumsPrime = false;
            break;
          }
        }
        if (allNumsPrime) {
          allCircularPrimes.addAll(circularNums);
        }
      }
    }

    System.out.println(allCircularPrimes.size());

  }
}
