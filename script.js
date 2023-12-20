// 1) funqca, რომელიც გამოიძახება ღილაკზე დაკლიკებისას და უცვლისპა 
//რაგრაფს ფერს, თუ რას შემოიყვანს მოხმმა.

// const para = document.getElementById("text"); // ერთხელ ვიღებთ. რამდენჯერაც დავაკლიკებთ, იმდენჯერ იღებს.


// function changeColor () {
//     const color = prompt("Enter the color: ");
//     para.style.color = color;
// }

// რიცხვი მოვთხოვოთ მომხარებელს, და რამდენსაც შემოიტანს იმდენი სპანი შევქმნათ p თაგში. 
// სპანში უნდა ეწეროს რიცვხები მიმდევრობით (ერთიდან იუზერის რიცხვამდე);

// const number = parseInt(prompt("enter the number "));

// function generateNumbers () {

//     of (typeOf number === "number")
//     for (let i = 1; i <= number; i ++) {
//         const span = document.createElement("span");
//         span.textContent = i;

//         const para = document.createElement("p");
//         para.appendChild(span);

//         document.body.appendChild(para);

    
//     }

// }
// generateNumbers();

// 3) saitebis obieqtebis masivi. totoeul obieqts aqvs name da linki.

// davweroთ ფუნქცია, რომელიც შექმნის ახალ ელემენტებს და მათზე დაკლიკებისას  
// გადაამისამართებს ომხმას საიტზე.

// const webPages = {};

// function generateLinks() {

//     //for each;
    
//     webPages.forEach ((webPage) => {
//         for (let i = 0; i < webPage.length; i++ ) {
//             const anchor = document.createElement("a");
//             anchor.textContent = webPage.name;
//             anchor.href = webPage.link;
//         }
//     })

    // for of.

    // for (let i = 0; i < webPages.length; i++ ) {
    //     const anchor = document.createElement("a");
    //     anchor.textContent = webPages[i].name;
    //     anchor.href = webPages[i].link;

    //     // anchor.id = `link${i + 1}` -- მისცემს აიდიდებს 1-დან რამდენიცა იმდენს.
    //     document.body.appendChild(anchor);

    //   
    // }
// }
// generateLinks();

// let paragraph = document.querySelector(".bitcamp");
// console.log(paragraph);

// function changeElement ()
//  {
//     paragraph.textContent = "Hello Dom!"
//  }
//  changeElement();

// const button = document.querySelector(".button");

// function changeColor () {
//     Object.assign (button.style, {
//         backgroundColor: "red",
//         color: "white"
//     })
// }

// button.addEventListener("click",changeColor);
//-----

// const div = document.querySelector("div");

// function createElement () {
// const paragraph = document.createElement("p");
// paragraph.textContent = "New paragraph";
// div.append(paragraph)
// }

// createElement();

// console.log("p".parentElement)
// console.log(div.children[0])

// let paragraph = document.querySelector("p");
// paragraph.textContent = "bitcmap1"

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     alert("button crreated")
// })


