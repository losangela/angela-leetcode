/*

Coin sums
Problem 31

In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?

*/

package ProjectEuler.problem31;

public class solution {
  public static void main(String args[]) {

    int combos = 1;
    long startTime = System.currentTimeMillis();

    // for (int a = 0; a <= 1; a++) { // 200p * 1
      for (int b = 0; b <= 2; b++) { // 100p * 2
        for (int c = 0; c <= 4; c++) { // 50p * 4
          for (int d = 0; d <= 10; d++) { // 20p * 10
            for (int e = 0; e <= 20; e++) { // 10p * 20
              for (int f = 0; f <= 40; f++) { // 5p * 40
                for (int g = 0; g <= 100; g++) { // 2p * 100
                  for (int h = 0; h <= 200; h++) { // 1p * 200
                    int combo = /*a*200 + */b*100 + c*50 + d*20 + e*10 + f*5 + g*2 + h*1;
                    if (combo == 200) {
                      combos++;
                      break;
                    } else if (combo > 200) {
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
    // }
    long endTime = System.currentTimeMillis();
    System.out.println(combos);
    System.out.println("That took " + (endTime - startTime) + " milliseconds");
  }
}
