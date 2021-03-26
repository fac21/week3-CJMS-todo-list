const addButton = document.querySelector("#add-button");
const newTodo = document.querySelector("#new-to-do");
const taskList = document.querySelector("#task-list");
let temp = document.getElementsByTagName("template")[0];
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
    let docFrag = temp.content.cloneNode(true); //makes a clone of template 
    let label = docFrag.querySelector("label")
    let inputTxt = docFrag.querySelector("input")
    label.textContent = newTodo.value; //add label
    inputTxt.id = "checkbox" + counter; //add unique id 
    label.htmlFor = "checkbox" + counter;
    docFrag.querySelector(".deleteBtn").addEventListener("click", (event) => {
        event.target.parentElement.remove();
    })
    let checkbox = inputTxt;
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
