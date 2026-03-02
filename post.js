
const dataPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
    
    .then(json => Display(json));
}

const Display = (posts) => {
    const postCantainer = document.getElementById("post-container");
    postCantainer.innerHTML = "";
    posts.forEach(post => {
        console.log(post);
        const div = document.createElement("div");
        div.innerHTML = `
        <div id="postContent">
            <h1 class="title">${post.title}</h1>
            <p> ${post.body} </p>
        </div>
        `;

        postCantainer.append(div);
    })

}