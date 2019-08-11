/*
Same prompt and solution as javascript version
*/
package main

import "math"

func findDuplicates(numbers []int) []int {
	result := make([]int, 0)
	for i := range numbers {
		position := int(math.Abs(float64(numbers[i])) - 1)
		if numbers[position] < 0 {
			result = append(result, position+1)
		} else {
			numbers[position] = -numbers[position]
		}
	}
	return result
}
