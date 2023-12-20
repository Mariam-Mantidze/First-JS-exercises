/* Write a JavaScript function that accepts two arguments, 
a string and a letter and the function will count the number 
of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o'
Expected output : 2 */

// const string = "hello my name is elene";

// function findElement (string, letter) {
// //     // with loop.
//     let count = 0;
//     for (let char of string) {
//         if (char === letter) {
//             count++;
//         }

//     }
//     return count;

    // Using reduce.

//     let array = string.split("");

//     let elementCount = array.reduce((acc, curr) => {
//         if (curr === letter) {
//         return acc + 1; 
//     } else {
//         return acc;
//     }

// }, 0)
  
//     return elementCount;
// }

// console.log(findElement(string, "e"));

/*
Write a JavaScript function to apply the Bubble Sort algorithm.

// */
// const array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

// function bubbleSort (arr) {

//     with nested for loop. 
    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = 0; j < arr.length - i; j++) {
    //         if (arr[j] > arr[j + 1]) {
    //             let temp = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = temp;
    //         }
    //     }

    // }
    // return arr;

//     // with do-while;

//     let swapped;
//     let n = arr.length;
//     do {
//         swapped = false;
//         for (let i = 0; i < n - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//          n--; // უკვედა დასორტილები ხელახლა რომ აღარ გაიაროს.

//     } while (swapped);
//     return arr;
// }

// console.log(bubbleSort(array));

/*
3) Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
*/

// const countries = ["Australia", "Germany", "United States of America"];
// function checkLongestCountry (array) {

//     // for of-ით.
//     let longest = "";

//     for (let country of array) {
//         if (country.length > longest.length) {
//             longest = country;
//         }
       
//     }
//     return longest;

    // reduce-თი.

    // return array.reduce((longest, currentCountry) => longest.length > currentCountry.length ? longest : currentCountry);

// }
// console.log(checkLongestCountry(countries));

/*
4) 
Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4;
*/

// let numbers = [1,2,3,4,5];

// function secondNumbers (array) {

//    let sorted = array.sort((a, b) => a - b);
//    return [sorted[1], sorted[sorted.length - 2]];

// }

// console.log(secondNumbers(numbers));

/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

// let sentence = "sneaky little snake";

// function capitalizeWords (string) {
//     let arrayed = string.split (" ");
//     return arrayed.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
// }
// console.log(capitalizeWords(sentence));

/* 6) Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
*/

// let word = "paper";

// function sort (string) {
//     let splitted = string.split("");
//     return splitted.sort().join("");

// }
// console.log(sort(word));

// /* 7) Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
// // */
// const word = "dog"
// function combine(string) {
//     let combinations = [];

//     for (let i = 0; i < string.length; i++) {
//         for (let j = i; j < string.length; j++) {
//             combinations.push(string.slice(i, j + 1))
//         }
//     }
//     return combinations;
// }

// console.log(combine(word));

// // miubrundi
    



// /*
// 8) Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
// */

// const string = "aabcdcddmm";

// function findNonRepeatedChar (string) {
//     let count = {};

//     for (let char of string) {
//       count[char] = (count[char] || 0) +1;
//     }

//     for (let char of string) {
//       if (count[char] === 1) {
//         return char;
//       }
//     }
//     return undefined;

// }
// console.log(findNonRepeatedChar(string));

// ხელახლა/

// Write a JavaScript function that accepts two arguments, a 
//string and a letter and the function will count the number of occurrences of the specified letter within the string.
/*Sample arguments : 'w3resource.com', 'o'
Expected output : */

// const string = "how many times is o occur";

// function findOccurences (string, letter) {
//     // let count = 0;

//     // for (char of string) {
//     //     if (char === letter) {
//     //         count ++;
//     //     }
//     // }
//     // return count;

//     // reduce.

//     let arrayOfString = string.split("");

//     // return arrayOfString.filter(letter => letter === letter).reduce((count, char) => count + char).length;

//     // better.

//     return arrayOfString.reduce((count, char) => char === letter ? count + 1 : count, 0) // შეგვიძლია ორივე ჯერზე if-ის თრუ და ფოლსიც დავარეთარნოთ ქაუნთი. (curr)
// }
// console.log(findOccurences(string,"o"));

/*
Write a JavaScript function to apply the Bubble Sort algorithm.
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/

// let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
// function bubbleSort (array) {
//     let swapped;
//     let n = array.length;
//     do {
//         swapped = false;
//         for (let i = 0; i < n; i++) {
//                 if (arr[i] > arr[i + 1]) {
//                     let temp = arr[i]; // banana
//                     arr[i] = arr[i + 1]; // apple = banana
//                     arr[i + 1] = temp; // apple = banana;
//                     swapped = true;
//                 }
            
//             }
           
//         } while (swapped)
//         return arr;

// } 


// console.log(bubbleSort(arr));


/*
Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
*/ 
// const countries = ["Australia", "Germany", "United States of America"];

// function longestCountryName (arr) {

//     return arr.reduce((longest, currentCountry) => longest.length > currentCountry.length ? longest : currentCountry);


// }
// console.log(longestCountryName(countries));

/*
Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/

// const array = [1,2,3,4,5];

// function secondNumber (arr) {
//     let sorted = arr.sort((a, b) => a - b);

//     return [arr[1], arr[arr.length - 2]];

// }
// console.log(secondNumber(array));


/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/
// const string = 'the quick brown fox';

// function capitaliZeWords (string) {
//     let splitted = string.split(" ");

//     return splitted.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

// }
// console.log(capitaliZeWords(string));

/*
Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'

*/
// const string = "webmaster";

// function sortString (string) {
//     let splitted = string.split("");
//     return splitted.sort().join("")

// }
// console.log(sortString(string));

/*
Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
*/


// const string = 'dog';

// function combinator (string) {
//     let comb = [];
//     let n = string.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             comb.push(string.slice(i, j + 1))
//         }
//     }
//     return comb;

// }
// console.log(combinator(string));

/*
Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
*/

// const string = "aabbhhji";

// function findFirstUniqueChar (string) {
//   let count = {};

//   for (let char of string) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   for (let char of string) {
//     if (count[char] === 1) {
//         return char;
//     }
//   }
//   return undefined;

// }
// console.log(findFirstUniqueChar(string,));


// mეორე ვერსია

// function findFirstUniqueChar (string) {
//     for (let char of string) {
//         if (string.indexOf(char) === string.lastIndexOf(char)) {
//             return char;
//         }
//     } return undefined;
  
//   }
//   console.log(findFirstUniqueChar(string,));



// ხელახლა

/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

// let string = 'the quick brown fox';

// function firstLetterToUpperCase(string) {
//     string = string.split(" ");

//     return string.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

    
// }

// console.log(firstLetterToUpperCase(string));

/*
Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
*/
// const string = 'abacddbec';

// function firstNotRepeatedCharacter (string) {
//     let trackerObj = {};

//     for (let char of string) {
//             trackerObj[char] = (trackerObj[char] || 0) + 1;
//     }
//     for (let char of string) {
//         if (trackerObj[char] === 1) {
//             return char;
//         }
//     }
   
  
// }

// console.log(firstNotRepeatedCharacter(string));

// ----------- again

// /* 7) Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// let string = "dog"; // d, o;

// function combinationOfString(string) {

   
//     let comb = []

//     for (let i = 0; i < string.length; i++) {
//         for (let j = i; j < string.length; j++) {
//               comb.push(string.slice(i, j + 1))
//         }
//     }
//     return comb;

// }
// console.log(combinationOfString(string))



  



