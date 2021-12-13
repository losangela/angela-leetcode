package main

import "fmt"

func defangIPaddr(address string) (answer string) {

	answer = ""

	for _, c := range address {
		if string(c) == "." {
			answer += "[.]"
		} else {
			answer += string(c)
		}
	}

	return
}

func main() {
	got := defangIPaddr("255.100.50.0")
	want := "255[.]100[.]50[.]0"

	passedTest := got == want

	if passedTest {
		fmt.Println("passed test!")
	} else {
		fmt.Println("FAILED TEST.... got", got, "want", want)
	}

	return
}
