var insert = function(intervals, newInterval) {
  const mergeTwo = (arr1, arr2) => {
      if (arr1[0] > arr2[0]) {
          [arr1, arr2] = [arr2, arr1]
      }
      if (arr1[0] === arr2[0]) {
          return [[arr1[0], Math.max(arr1[1], arr2[1])]]
      }
      if (arr1[1] >= arr2[0]) {
          return [[arr1[0], Math.max(arr1[1], arr2[1])]]
      }
      return [arr1, arr2]
  }
  
  if (!intervals.length) {
      return [newInterval]
  }
  
  if (intervals.length === 1) {
      return mergeTwo(intervals[0], newInterval)
  }
  
  for (let i = 0; i < intervals.length; i++) {
      let merged = mergeTwo(intervals[i], newInterval);
      if (merged.length === 2 && (merged[0][0] === newInterval[0] && merged[0][1] === newInterval[1]) || i === intervals.length - 1) {
          intervals.splice(i, 1, ...merged);
          return intervals;
      }
      if (merged.length === 1) {
          intervals[i] = merged[0];
          for (let j = i; j + 1 < intervals.length; j++) {
              let mergeForward = mergeTwo(intervals[j], intervals[j+1]);
              if (mergeForward.length === 1) {
                  intervals.splice(i, 2, mergeForward[0]);
                  j--;
              } else {
                  return intervals;
              }
          }
      }
  }
  
  return intervals;
};