package main

import (
	"reflect"
	"testing"
)

func TestFindDuplicates(t *testing.T) {

	t.Run("should find all duplicates in an array of several integers", func(t *testing.T) {
		numbers := []int{4, 3, 2, 7, 8, 2, 3, 1}

		got := findDuplicates(numbers)
		want := []int{2, 3}

		if !reflect.DeepEqual(want, got) {
			t.Errorf("got %d want %d given, %v", got, want, numbers)
		}
	})

	t.Run("should find no duplicates in an array of 1 integer", func(t *testing.T) {
		numbers := []int{1}

		got := findDuplicates(numbers)
		want := []int{}

		if !reflect.DeepEqual(want, got) {
			t.Errorf("got %d want %d given, %v", got, want, numbers)
		}
	})

	t.Run("should find all duplicates in a really long array", func(t *testing.T) {
		numbers := []int{1, 2}
		for i := 1; i < 10000000; i++ {
			numbers = append(numbers, i)
		}

		got := findDuplicates(numbers)
		want := []int{1, 2}

		if !reflect.DeepEqual(want, got) {
			t.Errorf("got %d want %d given, %v", got, want, numbers)
		}
	})
}
