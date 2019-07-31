/*
========================================
================PROMPT==================
========================================
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"

Constraints:
The given address is a valid IPv4 address.
*/

package main

import "fmt"

func defangIPaddr(address string) (res string) {

	res = ""

	for _, c := range address {
		if string(c) == "." {
			res += "[.]"
		} else {
			res += string(c)
		}
	}

	return
}

func main() {
	fmt.Println(defangIPaddr("255.100.50.0"), "should be 255[.]100[.]50[.]0")
}

/*
========================================
================SOLUTION================
========================================
res is a string variable that is to be returned. It begins empty and then
as the function loops through the IP address string, it will add onto res.
If the character is a "." a "[.]" will add onto res. Otherwise, the character
itself will add onto res. Very simple question and answer.
*/
