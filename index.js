
const addButton = document.querySelector("#add-button");
const newTodo = document.getElementById("new-to-do");
const taskList = document.getElementById("task-list");
const deleteBtns = document.querySelectorAll(".deleteBtn");
console.log(deleteBtns)
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitTask();
});

function submitTask() {
    let temp = document.getElementsByTagName("template")[0];
    let clone = temp.content.cloneNode(true);
    clone.querySelector("label").textContent = newTodo.value;
    // clone.children[1].innerText = newTodo.value;
    taskList.appendChild(clone);
}

deleteBtns.forEach(x => {
    console.log('hello')
    x.addEventListener("click", (event) => {
        event.preventDefault()
        deleteTask(x)
    })
})

function deleteTask(btn) {
    console.log(btn)
    //find the corresponding article 
    // btn.parentNode.remove()
    //and delete
}


   
