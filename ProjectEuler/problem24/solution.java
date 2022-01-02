/*

Lexicographic permutations
Problem 24

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

*/

package ProjectEuler.problem24;

import java.util.ArrayList;

public class solution {
  public static String allPermutations(String str) {
    ArrayList<String> perms = new ArrayList<String>();
    Integer permsCount = 0;

    for (int a = 0; a < str.length(); a++) {
      for (int b = 0; b < str.length(); b++) {
        for (int c = 0; c < str.length(); c++) {
          for (int d = 0; d < str.length(); d++) {
            for (int e = 0; e < str.length(); e++) {
              for (int f = 0; f < str.length(); f++) {
                for (int g = 0; g < str.length(); g++) {
                  for (int h = 0; h < str.length(); h++) {
                    for (int i = 0; i < str.length(); i++) {
                      for (int j = 0; j < str.length(); j++) {
                        if (a != b && a != c && a != d && a != e && a != f && a != g && a != h && a != i && a != j && b != c && b != d && b != e && b != f && b != g && b != h && b != i && b != j && c != d && c != e && c != f && c != g && c != h && c != i && c != j && d != e && d != f && d != g && d != h && d != i && d != j && e != f && e != g && e != h && e != i && e != j && f != g && f != h && f != i && f != j && g!= h && g!= i && g!= j && h!= i && h!= j && i != j) {
                          String perm = "" + str.charAt(a) + str.charAt(b) + str.charAt(c) + str.charAt(d) + str.charAt(e) + str.charAt(f) + str.charAt(g) + str.charAt(h) + str.charAt(i) + str.charAt(j);
                          permsCount++;
                          if (permsCount == 1_000_000) {
                            return perm;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return perms.get(999999);
  }
  public static void main(String args[]) {

    
    System.out.println(allPermutations("0123456789"));

  }
}
