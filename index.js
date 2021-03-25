
const addButton = document.querySelector("#add-button");
const newTodo = document.getElementById("new-to-do");
const taskList = document.getElementById("task-list");
let counter = 0;

//This adds an event listener to the entire list 
taskList.addEventListener('click', function(event){
    let targetElement = event.target
    let selector = 'button';
    if(targetElement.matches(selector)) {
        targetElement = targetElement.parentElement;
        console.log(targetElement)
        targetElement.remove()
        return;
    }
},true);

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    counter++;
    submitTask();
});

function submitTask() {
    console.log(counter);
    let temp = document.getElementsByTagName("template")[0];
    let clone = temp.content.cloneNode(true);
    clone.querySelector("label").textContent = newTodo.value;
    clone.querySelector("input").id = "checkbox" + counter;
    clone.querySelector(".deleteBtn").addEventListener("click", (event) => {
    event.target.parentElement.remove();
    })
    taskList.appendChild(clone);
}

//Image API

window.addEventListener("load", () => {
        let randomNum = Math.floor(Math.random() * 10);
        fetch(`https://api.unsplash.com/photos/random?client_id=mtXzGZBpq9Gzv9wHdPMec37TIy6h6ZVclhfkxVRvygY&orientation=portrait`)
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                return response.json()
            })
            .then((data) => {
                console.log(data)
                console.log(data.urls.regular)
                document.querySelector('.bg-image').src = data.urls.regular;
            })
            .catch((error) => console.log(error));
});
