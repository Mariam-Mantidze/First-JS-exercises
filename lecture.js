// ფუნქცია ქოლბექებით დაფრომისით.

// function equalsCheck(succesCallBack, errorCallBack) {
//     if (1+1 === 2) {
//         successCallBack("equals")
//     } else {
//         errorCallBack("Does not equal");
//     }
// }

// equalsCheck(
// (message) => {
//     console.log("Success:", message);
// }, 
// (message) => {
//     console.log("Failed:", message);
// }

//promise-თი.

// function equals() {
//     return new Promise((resolve, reject) => {
//         if (1 + 1 === 3) {
//             resolve("Equals");
//         } else {
//             reject("Does not equal")
//         }

//     });
// }

// equals().then((message) => {
//     console.log("Success:", message);
// })
// .catch((error) => {
//     console.log("Failed:", error);
// });

// oრი ფრომისი. პირველი არესოლვებს რიცხვს, მეორე ამრავლებს პირველის დარეზოლვებულ რიცხვს ორზე. ორი ფრომისი უნდა გდავაბათ ერთმანეთს.
// promise chaining ასინქრონულ პროგრამირებაში.

// function promiseOne () {
//     return new Promise (resolve => {
//         resolve(5)
//     })
// }

// function promiseTwo (number) {
//     return new Promise((resolve, reject) => {
//        resolve(number * 2)
//     })
// }

// promiseOne().
// then((result) => promiseTwo(result))
// .then((finalResult) => {
//     console.log(finalResult)
// })
// .catch((error) => {
//     console.log(error)
// });

// დავწეროთ პროგრამა რომელიც 2 წამის მერე სრულდება, ითვლის 1-დან 10-მდე და შემდეგ ფეტჩს აკეთებს გიტჰაბის იუზერ დეიტას.

// async function getGitHubUser (user) {
//     const response = await fetch(`https://api.github.com/users/${user}`)
//     const data = await response.json();
//     console.log(data);
// }

// function mainFunction () {
//     let counter = 0;

//   let interval =  setInterval((async) => {
//         counter++;
//         console.log(counter)

//         if (counter >= 10) {
//             clearInterval(interval);
//             getGitHubUser("otarza"); // console.log(await userPromise)
//         }

//     }, 100);
//     // clearInterval(interval) // ეს უფრო მალე შლის, vიდრე ემატება.

// }
// setTimeout(mainFunction, 2000) // 2 წამის მერე გაეშება


// async function getData () {
//     const response = await fetch(`https://api.github.com/users/temuritsutskiridze`);
//     const data = await response.json();
//     console.log(data)
//     console.log("Hello")
// }
// getData();

// oრი ფეტჩი კეთდება და და პრინტავს როცა დაიფეჩება.

// const fetchData1 = fetch(`https://api.github.com/users/temuritsutskiridze`)
// const fetchData2 = fetch(`https://api.github.com/users/otarza`)

// Promise.all([fetchData1, fetchData2 ]).then((responses) => {

//     return Promise.all(responses.map(response => response.json()))
//     .then(data => console.log(data))
// })

// სამი ფეჩი უნდა ავაკეთოთ სხვადასხვა ინფოზე და გამოპრინტოს მხოლოდ ის, რომელიც პირველად მოვა.

// const apiURLS = [
//     "https://api.github.com/users/temuritsutskiridze",
//     "https://api.github.com/users/otarza",
//    "https://api.github.com/users/goldenchord"

// ]

// function fistestData () {
//     const promises = apiURLS.map((url) => 
//     fetch(url).then((response) => response.json()));


//     return new Promise((resolve, reject) => {
//         Promise.race(promises)
//         .then(fastest => {
//             resolve(fastest);
//         })
//         .catch((error) => {
//             reject(error);
//         })
//     })
// }

// fistestData()
// .then((data) =>  { 
//     console.log 
//     ("fastest API response", data);
// }).catch(error => {
//     console.log("error while catching data")
// });

// fetch("https://api.github.com/users/temuritsutskiridze").then(response => response.json()); // ertis amogeba



// დავფეჩოთ სრამდენიმე დატა ერთდროულად

// const fetchData1 = fetch('https://api.github.com/users/goldenchord1');
// const fetchData2 = fetch('https://api.github.com/users/otarza');

// Promise.all([fetchData1,fetchData2]).then((responses) => {
//     return Promise.all(responses.map(response => response.json()))
// }).then((data) => {
//     console.log(data)
// })


// სამი სხვადასხვა ფეჩი და დაპვრინტოთ ის, რომელიც ყველაზე ჩქარა დაბრუნდება.


const apiURLS = [
   'https://api.github.com/users/goldenchord1',
   'https://api.github.com/users/goldenchord',
   'https://api.github.com/users/otarza'
]

function fetcFastest () {
    const promises = apiURLS.map(url => 
    fetch(url).then(response => response.json()).then(data => console.log(data))
    )
    return new Promise((resolve, reject) => {
        Promise.race(promises).then(fastestData => {
            resolve(fastestData)
        })
        .catch(error => {
            reject(error)
        } )
    })
}

fetcFastest().then(data =>{
    console.log("fastest API Response", data)
}).catch(error => {
    console.error("error while fetching data", error)
})






