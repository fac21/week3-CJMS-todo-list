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

  test("Checking an entry marks it as complete", () => {
    // test goes here
  });

  test("Deleting an entry removes it from the list", () => {
    // test goes here
  });