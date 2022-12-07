import fs, { readFile } from 'fs';

enum fileSystemTypes {
  DIR = 'dir',
  FILE = 'file',
}
interface iFileSystemTreeNode {
  type: fileSystemTypes,
  name: string,
  size?: number,
  children?: iFileSystemTreeNode[],
  parent?: iFileSystemTreeNode,
}

fs.readFile('input.txt', 'utf8', (err, data) => {
  const dataList = data.split('\n');

  const fileSystemTree:iFileSystemTreeNode = {
    type: fileSystemTypes.DIR,
    name: '/',
    children: [],
    size: null,
  };

  const buildTree = ():void => {
    let listIndex = 1;
    let pointer:iFileSystemTreeNode = fileSystemTree;

    const addNodesToPointer = (line:string):iFileSystemTreeNode => {
      const splitLine = line.split(' ');
      const isDir = splitLine[0] === fileSystemTypes.DIR;
      const newNode:iFileSystemTreeNode = {
        type: isDir ? fileSystemTypes.DIR : fileSystemTypes.FILE,
        name: splitLine[1],
        size: isDir ? null : parseInt(splitLine[0]),
        ...isDir && { children: [] },
        parent: pointer,
      };
      pointer.children.push(newNode);
      return newNode;
    };

    const incrementParentFileSize = (node:iFileSystemTreeNode):void => {
      let parent:iFileSystemTreeNode = node.parent;

      while (parent) {
        parent.size += node.size;
        parent = parent.parent;
      }
    };
    
    while (listIndex < dataList.length) {
      const commandLineSplit = dataList[listIndex].split(' ');
      if (commandLineSplit[1] === 'cd') {
        if (commandLineSplit[2] === '..') {
          pointer = pointer.parent;
        } else {
          pointer = pointer.children.find(child => child.name === commandLineSplit[2]);
        }
        listIndex++;
      } else if (commandLineSplit[1] === 'ls') {
        listIndex++;
        while (dataList[listIndex] && dataList[listIndex][0] !== '$') {
          const newNode = addNodesToPointer(dataList[listIndex]);
          if (newNode.size) {
            incrementParentFileSize(newNode);
          }
          listIndex++;
        }
      }
    }
  }

  const partOne = ():number => {
    const MAX_SIZE = 100_000;
    let dirSizeCount = 0;

    const traverse = (node):void => {
      const { children } = node;
      for (let i = 0; i < children.length; i++) {
        if (children[i].type === fileSystemTypes.DIR) {
          if (children[i].size < MAX_SIZE) {
            dirSizeCount += children[i].size;
          }
          traverse(children[i]);
        }
      }
    };

    traverse(fileSystemTree);
    return dirSizeCount;
  };

  const partTwo = ():number => {
    const TOTAL_SPACE = 70_000_000;
    const MIN_UNUSED_SPACE = 30_000_000;

    const totalSizeOfHead = fileSystemTree.size;
    const minNeededSpace = totalSizeOfHead - (TOTAL_SPACE - MIN_UNUSED_SPACE);

    const directoriesSize:number[] = [];

    const traverse = (node):void => {
      if (node.type === fileSystemTypes.DIR) {
        directoriesSize.push(node.size);
        for (let i = 0; i < node.children.length; i++) {
          traverse(node.children[i]);
        }
      }
    };

    traverse(fileSystemTree);
    directoriesSize.sort((a, b) => a - b);
    
    return directoriesSize.find(size => size >= minNeededSpace);
  }

  buildTree();
  const answerToPartOne = partOne();
  const answerToPartTwo = partTwo();
  console.log({answerToPartOne, answerToPartTwo});
})