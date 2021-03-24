
const addButton = document.querySelector("#add-button");
const newTodo = document.getElementById("new-to-do");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitTask();
});

function submitTask() {
    let newItem = document.createElement("li");
    newItem.innerText = newTodo.value;
    taskList.append(newItem);
}