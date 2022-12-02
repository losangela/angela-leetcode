import fs from 'fs';

fs.readFile('input.txt', 'utf8', (err, data) => {
  const elves = [];
  const calories = data.split('\n').map(x => parseInt(x));
  const topCalories = [];

  let mostCalories = 0;
  let currentElfCalories = 0;

  const addTopCalories = (newCalories) => {
    if (topCalories[2] < newCalories) {
      topCalories.pop();
    }

    if (topCalories.length < 3) {
      topCalories.push(newCalories);
      topCalories.sort((a, b) => b - a);
    }
  }

  calories.map(cal => {
    if (!cal) {
      mostCalories = Math.max(mostCalories, currentElfCalories);
      elves.push({
        elf: elves.length + 1,
        calories: currentElfCalories,
      })
      addTopCalories(currentElfCalories);
      currentElfCalories = 0;
      return;
    }
    currentElfCalories += cal;
  })

  if (currentElfCalories) {
    mostCalories = Math.max(mostCalories, currentElfCalories);
    elves.push({
      elf: elves.length + 1,
      calories: currentElfCalories,
    })
    addTopCalories(currentElfCalories);
    currentElfCalories = 0;
  }
  console.log({ part: 1, elves, mostCalories })
  console.log({ part: 2, topCalories, sum: topCalories.reduce((a, b) => a + b) })
})