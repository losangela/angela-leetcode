import fs, { readFile } from 'fs';

fs.readFile('input.txt', 'utf8', (err, data) => {
  data = data.split('\n');
  const stacks = {};
  const moves = [];
  const stacksCount = (data[0].length + 1) / 4;
  let stackIndex = 0;

  while (true) { /// build stacks
    for (let i = 0; i < stacksCount; i++) {
      const crateIndex = 1 + (4 * i);
      if (!stacks[i + 1]) {
        stacks[i + 1] = [];
      }
      if (data[stackIndex][crateIndex] !== ' ') {
        stacks[i + 1].unshift(data[stackIndex][crateIndex])
      }
    }
    stackIndex++
    if (data[stackIndex].substring(0, 2) === ' 1') {
      stackIndex += 2
      break;
    }
  }

  const movesParser = moveStr => {
    const regex = /\b(?:move | from | to )\b/
    const moves = moveStr.split(regex).splice(1);
    return moves.map(x => parseInt(x))
  }

  while (stackIndex < data.length) {
    moves.push(movesParser(data[stackIndex]));
    stackIndex++;
  }

  const partOne = () => {
    for (let i = 0; i < moves.length; i++) {
      const [count, from, to] = moves[i]
      for (let j = 0; j < count; j++) {
        const popped = stacks[from].pop();
        stacks[to].push(popped);
      }
    }

    let message = '';
    for (let i = 0; i < stacksCount; i++) {
      const topCrate = stacks[i + 1].pop();
      message += topCrate || ''
    }

    console.log('answer to part 1:', message)
  }

  const partTwo = () => {
    for (let i = 0; i < moves.length; i++) {
      const [count, from, to] = moves[i]
      const spliced = stacks[from].splice(0 - count);
      stacks[to].push(...spliced);
    }

    let message = '';
    for (let i = 0; i < stacksCount; i++) {
      const topCrate = stacks[i + 1].pop();
      message += topCrate || ''
    }

    console.log('answer to part 2:', message)
  }

  partTwo();
})