const dataToDo = async () => {
    // fetch returns a promise of response object -- request to the url
    const url = "https://dummyjson.com/todos";
  const res = await fetch(url);
    // promise of response object converted to json
    // server response is converted to json data
      // .then((response) => response.json())
      const json = await res.json();
    // promise of json data
    // show the json data for client
    // .then((json) => console.log(json));
    DisplayToDo(json);
};


const DisplayToDo = (data) => {
    const postCantainer = document.getElementById("toDo-list");
    postCantainer.innerHTML = "";
    data.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = `
        
            <h1 class="title">${element.todo}</h1>
            <p> ${element.completed} </p>
        `;
        postCantainer.append(li);
    });
}
