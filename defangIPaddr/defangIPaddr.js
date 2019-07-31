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

const defangIPaddr = address => {
  let answer = '';
  for (let i = 0; i < address.length; i++) {
      if (address[i] !== '.') {
          answer += address[i]
      } else {
          answer += '[.]'
      }
  }
  return answer
};

console.log(defangIPaddr("255.100.50.0"), `should be 255[.]100[.]50[.]0`)

/*
========================================
================SOLUTION================
========================================
answer is a variable that will add as the function loops through the IP address.
If the character is anything but a '.' it'll add that character onto answer.
If the character is a '.' it'll add '[.]' onto answer.
Return answer. Easy problem easy solution!
*/