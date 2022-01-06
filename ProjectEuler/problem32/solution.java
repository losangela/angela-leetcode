/*

Pandigital products
Problem 32

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

*/

package ProjectEuler.problem32;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

public class solution {
  public static boolean isPandigital(int n) {
    ArrayList<Boolean> digitsUsed = new ArrayList<Boolean>(Arrays.asList(false, false, false, false, false, false, false, false, false));

    while (n > 0) {
      int digit = n % 10;
      if (digit == 0 || digitsUsed.get(digit - 1)) {
        return false;
      } else {
        digitsUsed.set(digit - 1, true);
      }
      n /= 10;
    }
    
    return true;
  }

  public static boolean isPandigitalOneToNine(ArrayList<Integer> numbers) {
    ArrayList<Boolean> digitsUsed = new ArrayList<Boolean>(Arrays.asList(false, false, false, false, false, false, false, false, false));

    for (int i = 0; i < numbers.size(); i++){
      while (numbers.get(i) > 0) {
        int digit = numbers.get(i) % 10;
        if (digit == 0 || digitsUsed.get(digit - 1)) {
          return false;
        } else {
          digitsUsed.set(digit - 1, true);
        }
        numbers.set(i, numbers.get(i) / 10);
      }
    }
    
    return !digitsUsed.contains(false);
  }

  public static void main(String args[]) {
    HashSet<Integer> allProducts = new HashSet<Integer>();
    int sum = 0;
    // System.out.println(isPandigital(new ArrayList<Integer>(Arrays.asList(39, 186, 7254))));

    for (int i = 1; i < 999; i++) {
      if (isPandigital(i)) {
        for (int j = 1; j < 99999; j++) {
          if (isPandigital(j)) {
            int product = i * j;
            if (!allProducts.contains(product) && isPandigitalOneToNine(new ArrayList<Integer>(Arrays.asList(i, j, product)))) {
              allProducts.add(product);
              sum += product;
              System.out.println(new ArrayList<Integer>(Arrays.asList(i, j, product)));
            }
          }
  
        }
      }
      
  
    }
    System.out.println("done");
    System.out.println(sum);
  }
}
