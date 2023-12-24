
//Create a function that always returns true for every item in a 
//given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.


// function flick(array) {
//     let flick = true;
//   return array.map((el) => {
//     if (el === "flick") {
//         flick = !flick;
//     }

//     if (flick) {
//         return true;
//     } else {
//         return false;
//     }
//   })
// }

// console.log(flick(["bibi", "jarmonu", "flick", "sheep", "flick", "smyh"]));


// pangram checker

// function isPangram (string) {
//     string = string.toLowerCase();
//     let alphabet = ["a","b","c"]

//     for (let char of string) {
//         if (!alphabet.includes(char)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPangram("the quick brown fox jumps over the lazy dog"))

// meorenairad. anbanze gavcxrilot

// function isPangram (string) {
//     string = string.toLowerCase();
//    let newString = "";

//    for (let char of string) {
//         if (char >= "a" && char <= "z") { // ან && !newString.includes(char) და სეტი აღარ გვინდა.
//             newString += char;
//         }

        
            
//         // if (newString.length === 26) {
//         //     return true;
//         // } else {
//         //     return false;
//         // }
//    } 

//    let charSet = new Set(newString);

//    return charSet.size === 26;
    
// //    return newString;

    
// }

// console.log(isPangram("Theeee quick brown fox jumps over the lazy dog"));


// regex-ით;


// function isPangram (string) {
//     string = string.toLowerCase();
//    let newString = string.replace(/[^a-zA-Z]/g, "")

//  console.log(newString);

    

//    let charSet = new Set(newString);

//    return charSet.size === 26;
    
// //    return newString;

    
// }

// console.log(isPangram("The&%^ quick brown fox jumps over the lazy dog"));


// bubble sort.

// // normal sort with sort method.
// let arr = [1,6,8,55,8,6,66,4,22,4]
// // function  bubbleSort (array) {
// //         return array.sort((a, b) => a - b);
// // }



// function bubbleSort(arr) {
//     let n = arr.length;

//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) { // დააკლდება ყოველ ჯერზე ბოლო ელემენტი, რომ ზედმ. შედარებები ავიცილოთ თავიდან.
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;

     // with destructurization

// [arr[j], arr[j +1]] = [[j + 1], arr[j]]
//             }
//         }
//     } 
//     return arr;
// }

// console.log(bubbleSort(arr));



// insertion sort.

// let arr = [1,6,8,55,8,6,66,4,22,4]

// function indertionSort(arr) {

//     for (let i = 0; i < arr.length - 1; i++) {
//         let biggest = arr[0];
//         let index = 0;
//         for (let j = 1; j < arr.length - 1 - i; j++) {
//             if (arr[j] > biggest) {
//                 biggest = arr[j];
//                 index = j;
//             }
//         }
//        let temp = arr[arr.length - i - 1];
//        arr[arr.length - i - 1] = biggest;
//        arr[index] = temp;
//      }


// }
// console.log(indertionSort(arr));


// swap with destructurisation.

// let a = 5;
// let b = 10;

// [b, a] = [a, b]

// console.log(a, b)


// quick sort

function quickSort(arr) {
     if (arr.length <= 1) {
          return arr;
     }

     const pirovtIndex = Math.floor(arr.length / 2);
     const pivot = arr[pirovtIndex];

     let left = [];
     let right = [];

     for (let i = 0; i < arr.length; i++) {
          if (arr[i] === pivot) {
               continue;
          }
          
          if (arr[i] > pivot) {
               right.push(arr[i]);
          } else {
               left.push(arr[i]);
          }
     }
     return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([9, -3, 5, 2, 6, 8, -6, 1, 3]));









