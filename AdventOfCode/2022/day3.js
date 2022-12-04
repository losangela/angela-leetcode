import fs from 'fs';

fs.readFile('input.txt', 'utf8', (err, data) => {
  data = data.split('\n');

  const letterToPriority = letter => {
    let isLowerCase = letter === letter.toLowerCase();

    if (isLowerCase) {
      return letter.charCodeAt(0) - 96
    } else {
      return letter.charCodeAt(0) - 38
    }
  };

  const divideRucksack = str => {
    return [str.substring(0, str.length/2), str.substring(str.length/2)]
  }

  const getCommonItemTypes = (dividedRucksackItems) => {
    const mem = {};
    const mem2 = {};
    const commons = [];

    for (let i = 0; i < dividedRucksackItems[0].length; i++) {
      mem[dividedRucksackItems[0][i]] = true
    }

    for (let i = 0; i < dividedRucksackItems[1].length; i++) {
      if (mem[dividedRucksackItems[1][i]]) {
        mem2[dividedRucksackItems[1][i]] = true
      }
    }

    for (let i = 0; i < dividedRucksackItems[2].length; i++) {
      if (mem2[dividedRucksackItems[2][i]] && !commons.includes(dividedRucksackItems[2][i])) {
        commons.push(dividedRucksackItems[2][i])
      }
    }

    return commons
  }

  let rucksacks = [];
  let priorities = 0;
  for (let i = 0; i < data.length; i++) {
    rucksacks.push(data[i]);
    if (rucksacks.length === 3) {
      let commons = getCommonItemTypes(rucksacks);
      rucksacks = [];
      priorities += commons.reduce((a, b) => a + letterToPriority(b), 0);
    }
  }

  console.log({ answer: priorities})
})