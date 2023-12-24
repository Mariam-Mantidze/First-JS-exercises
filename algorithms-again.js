// Exercise 1: Anagram Checker
// Write a function that takes two strings as input and 
//determines whether they are anagrams of each other.
// Anagrams are words or phrases that use the same characters in a different order.

// const str1 = "tone";
// const str2 = "note";


// function anagramChecker (str1, str2) {
//     // compare lengths
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     // create new object for character count
//     let characterCount = {};
    
//     // loop through first string and save it's values to characterCount object
//     for (let char of str1) {
//        if (characterCount[char] === undefined) {
//         characterCount[char] = 1;
//        } else {
//         characterCount[char] += 1;
//        }
//     }
//     // loop through second string and decrement character-count. If no such character is found, return false
//     for (let char of str2) {
//         if (characterCount[char]) {
//             characterCount[char] -= 1;
//             if (characterCount[char] < 0) {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     }
//     return true;
// }





// console.log(anagramChecker(str1,str2));


/* Exercise 2: Prime Number Generator
Write a function that takes a range of numbers as input and returns 
an array containing all prime numbers within that range.
*/

// function primeNumberChecker(num) {
//     if (num === 2 || num === 3) return true;
//     if (num < 2 || num % 2 === 0) return false;

//     for (let i = 3; i < Math.sqrt(num); i += 2) {
//         if (num % i === 0) {
//             return false;
//         } 
//     }
//     return true;
    
// }


// function primeNumberGenerator (num1, num2) {
//     let primeNums = [];

//     for (let i = num1; i < num2; i++) {
//         if (primeNumberChecker(i)) {
//             primeNums.push(i)
//         }
//     }
//     return primeNums;
// }

// console.log(primeNumberGenerator(1,20));


/* Exercise 3: Sorting Algorithms
 Implement sorting algorithms such as Bubble Sort, 
 Insertion Sort, or Quick Sort. Write functions that takes
an array of numbers as input and sort the array in ascending 
order using the chosen algorithm. */

// let array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

// function bubbleSort(arr) {

//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // using array destructurization for swapping
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

//                 // using temporary variable for swapping
//                 // let temp = arr[j];
//                 // arr[j] = arr[j + 1];
//                 // arr[j + 1] = temp
//             }
//         }
//     } return arr;
// }
// console.log(bubbleSort(array));

// quickSort

// let array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

// function quickSort(arr) {
//     // if array has 1 or less elements, its already sorted.
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let pivot = arr[0];
//     let left = [];
//     let right = [];
//     let equal = [];

//     for (let el of arr) {
//        if (el > pivot) {
//             left.push(el);
//        } else if(el < pivot) {
//         right.push(el);
//        }  else {
//         equal.push(el)
//        }
//     }
    
//     return [...quickSort(right), ...quickSort(equal), ...quickSort(left)];

// }

// console.log(quickSort(array));


// // insertion sort -- ხვალ დაუბრუნდი.

//  let array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

//  function insertionSort(arr) {
   
//     for (let i = 1; i < arr.length; i++) {
//         let currentElement = arr[i];
//         let j;
//         // second loop to compare each element with previous element;
//         for (j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
//             // swap places 
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = currentElement;

//     } 
    
//     return arr;
//  }

// console.log(insertionSort(array));

// Exercise 4: Binary Search
// Write a function that takes a sorted array of numbers 
// and a target number as input and performs a binary search
// to determine if the target number exists in the array. 
//Return true if found, and false otherwise.



// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// function binarySearch(arr, n) {

//     let start = 0;
//     let end = arr.length - 1;
   
//         while (start <= end) {
//             let middle = Math.floor((start + end) / 2);
//             if (n === arr[middle]) return true;
//             else if (n > arr[middle]) {
//                 start = middle + 1;
//             } 
//             else {
//                 end = middle - 1;
//             }
//         }
//         return false;
// }

// console.log(binarySearch(arr, 9));



// Exercise 5: Unique Elements
// Write a function that takes an array of numbers as input and 
// returns a new array containing only the unique elements of the original array.
// Remove any duplicate numbers.


// function uniqueElements(array) {
//     let uniqueNumbers = {};
//     let uniqueArray = [];

//     for (let i = 0; i < array.length - 1; i++) {
//         let element = array[i];
//         if (!uniqueNumbers[element]) {
//             uniqueArray.push(element);
//             uniqueNumbers[element] = true;
//         }
//     }
//     return uniqueArray;

// }


// console.log(uniqueElements([1,1,3,4,5,6,6,7]));

// Exercise 6: Palindrome Checker
// Write a function that takes a string as input and determines
// whether it is a palindrome. Consider letters and digits only,
// ignoring spaces, punctuation, and letter casing.


// let word = "nuan";

// function palindromeChecker(str) {
//     // normalise
//     let newString = "";
//     for (let char of str) {
//         if (char >= "a" && char <= "z" || !isNaN(char)) {
//             newString += char;
//         }
//     }

//     // convertt to lowecase;
//     newString = newString.toLowerCase();

//     // check for palindrome
//     let start = 0;
//     let end = str.length - 1;
    
//     while (start < end) {
//         if (newString[start] !== str[end]) {
//             return false;
//         }
//         start ++;
//     end --;
//     } 
//     return true;

// }

// console.log(palindromeChecker(word));

// Exercise 7: Largest Sum Subarray - Kadane's algorythm
// Write a function that takes an array of numbers as input 
// and finds the contiguous subarray with the largest sum. Return the sum of that subarray.

// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function kadanesAlgorithm (array) {
//     let maxSoFar = 0;
//     let currentMax = 0;

// /// for loop=iთ
//     for (let num of array) {
//         if (num > num + currentMax) {
//             currentMax = num;
//         } else {
//             currentMax = num + currentMax;
//         }
//         if (maxSoFar > currentMax) {
//             maxSoFar = maxSoFar;
//         } else {
//             maxSoFar = currentMax;
//         }
//     }

//     // math max=ით.
//     // for (let num of array) {
//     //     currentMax = Math.max(num, currentMax + num);
//     //     maxSoFar = Math.max (maxSoFar, currentMax);
//     // }
//         return maxSoFar;

// }

// console.log(kadanesAlgorithm(array));


// Exercise 8: Missing Number
// Write a function that takes an array of numbers from 
// 1 to n, with one number missing, and returns the missing number.


// const arr = [1,2,4,5,6,7];

// function findMissingNumber (arr) {
//     let missingNumber;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//             missingNumber = arr[i] + 1;
//         }
//     }
//     return missingNumber
// }

// console.log(findMissingNumber(arr));



// Exercise 9: Deep Clone
// Write a function that performs a deep clone of an object.
// The function should create a new object with the same structure and values as the original, 
// without any reference to the original object.

// let obj = {
//     name: "mariam",
//     age: 26,
//     hobbies: [
//         "yoga", 
//         "running",
//         "climbing",
//     ],
//     parents: {
//         mom: "Maia",
//         dad: "Aleksandre"
//     }
// }

// function deepClone (obj) {
//     // base case

//     if (typeof obj !== "object" || obj === null) return;

//     let clone;

//     if (typeof obj === "object" && !Array.isArray(obj)) {
//         clone = {};
//     } 
//     else if (Array.isArray(obj)) {
//         clone = [];
//     }

//     for (let key in obj) {
//         let value = obj[key];

//         if (typeof value !== "object" && typeof value !== "function") {
//             clone[key] = value;
//         } else if (typeof value === "object" && value !== null) {
//             clone[key] = deepClone(value)
//         }
//     }
//     return clone

  
// }

// console.log(deepClone(obj));



// Exercise 10: Longest Common Prefix
// Write a function that takes an array of strings as input and finds the longest 
// common prefix among the strings. Return an empty string if there is no common prefix.


// let strings = ["geeksforgeeks", "geeks", "geek", "geezer"];

// function longestPrefix (arr) {

//     if (strings.length === 0) return null;
//     if (strings.length === 1) return arr[0];

//     let prefix = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         for (let j = 0; j < prefix.length; j++) {
//             if (prefix[j] !== arr[i][j]) {
//                 prefix = prefix.slice(0, j)
//                 if (prefix.length === 0) {
//                     return null
//                 }
//                 break;
//             }
//         }
//     }
//     return prefix

// }

// console.log(longestPrefix(strings));

////// ------- and again

// Exercise 1: Anagram Checker
// Write a function that takes two strings as input and 
//determines whether they are anagrams of each other.
// Anagrams are words or phrases that use the same characters in a different order.



// function anagramChecker (str1, str2) {

// let characterCount = {};

// for (let char of str1) {
//     if (!characterCount[char]) {
//         characterCount[char] = 1;
//     } else {
//         characterCount[char] += 1;
//     }
// }

// for (let char of str2) {
//     if (!characterCount[char]) {
//         return false;
//     } else if (characterCount[char]) {
//         characterCount[char] -= 1;
//     } 
//      if (characterCount[char] > 0) {
//         return false;
//      }
// }
// return true;


// }

// console.log(anagramChecker("note", "tone"))

/* Exercise 2: Prime Number Generator
Write a function that takes a range of numbers as input and returns 
an array containing all prime numbers within that range.
*/

// function primeNumberChecker (num) {
//     if (num === 2 || num === 3) return true;
//     if (num < 2 || num % 2 === 0) return false;

//     for (let i = 3; i < Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function primeNumberGenerator (num1, num2) {
//     let primeNums = [];

//     for (let i = num1; i < num2; i++) {
//         if (primeNumberChecker(i)) {
//             primeNums.push(i);
//         }
//     }
//     return primeNums
// }

// console.log(primeNumberGenerator(1,20));



/* Exercise 3: Sorting Algorithms
 Implement sorting algorithms such as Bubble Sort, 
 Insertion Sort, or Quick Sort. Write functions that takes
an array of numbers as input and sort the array in ascending 
order using the chosen algorithm. */

// let array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

// function bubbleSort (arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(array));


// quick sort

// function quickSort(arr) {
//     if (arr.length <= 1) {
//        return arr;
//     }

//     let pivot = arr[0];

//     let middle = [];
//     let right = [];
//     let left = [];

//     for (let num of arr) {
//         if (num > pivot) {
//             left.push(num);
//         } else if (num < pivot) {
//             right.push(num);
//         } else {
//             middle.push(num)
//         }
//     }
//     return [...quickSort(right), ...quickSort(middle), ...quickSort(left)]


// }

// console.log(quickSort(array));


// // insertion sort -- 


// function selectionSort(arr) {
   
//     for (let i = 0; i < array.length; i++) {
//         let currentElement = arr[i];

//         let j;
//         for (j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = currentElement;
//     }
//     return arr;
// }

// console.log(selectionSort(array));


// Exercise 4: Binary Search
// Write a function that takes a sorted array of numbers 
// and a target number as input and performs a binary search
// to determine if the target number exists in the array. 
//Return true if found, and false otherwise.


// let array = [1,2,3,4,5,7,8];

// function binarySearch (arr, target) {

//     let start = 0;
//     let end = arr.length - 1;

       

//         while (start <= end) {
//             let middle = Math.floor((start + end) / 2);
//             if (target === arr[middle]) return true;
//             if (target > arr[middle]) {
//                 start = middle + 1;
//             } else if (target < arr[middle]) {
//                 end = middle -1;
//             }
//         }
//         return false;

// }

// console.log(binarySearch(array, 1));




// Exercise 5: Unique Elements
// Write a function that takes an array of numbers as input and 
// returns a new array containing only the unique elements of the original array.
// Remove any duplicate numbers.

// let arr = [1,1,3,3,2,3,4,5,6,7]
// function uniqueElements (arr) {
    
// //  let uniqueArr = [];
// //  let uniqueObj = {}; // tracker

// //  for (let num of arr) {
// //     if (!uniqueObj[num]) {
// //         uniqueObj[num] = true;
// //         uniqueArr.push(num);
// //     } 

// //  }
// //  return uniqueArr


// // filter

// return arr.filter((element, index) => {
//     if (arr.indexOf(element) === index) {
//         return true;
//     }
// })
// }

// console.log(uniqueElements(arr));

// Exercise 6: Palindrome Checker
// Write a function that takes a string as input and determines
// whether it is a palindrome. Consider letters and digits only,
// ignoring spaces, punctuation, and letter casing.

// let string = "nan";

// function palindromeChecker (str) {
    
//     let newString = "";

//     for (let char of string) {
//         if (char >= "a" && char <= "z" || !isNaN(char) && char !== " ")  {
//             newString += char;
//         }
//     }
  

//     let start = 0;
//     let end = newString.length - 1;

//     while (start < end) {
//         if (newString[start] !== newString[end]) {
//             return false;
//         }
//         start ++;
//         end --;
//     }
//     return true;
    

// }

// console.log(palindromeChecker(string));


// Exercise 7: Largest Sum Subarray - Kadane's algorythm
// Write a function that takes an array of numbers as input 
// and finds the contiguous subarray with the largest sum. Return the sum of that subarray.

// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


// function kadanesAlgorithm(array) {
//        let currentMax = 0;
//        let maxSoFar = 0;

//     for (let element of array) {
//        currentMax =  Math.max(element, currentMax + element);
//       maxSoFar = Math.max(currentMax, maxSoFar)
//     }
//     return maxSoFar


// }
// console.log(kadanesAlgorithm(array));



// Exercise 8: Missing Number
// Write a function that takes an array of numbers from 
// 1 to n, with one number missing, and returns the missing number.
// const arr = [1, 2, 4, 5, 6];

// function findMissingNum(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//             return arr[i] + 1;
//         }
//     }

// }
// console.log(findMissingNum(arr));

// / Exercise 9: Deep Clone
// Write a function that performs a deep clone of an object.
// The function should create a new object with the same structure and values as the original, 
// without any reference to the original object.

// let obj = {
//     name: "mariam",
//     age: 26,
//     hobbies: [
//         "yoga", 
//         "running",
//         "climbing",
//     ],
//     parents: {
//         mom: "Maia",
//         dad: "Aleksandre"
//     }
// }

// function deepClone(obj) {
//     // base case
//     if (typeof obj !== "object" || obj === null) {
//         return;
//     }

//     let clone;

//     if (typeof obj === "object" && !Array.isArray(obj)) {
//         clone = {};
//     } else if (Array.isArray(obj)) {
//         clone = [];
//     }

//     for (let key in obj) {
//         let value = obj[key];

//         if (typeof value !== "object" && typeof value !== "funtion") {
//                 clone[key] = value;
//         }
//         if (typeof value === "object" && value !== null) {
//             clone[key] = deepClone(value);
//         }
//     }
//     return clone;

// }

// console.log(deepClone(obj));

// Exercise 10: Longest Common Prefix
// Write a function that takes an array of strings as input and finds the longest 
// common prefix among the strings. Return an empty string if there is no common prefix.
// 
// let strings = ["geeksforgeeks", "geeks", "geek", "geezer"];


// function longestCommonPrefix (array) {
//     if (array.length === 0) return null;
//     if (array.length ===1) return array[0];

//     let prefix = array[0];

//     for (let i = 1; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (prefix[j] !== array[i][j]) {
//                prefix = prefix.slice(0, j);
//                 if (prefix === 0) {
//                     return null;
                    
//                 }
//                 break
//             } 
//         }
        
//     }
//     return prefix

// }

// console.log(longestCommonPrefix(strings));


// ------------- კიდევ

//insertion sort

//  let array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

//  function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let currentElement = arr[i];
//         let j;

//         for (j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = currentElement;
//     }
//     return arr;
//  }
//  console.log(insertionSort(array));

// Exercise 9: Deep Clone
// Write a function that performs a deep clone of an object.
// The function should create a new object with the same structure and values as the original, 
// without any reference to the original object.


// let obj = {
//     name: "mariam",
//     age: 26,
//     hobbies: [
//         "yoga", 
//         "running",
//         "climbing",
//     ],
//     parents: {
//         mom: "Maia",
//         dad: "Aleksandre"
//     }
// }

// function deepClone(obj) {
//     if (typeof obj !== "object" && obj === null) return;

//     let clone;

//     if (typeof obj === "object" && !Array.isArray(obj)) {
//         clone = {};
//     } else if (Array.isArray(obj)) {
//         clone = [];
//     }

//     for (let key in obj) {
//         let value = obj[key];

//         if (typeof value !== "object" && typeof value !== "function") {
//             clone[key] = value;
//         } else if (typeof value === "object" && value !== null) {
//             clone[key] = deepClone(value);
//         }
//     }
//     return clone;

// }

// console.log(deepClone(obj));



// Exercise 10: Longest Common Prefix
// Write a function that takes an array of strings as input and finds the longest 
// common prefix among the strings. Return an empty string if there is no common prefix.


// let strings = ["geeksforgeeks", "geeks", "geek", "geezer"];

// function longestPrefix(arr) {
//     let prefix = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (prefix[j] !== arr[i][j]) {
//                 prefix = prefix.slice(0,j);
//             }
//         }
//     }
//     return prefix;
// }

// console.log(longestPrefix(strings));


// ხელახლა

// Exercise 4: Binary Search
// Write a function that takes a sorted array of numbers 
// and a target number as input and performs a binary search
// to determine if the target number exists in the array. 
//Return true if found, and false otherwise.

// const arr = [1, 2, 3, 4, 5, 6]

// function binarySearch(arr, n) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);
//         if (n === arr[middle]) return true;
//         if (n > arr[middle]) {
//             start = middle + 1;
//         } else if (n < arr[middle]) {
//             end = middle - 1;
//         }
        
//     }
//     return false;
     

// }

// console.log(binarySearch(arr, 12));
