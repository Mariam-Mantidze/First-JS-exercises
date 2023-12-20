/*
Exercise 1: Changing Text Content
Create an HTML page with a <p> element. Write a JavaScript function that, when called, changes the text content of the <p> element to "Hello, DOM!".
*/
// function changeParagraph () {
//     let paragraph = document.querySelector("p");
//     paragraph.textContent = "Hello Dom!"
// }
// changeParagraph();


/*
Exercise 2: Changing Styles
Create an HTML page with a <button> element.
Write a JavaScript function that, when called, changes
the background color of the <button> to red and the text color 
to white.
*/
// პირველი მცდ.
// const button = document.querySelector("button");

// function changeColors () {
//     button.style.backgroundColor = "red";
//     button.style.color = "white";

// }

// ობჯექთ ესაინით.

// function changeColors () {
//     Object.assign (button.style, {
//         backgroundColor: "red",
//         color: "white"
//     });
// }

// ივენთლისენერი

// const button = document.querySelector("button");
// button.addEventListener("click", changeColors);

/*
Exercise 3: Creating Elements
Create an HTML page with an empty <div> element. 
Write a JavaScript function that, when called, creates a
 new <p> element with the text content "New paragraph" and
 appends it as a child to the <div>.
*/

// const div = document.querySelector("div");

// function addParagraph () {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = "new paragraph";
//     div.appendChild(paragraph);

// }
// addParagraph();

//4) Exercise 4: Event Handling
//Create an HTML page with a <button> element.
// Write a JavaScript function that, when the button is 
//clicked, displays an alert with the message "Button clicked!".

// const button = document.querySelector("button");

// function buttonMessage () {
//     alert ("Button Clicked!");
    
// };

/* Exercise 5: Form Validation
Create an HTML page with a <form> element containing an input field and a 
submit button. Write a JavaScript function that, when the form is submitted, 
validates the input field. If the input is empty, display an error message 
next to the input field. If the input is not empty, display an alert with the 
message "Form submitted!" */

// const form = document.querySelector("#form");
// const input = document.querySelector("#userInput");

// function validateInput () {

//     let existingError = document.querySelector(".errorMessage");

//     if (input.value !== "") {
//         input.value = "";
//         alert ("Submitted!")

//         if (existingError) {
//             existingError.remove();
//         } 
//     } else {
//         if (!existingError) {
//             const errorMessage = document.createElement("p");
//             errorMessage.textContent = "error"
//             errorMessage.style.color = "red",
//             errorMessage.classList.add("errorMessage");
//             form.appendChild(errorMessage);
//         }
//     }
    

// }

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     validateInput();
// });

/*
6) Dynamic List Management - დინამიური სიის მართვა
შექმენით HTML გვერდი ul ელემენტით და input ველით,
 ღილაკთან ერთად "Add Item". დაწერეთ JavaScript ფუნქცია, 
 რომელიც ღილაკზე დაჭერით მომხმარებლებს საშუალებას აძლევს დაამატონ
  ინფუთში ჩაწერილი ტექსტი სიაში. ყველა ტექსტს გვერდზე უნდა ჰქონდეს 
  ასევე X ღილაკი, რომელზე დაჭერითაც შესაბამისი ტექსქტი წაიშლება.
*/


// const list = document.querySelector("#list");
// const userInput = document.querySelector("#inputField");
// const button = document.querySelector("#submitButton");

// function addListItem () {
//     const userInput = inputField.value;

//     if (userInput !== "") {
//         const listItem = document.createElement("li");
//         listItem.textContent = userInput;

//         const removeButton = document.createElement("button");
//         removeButton.textContent = "X";
//         listItem.appendChild(removeButton);
//         removeButton.addEventListener("click", function () {
//             list.removeChild(listItem);
//         })

//         list.appendChild(listItem);
//         inputField.value = "";
    
//     }
   
// }

// addEventListener("click", addListItem);


// ხელახლა

/*
1)Changing Text Content - ტექსტის შეცვლა
შექმენით HTML გვერდი p ელემენტით. 
დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას ცვლის p 
ელემენტის ტექსტურ შინაარსს "Hello, DOM!"-ით.
*/

// const paragraph = document.querySelector("p");

// function changeParagraph () {
//     paragraph.textContent = "Hellom, Dom!"
// }
// changeParagraph();

/*
2) Changing Styles - სტილის შეცვლა
შექმენით HTML გვერდი button ელემენტით.
დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას ცვლის
 button-ის ფერს წითლად და ტექსტის ფერს თეთრად.
*/

// const button = document.querySelector(".button")

// function changeButton () {
//     // button.style.backgroundColor = "red";
//     // button.style.color = "white

//     // mეორე ვერსია

//     Object.assign(button.style, {
//         backgroundColor: "red",
//         color: "white"
//     })

// }
// button.addEventListener("click", changeButton)

/*
3) Creating Elements - ელემენტების შექმნა
შექმენით HTML გვერდი ცარიელი div ელემენტით. დაწერეთ JavaScript ფუნქცია,
 რომელიც გამოძახებისას ქმნის ახალ p ელემენტს ტექსტით "ახალი აბზაცი" და
  სვავს div-ში როგორც მის შვილ ელემენტს.
*/

// const div = document.querySelector("div")

// function createParagraph () {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = "new text"
//     div.appendChild(paragraph)

// }
// createParagraph();


/*
4) Event Handling
შექმენით HTML გვერდი button ელემენტით. დაწერეთ JavaScript ფუნქცია,
 რომელიც ღილაკზე დაწკაპუნებისას აჩვენებს გაფრთხილებას შეტყობინებით "ღილაკზე დაწკაპუნება!".
*/

// const button = document.querySelector(".button")

// button.addEventListener("click", () => alert("button clicked!"));


/*
5) Form Validation - ფორმის ვალიდაცია
შექმენით HTML გვერდი form ელემენტით, რომელიც შეიცავს ტექსტის
 შესაყვან ველს და გაგზავნის ღილაკს. დაწერეთ JavaScript ფუნქცია, 
 რომელიც ფორმის გაგზავნისას ამოწმებს შესაყვან ველს. თუ ველი ცარიელია,
აჩვენეთ შეცდომის აღმნიშვნელი შეტყობინება შესაყვანი ველის გვერდით. თუ ველი 
ცარიელი არ არის, აჩვენეთ გაფრთხილება შეტყობინებით "ფორმა გაგზავნილია!".


*/

// const userInput = document.querySelector("#userinput");
// const button = document.querySelector("#button");
// const form = document.querySelector("#submitForm");
// const error = document.querySelector("p")

// function checkInput () {
//     if (userInput.value === "") {
//         Object.assign(error.style, {
//             display: "inline-block",
//             color: "red"
//         })
//         } else {
//             userInput.value = "";
//             alert ("Form Submitted!");
//             error.style.display = "none";
          
//         }
//     }

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     checkInput();
// })
   

/*
6) Dynamic List Management - დინამიური სიის მართვა
შექმენით HTML გვერდი ul ელემენტით და input ველით, 
ღილაკთან ერთად "Add Item". დაწერეთ JavaScript ფუნქცია,
 რომელიც ღილაკზე დაჭერით მომხმარებლებს საშუალებას აძლევს დაამატონ 
 ინფუთში ჩაწერილი ტექსტი სიაში. ყველა ტექსტს გვერდზე უნდა ჰქონდეს ასევე X ღილაკი,
  რომელზე დაჭერითაც შესაბამისი ტექსქტი წაიშლება.
*/

// const list = document.querySelector("#list");
// const userInput = document.querySelector("#input");
// const button = document.querySelector("button");

// function addListItem () {

//     const inputValue = userInput.value;

//     if (inputValue !== "") {
//         const listItem = document.createElement("li");
//         listItem.textContent = inputValue;

//         const removeButton = document.createElement("button");
//         removeButton.textContent = "X";
//         removeButton.addEventListener("click", () => {
//             list.removeChild(listItem);
//         })
//         listItem.appendChild(removeButton);


//         list.appendChild(listItem);
//         userInput.value = "";
//     }
  

// }
// button.addEventListener("click", addListItem);


// ხელახლა მეხუთე და მეექვსე.

/*
5) Form Validation - ფორმის ვალიდაცია
შექმენით HTML გვერდი form ელემენტით, რომელიც შეიცავს ტექსტის 
შესაყვან ველს და გაგზავნის ღილაკს. დაწერეთ JavaScript ფუნქცია,
 რომელიც ფორმის გაგზავნისას ამოწმებს შესაყვან ველს. თუ ველი ცარიელია,
აჩვენეთ შეცდომის აღმნიშვნელი შეტყობინება შესაყვანი ველის გვერდით.
თუ ველი ცარიელი არ არის, აჩვენეთ გაფრთხილება შეტყობინებით 
"ფორმა გაგზავნილია!".
*/

// const form = document.querySelector("#form");
// const userInput = document.querySelector("#userInput");
// const button = document.querySelector("#submitButton");
// const errorMessage = document.querySelector("#errorMessage");



// function validateInput () {
//     if (userInput.value == "") {
//         Object.assign(errorMessage.style, {
//             display: "block",
//             color: "red"
//         })
//     } else {
//         userInput.value = "",
//         alert("form subbmited!")

//     }
// }

// form.addEventListener("submit", (event) => {
//     event.preventDefault(), 
//     validateInput();
// });


/* 6)
Dynamic List Management - დინამიური სიის მართვა
*/

// const list = document.querySelector("#list");
// const userInput = document.querySelector("#userInput");
// const button = document.querySelector("#submitButton")

// function addToList () {
//     inputValue = userInput.value;

//     if (inputValue !== "") {
//        const listItem = document.createElement("li");
//        listItem.textContent = inputValue;

//        const removeButton = document.createElement("button");
//        removeButton.textContent = "X";

//        removeButton.addEventListener("click", () => {
//         list.removeChild(listItem)
//        })

//        list.appendChild(listItem);
//        listItem.appendChild(removeButton);

//        userInput.value = "";
        
//     }
// }

// button.addEventListener("click", addToList);

// again 5-6.


/*
5) Form Validation - ფორმის ვალიდაცია
შექმენით HTML გვერდი form ელემენტით, რომელიც შეიცავს ტექსტის 
შესაყვან ველს და გაგზავნის ღილაკს. დაწერეთ JavaScript ფუნქცია,
 რომელიც ფორმის გაგზავნისას ამოწმებს შესაყვან ველს. თუ ველი ცარიელია,
აჩვენეთ შეცდომის აღმნიშვნელი შეტყობინება შესაყვანი ველის გვერდით.
თუ ველი ცარიელი არ არის, აჩვენეთ გაფრთხილება შეტყობინებით 
"ფორმა გაგზავნილია!".
*/

// const userInput = document.querySelector("input");
// const errorMessage = document.querySelector("p");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// function validateInput () {
//   if (userInput.value === "") {
//      Object.assign (errorMessage.style, {
//       display: "inline",
//       color: "red"
//      })
//   } else {
//     alert ("Form subbmited!");
//     userInput.value = "";
//   }

// }
// form.addEventListener("submit", (event) => {
//   event.preventDefault(),
//   validateInput();
// })

/* 6)
Dynamic List Management - დინამიური სიის მართვა
შექმენით HTML გვერდი ul ელემენტით და input ველით,
 ღილაკთან ერთად "Add Item". დაწერეთ JavaScript ფუნქცია,
რომელიც ღილაკზე დაჭერით მომხმარებლებს საშუალებას აძლევს
დაამატონ ინფუთში ჩაწერილი ტექსტი სიაში. ყველა ტექსტს გვერდზე
უნდა ჰქონდეს ასევე X ღილაკი, რომელზე დაჭერითაც შესაბამისი ტექსქტი 
წაიშლება.
*/

// const list = document.querySelector("ul");
// const button = document.querySelector("button");
// const userInput = document.querySelector("input");


// function addElement () {
//     const inputValue = userInput.value;

//     if (inputValue !== "") {
//       const listItem = document.createElement("li");
//       listItem.textContent = inputValue;
//       const removeButton = document.createElement("button");

//       removeButton.textContent = "X";
//       removeButton.addEventListener("click", () => {
//         list.removeChild(listItem)
//       })

//       listItem.appendChild(removeButton);
//       list.appendChild(listItem)
//       userInput.value = "";

//     }


// }
// button.addEventListener("click", addElement);





/// ხელახლა

//4) Exercise 4: Event Handling
//Create an HTML page with a <button> element.
// Write a JavaScript function that, when the button is 
//clicked, displays an alert with the message "Button clicked!".


// const button = document.querySelector("button");


// button.addEventListener("click", () => alert("button clicked!"));

/*
5) Form Validation - ფორმის ვალიდაცია
შექმენით HTML გვერდი form ელემენტით, რომელიც შეიცავს ტექსტის
 შესაყვან ველს და გაგზავნის ღილაკს. დაწერეთ JavaScript ფუნქცია, 
 რომელიც ფორმის გაგზავნისას ამოწმებს შესაყვან ველს. თუ ველი ცარიელია,
აჩვენეთ შეცდომის აღმნიშვნელი შეტყობინება შესაყვანი ველის გვერდით. თუ ველი 
ცარიელი არ არის, აჩვენეთ გაფრთხილება შეტყობინებით "ფორმა გაგზავნილია!".

*/

// const button = document.querySelector("button");
// const input = document.querySelector("input");
// const errorMessage = document.querySelector("p")
// const form = document.querySelector("form")

// function formValidation() {
//   if (input.value === "") {
//     errorMessage.style.display = "inline-block";
//     errorMessage.style.color = "red";
//   } else {
//     input.value = "";
//     errorMessage.style.display = "none";
//     alert("Form submitted!")
    
//   }
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   formValidation()
// })


/* 6)
Dynamic List Management - დინამიური სიის მართვა
შექმენით HTML გვერდი ul ელემენტით და input ველით,
 ღილაკთან ერთად "Add Item". დაწერეთ JavaScript ფუნქცია,
რომელიც ღილაკზე დაჭერით მომხმარებლებს საშუალებას აძლევს
დაამატონ ინფუთში ჩაწერილი ტექსტი სიაში. ყველა ტექსტს გვერდზე
უნდა ჰქონდეს ასევე X ღილაკი, რომელზე დაჭერითაც შესაბამისი ტექსქტი 
წაიშლება.
*/


// let button = document.querySelector("button");
// let input = document.querySelector("input");
// let list = document.querySelector("ul");

// function addItem() {

//   let inputValue = input.value;

//   if (inputValue !== "") {
//     const listItem = document.createElement("li")
//     listItem.textContent = inputValue;

//     const removeButton = document.createElement("button");
//     removeButton.textContent = "X";

//     list.appendChild(listItem);
//     listItem.appendChild(removeButton);

//     removeButton.addEventListener("click", () => list.removeChild(listItem));
//     input.value = "";
//   }

  
// }

// button.addEventListener("click", addItem);









