var numTilePossibilities = function(tiles) {
  const mem = {}
  let answer = 0;
  const inMem = (str) => {
    if (mem[str]) {
      return false
    } else {
      mem[str] = true
      answer++
    }
  };
  const solver = (str1, str2, count) => {
    if (count === 0) {
      for (let i = 0; i < str2.length; i++) {
        inMem(str1 + str2[i])
      }
    } else {
      for (let i = 0; i < str2.length; i++) {
        let newStr1 = str1 + str2[i];
        let newStr2 = str2.slice(0,i) + str2.slice(i+1, str2.length)
        solver(newStr1, newStr2, count-1)
      }
    }
  };
  
  for (let i = 0; i < tiles.length; i++) {
    solver("", tiles, i)
  }
  return answer
};

module.exports = numTilePossibilities