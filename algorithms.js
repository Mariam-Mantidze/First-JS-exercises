// Exercise 1: Anagram Checker
// Write a function that takes two strings as input and 
//determines whether they are anagrams of each other.
// Anagrams are words or phrases that use the same characters in a different order.


// function anagramChecker(string1, string2) {

//     for (let char of string1) {
//         if (!string2.includes(char)) {
//             return false;
//         }
//     } 
//     return true;
   
// }

// ---------- with algorithm


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



// console.log(anagramChecker(str1,str2))




/* Exercise 2: Prime Number Generator
Write a function that takes a range of numbers as input and returns 
an array containing all prime numbers within that range.
*/

// function primeNumberChecker(number) {
//     if (number === 2 || number === 3) return true;
//     if (number < 2 || number % 2 === 0) return false;

//     for (let i = 3; i < Math.sqrt(number); i+=2) {
//         if (number % i === 0) return false;
//     }
//     return true;
// }

// function primeNumberGenerator(num1, num2) {
//     let primeNums = [];

//     for (let i = num1; i < num2; i++) {
//         if (primeNumberChecker(i)) {
//             primeNums.push(i);
//         }
//     }
//     return primeNums;
// }

// console.log(primeNumberGenerator(1,20));


/* Exercise 3: Sorting Algorithms
 Implement sorting algorithms such as Bubble Sort, 
 Insertion Sort, or Quick Sort. Write functions that takes
an array of numbers as input and sort the array in ascending 
order using the chosen algorithm.
*/
// let array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

// function bubbleSort (arr) {
//     let n = arr.length;

//     let swapped;
//     do {
//          swapped = false;
//         for (let i = 0; i < n - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//          n--;
//     } 
//     while(swapped);
//     return arr;
// }



// console.log(bubbleSort(array));

//---- quickSort with recursion

// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let pivot = arr[0];
//     let left = [];
//     let right = [];
//     let equal = [];

//     for (let element of arr)  {
//         if (element > pivot) {
//             right.push(element);
//         } else if(element < pivot) {
//             left.push(element);
//         } else {
//             equal.push(element);
//         }
//     }
//     return [...quickSort(left), ...equal, ...quickSort(right)];

// }


// insertion sort - დავბრუნდეთ

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let currElement = arr[i];
//         let j = i - 1; // იმიტომ რომ ინდექსი გვინდა და არა კონკრ ელემენტი მაგ.: arr[i - 1];

//         while (j >= 0 && arr[j] > currElement) {
//             arr[j + 1] = arr[j];
//             j = j - 1; // დეკრემენტი რომ უკან-უკან წავიდეს j.
//         }
//         arr[j + 1] = currElement; // while-ს დასრულების შემდეგ ხდება ეს, ანუ მაშინ როცა -1 არის j, ან currentElement < 
//     } 
//     return arr;
// }
   
    

// let array = [3, 6, 8, 10, 1, 2, 1];

// console.log(insertionSort(array));



// Exercise 4: Binary Search
// Write a function that takes a sorted array of numbers 
// and a target number as input and performs a binary search
// to determine if the target number exists in the array. Return true if found, and false otherwise.


// with while loop

// let array = [1, 2, 3, 4, 5, 6, 7];

// function binarySearch (arr, key) {
//     let start = 0;
//     let end = arr.length - 1;

//     while(start <= end) {
//         let middle = Math.floor((start + end) / 2)
//         if(arr[middle] === key) {
//             return true;
//         } else if (arr[middle] < key) {
//             start = middle + 1;
//         } else {
//             end = middle - 1;
//         }
//     }
//     return false;
// }

// with recursion


// function binarySearch (arr, key, start, end) {
//     if (start > end) {
//         return -1;
//     }
//     let middle = Math.floor((start + end) / 2);

//     if (arr[middle] === key) return key;
//     if (arr[middle] < key) {
//         return binarySearch (arr, key, middle + 1, end)
//     } else {
//         return binarySearch (arr, key, start, middle - 1)
//     }
// }


// console.log(binarySearch(array, 7, 0, array.length - 1));




// Exercise 5: Unique Elements
// Write a function that takes an array of numbers as input and 
// returns a new array containing only the unique elements of the original array.
// Remove any duplicate numbers.

// function uniqueElements(array) {

//     // 1) for loop-ით;
//     // let uniqueArr = [];
    

//     // for (let el of array) {
//     //     if(!uniqueArr.includes(el)) {
//     //         uniqueArr.push(el);
//     //     } 

//     // }
//     // return uniqueArr;

//     // 2) simple way
//     // return new Set(array)

//     // 3) using filter
//     return array.filter((element, index) => {
//         if (array.indexOf(element) === index) {
//             return true;
//         } 
//         return false;
//     })
 
// }

//3) with algorithm.

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


// const string = "nanan";

// function palindromeChecker (string) {

//     // 1) Reverse method.
// //    const reversed = string.split("").reverse().join("");
// //     if (string === reversed) return true;

// //     return false;

// // 2) looping.

// let newString = "";

// // normalize string - keep only digits and alphabetic characters
// for (let char of string) {
//     if (char >= "a" && char <= "z" || !isNaN(char)) {
//         newString += char;
//     }
// }
// // convert to lowercase
// newString = newString.toLowerCase();

// let start = 0; 
// let end = newString.length-1; 

// // check for palindrome
//    while (start < end) {
//     if (newString[start] !== newString[end]) {
//         return false;
//     } 
//         start ++;
//         end --;
//    }
//    // if no mismatches, it returns true
//    return true;

// }
// console.log(palindromeChecker(string));


// Exercise 7: Largest Sum Subarray - Kadane's algorythm.
// Write a function that takes an array of numbers as input 
// and finds the contiguous subarray with the largest sum. Return the sum of that subarray.

// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// function kadanesAlgorythm(array) {

//     let maxSoFar = 0;
//     let currentMax = 0;

//     // Simple loop with conditional stamements.
//     for (let element of array) {
//         if (element > element + currentMax) {
//                 currentMax = element;
//         } else {
//             currentMax = element + currentMax;
//         }
       
//         if (maxSoFar > currentMax) {
//             maxSoFar = maxSoFar;
//         } else {
//             maxSoFar = currentMax;
//         }

//         // Using Math.max.
//         // currentMax = Math.max(element, element + currentMax)
//         // maxSoFar = Math.max(maxSoFar, currentMax);
//     }
//     return maxSoFar;
// }
// console.log(kadanesAlgorythm(array));

// Exercise 8: Missing Number
// Write a function that takes an array of numbers from 
// 1 to n, with one number missing, and returns the missing number.

// const arr = [1,2,4,5,6,7];

// function missingNum (arr) {
//     // compare numbers with next number. If difference is more than 1 return the curr num + 1;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//             return arr[i] + 1;
//         }
//     }
// }

// console.log(missingNum(arr));



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
//     pets {
//         cat: "Kicha",
//         dog: "Haku"
//     }
// }
// // stringified.
// // let stringed = JSON.stringify(obj);
// // let parsed = JSON.parse(stringed);
// // console.log(parsed === obj);

// // algorithm

// function deepClone(obj) {
//     // Base case: check for primitive values. 
//     if (typeof obj !== "object" || obj === null) {
//         return;
//     }
//     let clone;

//     // check for object type.
//        if (typeof obj === "object" && !Array.isArray(obj)) {
//         clone = {};
//        } else if (Array.isArray(obj)) {
//         clone = [];
//        }
    
//        for (let key in obj) {
//         let value = obj[key];

//         if (typeof value !== "object" && typeof value !== "function") {
//             clone[key] = value;
//         } else {
//             if (typeof value === "object" && value !== null) {
//                 clone[key] = deepClone(value)
//             }
//         }
//        }

//     return clone;
  
// }



// Exercise 10: Longest Common Prefix
// Write a function that takes an array of strings as input and finds the longest 
// common prefix among the strings. Return an empty string if there is no common prefix.



// let strings = ["geeksforgeeks", "geeks", "geek", "geezer"];

// function findLongestPrefix(arr) {

//     // check for empty array and single string;
//     if (arr.length === 0) {
//         return null;
//     } else if(arr.length === 1) {
//         return arr[0];
//     }

//     // initializing the prefix - assume the first element.
//     let prefix = arr[0];

//     // loop through the strings starting from second element
//     for (let i = 1; i < arr.length; i++) {
//         // compare curent prefix with each string in the array
//         for (let j = 0; j < prefix.length; j++) {
//             if (prefix[j] !== arr[i][j]) {
//                 // cut the prefix to the mismatched point and break out of loop
//                 prefix = prefix.slice(0, j);
//                 // if prefix becomes empty, meaning no common element is found and we return null
//                 if (prefix.length === 0) {
//                     return null;
//                 }
//                 break;
//             }
//         }
//     }
//     return prefix;

// }
// console.log(findLongestPrefix(strings));
