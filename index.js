const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitTask();
});


const newTodo = document.getElementById("new-to-do");
const taskList = document.getElementById("task-list");

function submitTask() {
    let newItem = document.createElement("li");
    taskList.append(newItem);
    newItem.innerText = newTodo.value;
}