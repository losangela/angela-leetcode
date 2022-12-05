import fs, { readFile } from 'fs';

fs.readFile('input.txt', 'utf8', (err, data) => {
  const parse = () => {
    data = data.split('\n');
    data = data.map(line => {
      line = line.split(',')
      line = line.map(ass => ass.split('-').map(x => parseInt(x)))
      return line
    })
  }
  parse();

  let pairs = 0;
  let overlaps = 0;
  
  const findPairs = (a, b) => {
    if (a[0] >= b[0] && a[1] <= b[1]) {
      pairs++
    } else if (b[0] >= a[0] && b[1] <= a[1]) {
      pairs++
    }
  }

  const findOverlap = (a, b) => {
    if (a[1] >= b[0] && b[1] >= a[0]) {
      overlaps++
    }
  }

  data.forEach(assignment => findOverlap(...assignment))
  console.log({overlaps})
})