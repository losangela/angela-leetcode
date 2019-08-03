/*
Merge sort is a divide-and-conquer algorithm based on the idea of breaking down
a list into several sub-lists until each sublist consists of a single element and
merging those sublists in a manner that results into a sorted list.

https://media.geeksforgeeks.org/wp-content/cdn-uploads/Merge-Sort-Tutorial.png
*/

const mergeSort = arr => {
    if (arr.length === 1) {
        return arr
    }
    let split = Math.ceil(arr.length/2)
    let left = arr.slice(0,split)
    let right = arr.slice(split)
    left = mergeSort(left)
    right = mergeSort(right)
    let result = [];
    let lp = 0;
    let rp = 0;
    while (lp < left.length && rp < right.length) {
        if (left[lp] < right[rp]) {
            result.push(left[lp])
            lp++
            if (lp === left.length) {
                result = result.concat(right.slice(rp))
            }
        } else {
            result.push(right[rp])
            rp++
            if (rp === right.length) {
                console.log('lets pus', left.slice(lp))
                result = result.concat(left.slice(lp))
            }
        }    
    }
    return result
}

/*
explanation

*/
