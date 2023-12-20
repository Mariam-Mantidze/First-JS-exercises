// Exercise 1: Palindrome Checker
// Write a program that prompts 
//the user for a string and checks if it is a palindrome.
// A palindrome is a word, phrase, number, or other sequence of 
//characters that reads the same backward as forward. Ignore spaces, 
//punctuation, and letter casing. Use conditional statements and loops to implement this behavior.



// function checkForPalindrome () {

  
//     // first method

//     let userInput = prompt("Enter a word to check if it is a palindrome.") 
        // check for valid input

        // if (userInput === "") {
        // userInput = prompt("Input can not be empty.")
        // }
//     // let processedInput = userInput.replace(/[\W_]/g, "").toLowerCase();
//     // let reversedInput = processedInput.split("").reverse().join("");

//     // return processedInput === reversedInput;

//     // loop-ით.

//     let processedInput = userInput.replace(/[\W_]/g, "").toLowerCase();

//     for (let i = 0; i < processedInput.length / 2; i++) { // because first half is the mirror of second half
//         if (processedInput[i] !== processedInput[processedInput.length - 1 - i]) {
//             return false;
//         }
//     } return true;

// }
// console.log(checkForPalindrome());





// Exercise 2: Fibonacci Sequence
// Write a program that prompts the user for a number and
// generates the Fibonacci sequence up to that number.
// The Fibonacci sequence is a series of numbers in which each 
//number is the sum of the two preceding ones. Use a loop and
// conditional statements to generate the sequence.

// function fibonacciSequence () {
//         let number = Number(prompt("Enter a number"));


//         if (number === null || number === "" || isNaN(number)) {
//             number = Number(prompt("Please enter a valid number."))
//         }

//         let fibonacciSequence = [0,1];

//         let nextNumber = fibonacciSequence[0] + fibonacciSequence[1]
//        while (nextNumber < number) {
//             fibonacciSequence.push(nextNumber);
//             nextNumber = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
            
            
//        }
//        return fibonacciSequence;

//     }

// console.log(fibonacciSequence());

// Exercise 3: Diamond Pattern
// Write a program that prompts the user for a number and prints a 
//diamond pattern using asterisks (*) and spaces. The number represents the 
//number of rows in the diamond (which should be odd). Use nested loops and 
//conditional statements to achieve this pattern.

// ამას მოვუბრუბდეთ 😭

//      *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *

// უკეთესი 

// function createDiamond(rows) {

//     if (rows % 2 == 0) {
//         return "invalid input, number must be odd."
//     } else {
//         let midRow = Math.ceil(rows / 2);
//         let diamond = "";

//         for (let i = 1; i <= rows; i++) {
//             let space = Math.abs(midRow - i);
//             let stars = rows - (2 * space);

//             let row = " ".repeat(space) + "*".repeat(stars);

//             diamond += row + "\n";
//         }
//         return diamond;
       
//     }

//   }
//   console.log(createDiamond(13));

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// spaces: asterisks
// 1 -> 3  // 1
// 2 -> 2  // 3
// 3 -> 1  // 5
// 4 -> 0  // 7
// 5 -> 1  // 5
// 6 -> 2  // 3
// 7 -> 3  // 1

     
  



// function diamond () {
    // let n = Number(prompt("Enter an odd number"));
    // if (n === "" || n % 2 === 0 || isNaN(n)) {
    //     n = Number(prompt("Please enter a valid number")); 
    // }

//     let diamond = "";
//     let space = (n - 1) / 2; // first amount of spaces with *.// FOR CENTERING

//     for (let i = 0; i < n / 2; i++) { // MIDDLE POINT
//         // console.log(i) //  // 6 გარე ლუპის იტერაცია
//         for (let j = 0; j < space; j++) { 
//            diamond += " "
//         //    console.log(j) // 6-ს აკლდება ყოველ ჯერზე სფეისი. იწყებს 0-დან 6-მდე, მერე 5-მდე და ა.შ. ბოლოს 0;
// ;        }
//         for (let j = 0; j < 2 * i + 1; j++) {
//             diamond += "*";
//             // console.log(j) //  ??
//         }
//         diamond += "\n"; // inner loop-ების იტერაციების შემდეგ ხდება.
//         space -= 1;
        
//     }
//     space = 1; // because we want odd number

//     for (let i = (n - 1) / 2 - 1 ; i >= 0; i--) {
//         for (let j = 0; j < space; j++) {
//             diamond += " ";
//         }
//         for (let j = 0; j < 2 * i + 1; j++) {
//             diamond += "*";
//         }
//         diamond += "\n"

//         space +=1;
//     } 

//     return diamond;
   

// }
// console.log(diamond());

// hash pattern

// function pattern () {
//     let hash = "#";
//     for (let i = 0; i < 7; i++) {
//         console.log(hash)
//         hash += "#";
        
//     }
// }
// pattern();


// chess board

// function chessBoard (size) {
    
//     let board = "";

//     for (let i = 0; i < size; i++) {
//         for (let j = 0; j < size; j++) {
//             if ((i + j) % 2 === 0) {
//                 board += " ";

//             } else {
//                 board += "#"
//             }
//         }
//         board += "\n";
//     }
//     return board
// }
// console.log(chessBoard(8));


// Exercise 4: Prime Number Generator
// Write a program that prompts the user for a range of numbers
// and generates all prime numbers within that range. Use a loop 
//and conditional statements to check if each number is prime and output the prime numbers.

// function primeChecker (number) {
//     if (number === 2 || number === 3) return true;
//     if (number < 2 || number % 2 === 0) return false;
    

//     for (let i = 3; i <= Math.sqrt(number); i += 2) {
//         if (number % i === 0) return false;
//     }
   
//     return true;
// }

// // console.log(primeChecker(11));

// function main () {
//     let n1 = Number(prompt("Please enter the first number for range"))
//         let n2 = Number(prompt("Please enter the last number for range"))
//     if (n1 > n2 || n1 === "" || n2 === "" || isNaN(n1) || isNaN (n2)) {
//         let n1 = Number(prompt("Please enter a valid number for range, first number should be smaller then second one."));
//         let n2 = Number(prompt("Please enter a valid number for range, second number should be bigger then first one."));
//     }

//     let primeNums = [];
//     for (let i = n1; i < n2; i++) {
//         if (primeChecker(i)) {
//             primeNums.push(i)
//         }
//     }
//     return primeNums;
// }

// console.log(main());


// Exercise 5: Guessing Game
// Write a program that generates a random number between 1 and 100 and
// lets the user guess the number. Provide feedback to the user, indicating whether
// the guessed number is too high or too low. Use a loop and conditional statements 
//to implement the game, allowing the user to keep guessing until they guess the correct number.

//     let number = Math.floor(Math.random() * 100) + 1;

//     let userGuess = Number(prompt("Guess the number between 1 and 100."));

//     while (userGuess !== number) {
//         if (userGuess === 0) {
//             alert("End of the game.");
//             return;
//         }
        
//         if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
//             userGuess = Number(prompt("Please enter a right number."));
//          }


//         if (number > userGuess) {
//             userGuess = Number(prompt("Number is too low"));
//         } else if (number < userGuess) {
//             userGuess = Number(prompt("Number is too high"));
//         } 
//     }
//     alert("Bingo! You have guessed it!")
// }
  

// console.log(guessingGame());






//// again 

// Exercise 2: Fibonacci Sequence
// Write a program that prompts the user for a number and
// generates the Fibonacci sequence up to that number.
// The Fibonacci sequence is a series of numbers in which each 
//number is the sum of the two preceding ones. Use a loop and
// conditional statements to generate the sequence.




// function fibonaciSequence(n) {

//     let sequence = [0, 1];

//     let nextNumber = sequence[0] + sequence[1];

//     while (nextNumber < n) {
//         sequence.push(nextNumber);
//         nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]
//     }
// return sequence
   
// }


// console.log(fibonaciSequence(30));




// Exercise 5: Guessing Game
// Write a program that generates a random number between 1 and 100 and
// lets the user guess the number. Provide feedback to the user, indicating whether
// the guessed number is too high or too low. Use a loop and conditional statements 
//to implement the game, allowing the user to keep guessing until they guess the correct number.


// function generateRandomNumber() {
//     const randomNumber = parseInt((Math.random() * 100) + 1);

//     let userNumber = parseInt(prompt("Guess the number"));


//     while (randomNumber !== userNumber) {
//         if (userNumber === null) {
//             alert ("end of game.")
//             return
//         }
//         if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
           
//             userNumber = parseInt(prompt("Please enter a valid number."))
//         }

//         if (userNumber > randomNumber) {
//             userNumber = parseInt(prompt("Number is too high"))
//         }
//         if (userNumber < randomNumber) {
//             userNumber = parseInt(prompt("Number is too low"));
//         }
//     }
//     alert ("You guessed it!")

// }



generateRandomNumber()


