package main

func arrayNesting(nums []int) int {
	longest := 0
	for i := range nums {
		size := 0
		for j := i; nums[j] >= 0; size++ {
			k := j
			j = nums[j]
			nums[k] = -1
		}
		if longest < size {
			longest = size
		}
	}
	return longest
}
