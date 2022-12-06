import fs, { readFile } from 'fs';

fs.readFile('input.txt', 'utf8', (err, data) => {

  const getFirstMarkerAfterN = (str, n) => {
    const mem = {};
    let charCount = 0;

    for (let i = 0; i < str.length; i++) {
      if (!mem[str[i]]) {
        mem[str[i]] = 1;
        charCount++;
      } else {
        mem[str[i]]++;
        charCount++;

        let left = i + 1 - charCount;
        while (true) { // move left window
          mem[str[left]]--;
          charCount--;
          if (str[left] === str[i]) {
            break;
          }
          left++;
        }
      }
      if (charCount === n) {
        return i + 1;
      }
    };
    
  };

  const partOne = () => console.log(getFirstMarkerAfterN(data, 4));
  const partTwo = () => console.log(getFirstMarkerAfterN(data, 14));

  partTwo();

})