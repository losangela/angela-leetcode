import fs from 'fs';

class TreeModel {
  height: number;
  isVisible: boolean;
  constructor(height:string, isVisible:boolean = false) {
    this.height = Number(height);
    this.isVisible = isVisible;
  }
}

fs.readFile('input.txt', 'utf8', (err, data) => {
  const dataList = data.split('\n').map(s => s.split('').map(l => new TreeModel(l)));
  
  const countVisibleTrees = ():number => {
    let visibleCount = 0;

    for (let i = 0; i < dataList.length; i++) {
      let tallestLeft = -1;
      let tallestTop = -1;
      let tallestRight = -1;
      let tallestBottom = -1;

      for (let j = 0; j < dataList[0].length; j++) {
        const treeLeft = dataList[i][j];
        const treeTop = dataList[j][i];
        const treeRight = dataList[i][dataList[0].length - j - 1];
        const treeBottom = dataList[dataList.length - j - 1][i];

        if (treeLeft.height > tallestLeft) {
          tallestLeft = treeLeft.height;
          if (!treeLeft.isVisible) {
            visibleCount++;
            treeLeft.isVisible = true;
          }
        }

        if (treeTop.height > tallestTop) {
          tallestTop = treeTop.height;
          if (!treeTop.isVisible) {
            visibleCount++;
            treeTop.isVisible = true;
          }
        }

        if (treeRight.height > tallestRight) {
          tallestRight = treeRight.height;
          if (!treeRight.isVisible) {
            visibleCount++;
            treeRight.isVisible = true;
          }
        }

        if (treeBottom.height > tallestBottom) {
          tallestBottom = treeBottom.height;
          if (!treeBottom.isVisible) {
            visibleCount++;
            treeBottom.isVisible = true;
          }
        }
      }
    }

    return visibleCount;
  };

  const getHighestScenicScore = ():number => {
    let highestScore = 0;

    for (let i = 0; i < dataList.length; i++) {
      for (let j = 0; j < dataList[0].length; j++) {
        const tree = dataList[i][j];
        let left = 0;
        let top = 0;
        let right = 0;
        let bottom = 0;

        let col = i;
        let row = j;

        while (col > 0) { // check left
          col--;
          left++;
          if (dataList[col][row].height >= tree.height) {
            break;
          }
        }

        col = i;
        while (row > 0) { // check top
          row--;
          top++;
          if (dataList[col][row].height >= tree.height) {
            break;
          }
        }

        row = j;
        while (col + 1 < dataList[0].length) { // check right
          col++;
          right++;
          if (dataList[col][row].height >= tree.height) {
            break;
          }
        }

        col = i;
        while (row + 1 < dataList.length) { // check bottom
          row++;
          bottom++;
          if (dataList[col][row].height >= tree.height) {
            break;
          }
        }

        const scenicScore = left * top * right * bottom;
        if (scenicScore > highestScore) {
          highestScore = scenicScore;
        }
      }
    }

    return highestScore;
  }

  const answerToPartOne = countVisibleTrees();
  const answerToPartTwo = getHighestScenicScore();
  console.log({answerToPartTwo})
});