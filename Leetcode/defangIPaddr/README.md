## About

- defangIPaddr #1108. https://leetcode.com/problems/defanging-an-ip-address/
  - string, loop, basics
  - Easy difficulty
  - Javascript, Go

## Prompt

Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

Example 1:
```
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
```

Example 2:
```
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```

Constraints:
The given address is a valid IPv4 address.

## Solution

answer is a variable that will add as the function loops through the IP address.
If the character is anything but a '.' it'll add that character onto answer.
If the character is a '.' it'll add '[.]' onto answer.
Return answer. Easy problem easy solution!

## Observations
These are the runtime and memory usage of the solutions in each langauge.
```
RUNTIME      MEMORY      LANGUAGE
 0ms         1.9mb        golang
 0ms         1.9mb        golang
 0ms         1.9mb        golang
52ms        33.9mb       javascript
56ms        33.9mb       javascript
56ms        33.9mb       javascript
```