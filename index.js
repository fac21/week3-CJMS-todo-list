
const addButton = document.querySelector("#add-button");
const newTodo = document.getElementById("new-to-do");
const taskList = document.getElementById("task-list");
let counter = 0;

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    if(newTodo.value === "") {
        alert("You must add a task!");
    } else {
        counter++;
        submitTask();
    }
});

function submitTask() {
    let temp = document.getElementsByTagName("template")[0];
    let docFrag = temp.content.cloneNode(true); //makes a clone of template 
    docFrag.querySelector("label").textContent = newTodo.value; //add label
    docFrag.querySelector("input").id = "checkbox" + counter; //add unique id 
    docFrag.querySelector("label").htmlFor = "checkbox" + counter;
    docFrag.querySelector(".deleteBtn").addEventListener("click", (event) => {
    event.target.parentElement.remove();
    })
    
    var label = docFrag.querySelector("label")
    let checkbox = docFrag.querySelector("input")
    checkbox.addEventListener('change', () => {
        if (checkbox.checked){
            label.style.textDecoration = "line-through"
        } else {
            label.style.textDecoration = "none"
        }
    })
    
    taskList.appendChild(docFrag);
    document.querySelector("#new-to-do").value = "";

}

//Image API

window.addEventListener("load", () => {
        let randomNum = Math.floor(Math.random() * 10);
        fetch(`https://api.unsplash.com/photos/random?query=landscape&client_id=mtXzGZBpq9Gzv9wHdPMec37TIy6h6ZVclhfkxVRvygY&orientation=portrait`)
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                return response.json()
            })
            .then((data) => {
                document.querySelector('.bg-image').src = data.urls.regular;
            })
            .catch((error) => console.log(error));
});
