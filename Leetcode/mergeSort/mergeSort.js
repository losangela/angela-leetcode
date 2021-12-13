/*
========================================
================PROMPT==================
========================================
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
========================================
================SOLUTION================
========================================
This is a recursive solution. Just like the diagram shows, divide an array into equal parts.
Keep dividing the array until there's only 1 element in the array. Once that happens, rearrange
in order with left and right index pointers. So for example, if you're looking at [2] and [1],
the reorder will return [1, 2]. Then that [1, 2] will be sorted with something like [0, 3].
Left and right pointers start at 0. Left pointer represents the left array [1, 2] and the right pointer
represents the right array [0, 3]. Then begin a while loop and compare the elements that are currently
pointed to. What is smaller, 0 or 1? 0 is smaller so the return array is [0] and the right pointer
increments by 1. Then what is smaller, 1 or 3? 1 is smaller so the return array is [0, 1] and the left
pointer is incremented by 1. Then compare 2 and 3. 2 is smaller so return array is [0, 1, 2] and left
pointer is incremented by 1 resulting in 2. The left pointer is now equal to the length of the left
array so now the result is concatinated with whatever is left on the right which is 3. Now the result
is [0, 1, 2, 3], and this can then be compared to another 4 lengthed array and continue to go on until
the call stack is completed.
*/
