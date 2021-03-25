
const addButton = document.querySelector("#add-button");
const newTodo = document.getElementById("new-to-do");
const taskList = document.getElementById("task-list");
// const deleteBtns = document.querySelectorAll(".deleteBtn");
// const deleteBtn = document.querySelector(".deleteBtn");
console.log(taskList)

taskList.addEventListener('click',function(event){
    let targetElement = event.target
    let selector = 'button';
    while(targetElement != null) {
        if(targetElement.matches(selector)) {
            targetElement = targetElement.parentElement;
            console.log(targetElement)
            targetElement.remove()
            return;
        }
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
    // clone.children[1].innerText = newTodo.value;
    taskList.appendChild(clone);
}

// deleteBtns.forEach(x => {
//     console.log('hello')
//     x.addEventListener("click", (event) => {
//         event.preventDefault()
//         deleteTask(x)
//     })
// })

// if(article) {
//     deleteBtn.addEventListener("click", (event) => {
//             event.preventDefault()
//             deleteTask()
//     })
// }

// function deleteTask(e) {
//     e.preventDefault()

//     console.log('hello')
    //find the corresponding article 
    // btn.parentNode.remove()
    //and delete
// }


   
