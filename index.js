
const addButton = document.querySelector("#add-button");
const newTodo = document.getElementById("new-to-do");
const taskList = document.getElementById("task-list");

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
    submitTask();
});

function submitTask() {
    let temp = document.getElementsByTagName("template")[0];
    let clone = temp.content.cloneNode(true);
    clone.querySelector("label").textContent = newTodo.value;
    clone.querySelector(".deleteBtn").addEventListener("click", (event) => {
    event.target.parentElement.remove();
    })
    taskList.appendChild(clone);
}

