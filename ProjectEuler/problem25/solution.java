/*

1000-digit Fibonacci number
Problem 25

The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/
package ProjectEuler.problem25;

import java.math.BigInteger;

public class solution {
  public static int digitCounter(BigInteger n) {
    String nToString = n.toString();
    return nToString.length();
  }

  public static int fibbonacci() {
    BigInteger first = BigInteger.valueOf(1);
    BigInteger second = BigInteger.valueOf(1);

    for (int i = 3; i < 1_000_000; i++) {
      BigInteger value = first.add(second);
      if (digitCounter(value) == 1000) {
        return i;
      }
      first = second;
      second = value;
    }

    return -1;
  }
  public static void main(String args[]) {

    // BigInteger input = BigInteger.valueOf(1_000_000);
    
    System.out.println(fibbonacci());

  }
}
