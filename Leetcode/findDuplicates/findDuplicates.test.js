const findDuplicates = require('./findDuplicates.js');

test('should find all duplicates in an array', () => {
  expect(findDuplicates([4,3,2,7,8,2,3,1])).toEqual([2,3]);
  expect(findDuplicates([1])).toEqual([]);
})


test('should work for a really long array', () => {
  let arr = [];
  for (let i = 0; i < 10000000; i++) {
    if (i % 9999999 === 0 && i !== 0) {
      arr.push(1)
    } else {
      arr.push(i)
    }
  }
  expect(findDuplicates(arr)).toEqual([1]);
})