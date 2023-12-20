/*
1) Find the Maximum Subarray Sum: Write a function that takes an array of integers as input 
and finds the contiguous subarray within the array that has the largest sum. 
Return the sum of that subarray. For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], 
the function should return 6, which corresponds to the sum of the subarray [4, -1, 2, 1].
*/

// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// function kadanesAlgorithm (array) {
//     let maxSoFar = 0;
//     let currentMax = 0;

//     for (let element of array) {
//         currentMax = Math.max(element, currentMax + element);
//         maxSoFar = Math.max(maxSoFar, currentMax);
//     }
//     return maxSoFar;

// };
// console.log(kadanesAlgorithm(array))

/*
2)Rotate Array: Write a function that rotates an array of n elements to the right by k steps. 
For example, given the array [1, 2, 3, 4, 5, 6, 7] and k = 3,
 the function should modify the array to become [5, 6, 7, 1, 2, 3, 4].
*/
// let array = [1, 2, 3, 4, 5, 6]

// function rotateArray (arr, k) {
//     let n = array.length;

//     for (let i = 0; i < k; i++) {
//         let lastElement = arr[n - 1];

//     for (let j = n - 1; j > 0; j-- ) {
//         arr[j] = arr[j-1];
//     }

//     arr[0] = lastElement;
        
//     } 
//     return arr;


// }
// console.log(rotateArray(array, 3));

/*
3) Find Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 find the missing number. For example, given the array [3, 0, 1], the function should return 2.
*/

// let arr = [0,1,3];

// function findMissingNumber (arr) {
//     let n = arr.length + 1;
//     sortedArr = arr.sort((a,b) => a-b);
//     let actualSum = sortedArr.reduce((sum, num) => sum + num, 0);

//     let expectedSum = n * (n + 1) / 2;

//     return expectedSum - actualSum;
  
// }
// console.log(findMissingNumber(arr));

/*
4) Merge Intervals: Given an array of intervals, merge overlapping intervals and return the resulting merged intervals. 
For example, given the intervals [[1,3],[2,6],[8,10],[15,18]], the function should return [[1,6],[8,10],[15,18]].
*/

// let intervals = [[1,3],[2,6],[8,10],[15,18]];

// function mergeIntervals (intervals) {
//     intervals.sort((a,b) => a[0] - b[0]);

//     const merged = [intervals[0]];

//     for (let i = 1; i < intervals.length; i++) {
//         const lastMerged = merged[merged.length - 1];
//         const current = intervals[i];

//         if (current[0] <= lastMerged[1]) {
//             lastMerged[1] = Math.max(lastMerged[1], current[1]);
//         } else {
//             merged.push(current);
//         }
//     } 
//     return merged;




// }
// console.log(mergeIntervals(intervals));


// -----------------ხელახლა---------------------

/*
Find the Maximum Subarray Sum: Write a function that takes an array of integers as 
input and finds the contiguous subarray within the array that has the largest sum.
 Return the sum of that subarray. For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], 
 the function should return 6, which corresponds to the sum of the subarray [4, -1, 2, 1].
*/

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function kadanesAlgorithm (arr) {

//     let currentMax = 0;
//     let maxSoFar = 0;

//     for (let element of arr) {
//         currentMax = Math.max(element, currentMax + element);
//         maxSoFar = Math.max(maxSoFar, currentMax)
//     }
//     return maxSoFar;


// }
// console.log(kadanesAlgorithm(arr))

/*
Rotate Array: Write a function that rotates an array of n elements to the right by k steps. 
For example, given the array [1, 2, 3, 4, 5, 6, 7] and k = 3,
 the function should modify the array to become [5, 6, 7, 1, 2, 3, 4].
*/

// const arr = [1, 2, 3, 4, 5, 6, 7];

// function shiftArr (arr, k) {
//    let n = arr.length;

//    for (let i = 0; i < k; i++) {
//     let lastElement = arr[n - 1];
//     for (let j = n - 1; j > 0; j--) {
//         arr[j] = arr[j - 1];
//     }
//     arr[0] = lastElement;
//    }
//    return arr;

// }

// console.log(shiftArr(arr, 3));

// მეორე ხერხი. kargi xerxi :d

// const arr = [1, 2, 3, 4, 5, 6, 7];

// function shiftArr (arr, k) {
//    for (let i = 0; i < k; i++) {
//     let lastElement = arr.pop();
//     arr.unshift(lastElement);
//    }
//    return arr;

// }

// console.log(shiftArr(arr, 3));



/* Find Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 find the missing number. For example, given the array [3, 0, 1], the function should return 2.
*/
// let array = [3, 0, 1];

// function findMissingNum (arr) {

//     let n = arr.length + 1;
//     let sorted = arr.sort((a,b) => a - b);
//     let actualSum = sorted.reduce((sum, curr) => sum + curr,0);


//     let expectedSum = n * (n - 1) / 2;

//     return expectedSum - actualSum;

// }
// console.log(findMissingNum(array));

// mეორე ვერსია

// let array = [3, 0, 1];

// function findMissingNum (arr) {

//     arr.sort((a,b) => a - b);

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//             return arr[i] + 1;
//         }
//     } return undefined;

// }
// console.log(findMissingNum(array));

/*
Merge Intervals: Given an array of intervals, merge overlapping intervals 
and return the resulting merged intervals. 
For example, given the intervals [[1,3],[2,6],[8,10],[15,18]],
 the function should return [[1,6],[8,10],[15,18]].
*/

// let intervals = [[1,3],[2,6],[8,10],[15,18]];

// function mergeIntervals (array) {

//     intervals.sort((a, b) => a[0] - b[0]);

//     let merged = [intervals[0]];

//     for (let i = 1; i < intervals.length; i++) {
//         const lastMerged = merged[merged.length - 1];
//         const current = intervals[i];

//         if (current[0] <= lastMerged[1]) {
//             lastMerged[1] = Math.max(lastMerged[1], current[1]); // იდეაში ასევე შეგვიძლია current[1]-ს გავუტოლოთ თყ დავსორტავთ.
//         } else {
//             merged.push(current)
//         }
//     }
//     return merged;
// }
// console.log(mergeIntervals(intervals));


/// ---------------------- ხელახლა

/*
Find the Maximum Subarray Sum: Write a function that takes an array of 
integers as input and finds the contiguous subarray within the array that has 
the largest sum. Return the sum of that subarray. For example, given the array
 [-2, 1, -3, 4, -1, 2, 1, -5, 4], the function should return 6, which corresponds
  to the sum of the subarray [4, -1, 2, 1].
*/

// let array = [ 1, 4, 2, 1, 4];

// function kadanesAlgorithm (array) {
//     let currentMax = 0;
//     let maxSoFar = 0;

//     for (number of array) {
//        currentMax = Math.max(number, number + currentMax);
//        maxSoFar = Math.max(currentMax, maxSoFar);
//     }
//     return maxSoFar;
// }

// console.log(kadanesAlgorithm(array));

/*
Rotate Array: Write a function that rotates an array of n elements to the right by k steps. 
For example, given the array [1, 2, 3, 4, 5, 6, 7] and k = 3,
 the function should modify the array to become [5, 6, 7, 1, 2, 3, 4].
*/
// let array =  [1, 2, 3, 4, 5, 6, 7];

// function rotateArray (array, k) {
    
//     for (let i = 0; i < k; i++) {
//         let lastElement = array.pop();
//         array.unshift(lastElement);
//     }
//     return array;



// }

// console.log(rotateArray(array, 3));


/* Find Missing Number: Given an array containing n 
distinct numbers taken from 0, 1, 2, ..., n,
 find the missing number. For example, given the array 
 [3, 0, 1], the function should return 2.
*/

// let array = [3, 0, 1]; // 0, 1, 3


// function findMissingNumber (array) {
//     array.sort ((a, b) => a - b);
    
//     for (let i = 0; i < array.length - 1 ; i++) {
//         if (array[i + 1] - array[i] > 1) {
//             return array[i] + 1;
//         }
//     }
// }

// console.log(findMissingNumber(array));


/*
Merge Intervals: Given an array of intervals, merge overlapping intervals 
and return the resulting merged intervals. 
For example, given the intervals [[1,3],[2,6],[8,10],[15,18]],
 the function should return [[1,6],[8,10],[15,18]].
*/

// let array = [[1,3],[2,6],[8,10],[15,18]];

// function mergeIntervals (array) {
//     array.sort((a, b) => a[0] - b[0]);

//     let merged = [array[0]];

//     for (let i = 0; i < array.length; i++) {
//         let current = array[i];
//         let lastMerged = merged[merged.length - 1];

//         if (current[0] <= lastMerged[1]) {
//             lastMerged[1] = Math.max(current[1], lastMerged[1]);
//         } else {
//             merged.push(current);
//         }
//     }
//         return merged;
// }
// console.log(mergeIntervals(array));



/// again

/*4) Merge Intervals: Given an array of intervals,
 merge overlapping intervals and return the resulting merged intervals. 
For example, given the intervals [[1,3],[2,6],[8,10],[15,18]], the function should return [[1,6],[8,10],[15,18]].
*/

// const intervals = [[1,3],[2,6],[8,10],[15,18]];

// function mergeIntervals(intervals) {

//   // we need to loop and compare every second element's first element to previous element's last element.
//   // if they are equal or first one's last element is bigger than second's first, we need to assign greatest number
//   // from last merged and previous merged to the second element of lastMerged;

//   // intervals = intervals.sort((a, b) => a[0] - b[0]);
//   let merged = [intervals[0]]

//   for (let i = 1; i < intervals.length; i++) {
//     let current = intervals[i];
//     let lastMerged = merged[merged.length - 1];

//     if (current[0] <= lastMerged[1]) {
//       lastMerged[1] = Math.max(current[1], lastMerged[1]);
//     } else {
//       merged.push(current)
//     }
    
//   }
//   return merged;
 
//   }

//   console.log(mergeIntervals(intervals))
  





















