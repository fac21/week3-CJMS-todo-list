
const addButton = document.querySelector("#add-button");
const newTodo = document.getElementById("new-to-do");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitTask();
});

function submitTask() {
    let temp = document.getElementsByTagName("template")[0];
    let clone = temp.content.cloneNode(true);
    clone.children[1].innerText = newTodo.value;
    taskList.appendChild(clone);
}


   
