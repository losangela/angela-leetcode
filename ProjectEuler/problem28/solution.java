/*

Number spiral diagonals
Problem 28

Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

[21] 22  23 24 [25]
20  [7]  8  [9] 10
19   6  [1]  2  11
18  [5]  4  [3] 12
[17] 16  15 14 [13]

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

*/

package ProjectEuler.problem28;

public class solution {

  public static int spiral(int n) {
    int i = 1;
    int blanks = 1;
    int sum = 1;

    while (blanks < n) {
      for (int j = 0; j < 4; j++) {
        for (int k = 0; k < blanks + 1; k++) {
          i++;
        }
        sum += i;
      }
      blanks += 2;
    }

    return sum;
  }
  public static void main(String args[]) {

    System.out.println(spiral(1001));

  }
}
