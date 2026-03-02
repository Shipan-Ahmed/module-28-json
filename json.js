// jsonjson =  {
//         name: "json",
//         description: "A JSON parser and serializer.",
//         age: 10,
//         website: "https://www.json.org/",
//         license: "Various (e.g., MIT, Apache 2.0, etc.)",
//         languages: ["JavaScript", "Python", "Java", "C#", "Go", "Ruby", "PHP", "C++", "Rust", "Swift"],
// }

// console.log(jsonjson);
// console.log(typeof jsonjson);

// const josonStrding = JSON.stringify(jsonjson);
// console.log(josonStrding);
// console.log(typeof josonStrding);

// const josonParse = JSON.parse(josonStrding);
// console.log(josonParse);
// console.log(typeof josonParse);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
    .then((json) => console.log(json)); 
        console.log("This will log before the fetch response is received.");