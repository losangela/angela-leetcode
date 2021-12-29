/*

Number letter counts
Problem 17

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

21: twenty-one
111: one hundred and eleven (or "one" hundred and eleven)
101: one hundred and one
190: one hundred and ninety
191: one hundred and ninety-one
206: two hundred and six
1,002: a thousand

*/

const words = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
}

const numberToWord = (n) => {
  if (n < 21) {
    return words[n];
  }
  if (n < 100) {
    let nToStr = n.toString();
    return nToStr[1] === '0' ? words[n] : words[nToStr[0] + '0'] + words[nToStr[1]];
  }
  if (n < 1000) {
    let nToStr = n.toString();
    let tens = parseInt(nToStr.substring(1), 10);
    return words[nToStr[0]] + words[100] + (tens ? 'and' + numberToWord(tens) : '');
  }
  if (n === 1000) {
    return words[1] + words[n];
  }

};

const numberLetterCounts = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += numberToWord(i).length;
  }
  return count;
}


console.log(numberLetterCounts(1000))