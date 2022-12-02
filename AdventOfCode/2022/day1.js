import fs from 'fs';

fs.readFile('input.txt', 'utf8', (err, data) => {
  const elves = [];
  const calories = data.split('\n').map(x => parseInt(x));
  const topCalories = [];
  
  let mostCalories = 0;
  let currentElfCalories = 0;

  calories.map(cal => {
    if (!cal) {
      mostCalories = Math.max(mostCalories, currentElfCalories);
      elves.push({
        elf: elves.length + 1,
        calories: currentElfCalories,
      })
      currentElfCalories = 0;
      return;
    }
    currentElfCalories += cal;
  })

  if (currentElfCalories) {
    elves.push({
      elf: elves.length + 1,
      calories: currentElfCalories,
    })
    currentElfCalories = 0;
  }
  console.log({ elves, mostCalories })
})