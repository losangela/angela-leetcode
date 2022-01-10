/*

Self powers
Problem 48

The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

*/
package ProjectEuler.problem48;

import java.math.BigInteger;

public class solution {
  public static String solve() {
    BigInteger answer = BigInteger.valueOf(0);
    BigInteger modulo = BigInteger.valueOf(10_000_000_000L);
    for (int i = 1; i <= 1_000; i++) {
      BigInteger temp = BigInteger.valueOf(i);
      temp = temp.pow(i);
      answer = answer.add(temp).mod(modulo);
    }

    return answer.toString();
  }
  public static void main(String args[]) {
    long startTime = System.currentTimeMillis();
    String answer = solve();
    long endTime = System.currentTimeMillis();
    System.out.println("Done! The answer is: " + answer + " and the runtime was: " + (endTime-startTime) + "ms");

  }
}
