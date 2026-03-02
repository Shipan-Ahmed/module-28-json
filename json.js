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

// class 3

const dataLoad = () => {
    // fetch returns a promise of response object -- request to the url
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        // promise of response object converted to json
        // server response is converted to json data
        .then((response) => response.json())
        // promise of json data
        // show the json data for client
      .then((json) => console.log(json));
}

// const dataPost = () => {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     const data = fetch(url);
//     data.then((response) => response.json())
//     .then((json) => displayData(json));
// }


// const displayData = (posts) => {
//     posts.forEach( post => console.log(post));
// }