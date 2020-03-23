const numTilePossibilities = require('./numTilePossibilities.js');

test("can count possibilities for strings without duplicate letters", () => {
  let string = "ABCD"
  expect(numTilePossibilities(string)).toBe(64)
})

test("can count possibilities for strings with duplicate letters", () => {
  let string = "AAB"
  expect(numTilePossibilities(string)).toBe(8)
})

test("can count possibilities for strings with multiple duplicate letters", () => {
  let string = "AAABBC"
  expect(numTilePossibilities(string)).toBe(188)
})
