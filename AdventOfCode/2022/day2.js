import fs from 'fs';

const score = {
  A: 1, //rock
  B: 2, //paper
  C: 3, //scissors
  X: 1,
  Y: 2,
  Z: 3,
}

const win = {
  A: ['C', 'B'], // 'X' rock beats 'C' scissors, ties with 'A' rock
  B: ['A', 'C'], // 'Y' paper beats 'A' rock, ties with 'B' paper
  C: ['B', 'A'], // 'Z' scissors beats 'B' paper, ties with 'C', scissors
}

fs.readFile('input.txt', 'utf8', (err, data) => {
  data = data.split('\n');
  let myScore = 0;
  let opponentScore = 0;

  const getScores = (round) => {
    let opponentHand = round[0];
    let myPlay = round[2];

    if (myPlay === 'X') { // i must lose
      return [6 + score[opponentHand], 0 + score[win[opponentHand][0]]]
    }

    if (myPlay === 'Y') { // must draw
      return [3 + score[opponentHand], 3 + score[opponentHand]]
    }

    if (myPlay === 'Z') { // i must win
      return [0 + score[opponentHand], 6 + score[win[opponentHand][1]]]
    }
  }

  data.map(round => {
    const scores = getScores(round);
    opponentScore += scores[0];
    myScore += scores[1];
  })
  console.log({myScore, opponentScore})
})