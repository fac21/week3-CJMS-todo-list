test("Submitting a new task adds it to the list", () => {
  const input = document.querySelector("input");
  input.value = "test";
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click(); 
  const listItem = document.querySelector("article");
  if (listItem){ //article
    equal(listItem.children[1].textContent, input.value) //children[1] refers to label
  }
  input.textContent = "";

});

  // test("Checking an entry marks it as complete", () => {
  //   submitTask();
  //   const listItem = document.querySelector("article");
  //   let checkbox = document.querySelector('#checkbox1')
  //   console.log(checkbox);
  //   checkbox.checked = true;
  //   const label = listItem.querySelector("label");
  //   equal(label.style.textDecoration, "line-through")
  //   console.log(label);

  // });

  test("Deleting an entry removes it from the list", () => {
  const taskList = document.querySelector('#task-list');
  const deleteBtn = document.querySelector("button[type='button']");
  deleteBtn.click(); 
  equal(taskList.children.length, 1)
  });

  
  