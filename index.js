
const addButton = document.querySelector("#add-button");
const newTodo = document.getElementById("new-to-do");
const taskList = document.getElementById("task-list");
// const deleteBtns = document.querySelectorAll(".deleteBtn");
// const deleteBtn = document.querySelector(".deleteBtn");
console.log(taskList)

taskList.addEventListener('click',function(event){
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
    // }
});


   
