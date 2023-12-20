// let user = {
//     name: "mariam",
//     age: 20
// }

// const {name, age} = user;

// console.log(name, age)

// const profile = {
//     name: "mariam",
//     age: 26,
//     hobby: "move",
//     email: "mariam.mantidze@gmail.com"
// }

// const {name,age} = profile;

// console.log(`I am ${age} years old`)

// function sayMyName ({name, age}) {
//    console.log(name + " " + age)

// }
// sayMyName(profile)

// let greeting = {
//     text1: "hello ",
//     text2: "world"
// }

// const {text1, text2} = greeting;

// console.log(text1+ text2);

// const {text1: first, text2: second} = greeting

// console.log(first)


let obj = {
    name: "mariam",
    hobbies: {
        first: "yoga",
        second: "reading",
        third: "sport"
    }
}

// // const {hobbies} = obj; // ობჯში ჩავწვდით მეორე ობჯს.

// // const {second} = hobbies; // ობჯში ჩავწვდით მეორე ობჯის ქის და შევინახეთ ცვლადში.
// // console.log(second)

// const {hobbies: {second} } = obj;
// console.log(second);

// const {name, ...details} = obj; // aნ details.hobbies - დაგვიბრუნებდა ჰობის.
// // console.log(details);

// const {hobbies} = details;
// console.log(hobbies)
