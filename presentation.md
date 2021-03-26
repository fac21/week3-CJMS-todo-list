# Project 3: Testing (CJSM)

---

## Team Roles

|Name| Spike| Roles |
|----|------|-------|
|Jo|Checking our code|Deployment |
|Chun|Testing Methodologies|Facilitator|
|Michael|Advanced CSS|User |
|Saki|Advanced DOM|Quality|

---

## How did your team split up the work?

- Worked in pairs on individual issues, taking turns with functionality and tests. :pear:

- We worked as a whole group on challenging sections such as the `deleteTask` functionality.

---

- We decided pairs using Japanese rock, paper, (no scissors) :scissors: :newspaper: 

![](https://media.giphy.com/media/xT5LMAdo32VA6idIfS/giphy.gif)

---

## Pairing

- We swapped pairs every hour.
- Met as a four to discuss what we'd achieved after every pair session.
- Everyone got a chance to work with everyone!

---

### Work style: 
#### What went well :+1: 

- Everyone always knew what was going on
- Everyone learned something new every day

#### Challenges :confounded: 
- Hard to keep the tests passing when half the team was adding code that would change its functionality.
- Sometimes a bit time inefficient. :clock230: 

---

## Inspiration

![](https://i.imgur.com/2VdsyQE.png)

---

## Kanban

![](https://i.imgur.com/uumtDYi.png)

---

## Estimating our time

![](https://i.imgur.com/9pV5jXv.gif)

---

### Things we’re proud of :muscle: 

- Getting delete button to work: order of script files important!
- Learning new things (e.g. templates)
- Making Unsplash API work

---

### User Stories

- Add tasks to a list so that I can keep track of them ✅
- Check things off my list so that I can see what I’ve done ✅
- Delete things from the list if I don’t need to do them anymore ✅

---

![](https://user-images.githubusercontent.com/31373245/112510796-b1ebf900-8d89-11eb-9698-062da9dcbca2.png)))

---

### Things "I" learned

---

![](https://media.giphy.com/media/C1dmtEuMtJqMg/giphy.gif)

---

![](https://media.giphy.com/media/fsjK6leLSkCTS/giphy.gif)

---


## Quality Control

  <img width="300" height="300" src="https://media.giphy.com/media/lQU2qiBHaVclxblJ1E/giphy-downsized.gif">

---


## Demo: https://fac21.github.io/week3-CJMS-todo-list/


---

## Things we've learned

---

:bulb: You can do .querySelector on elements that aren't the `document`. 

![](https://media.giphy.com/media/2sddCIZRYfiPlNeLZn/giphy.gif)

---

E.g.

``` javascript
    let docFrag = temp.content.cloneNode(true); //makes a clone of template 
    docFrag.querySelector("label").textContent = newTodo.value; //add label content
```

---


:bulb: HTML buttons default to type="submit". 

This can result in weird behaviour because the button attempts to submit data in a form (weird disappearing behaviour).

!![](https://media.giphy.com/media/4bpK2k0Yru5Us/giphy.gif)

:bulb: Try using `type="button"` instead.

---

:bulb: The `htmlFor` attribute - grabs the "for" attribute of label elements.

:bulb: Using HTML templates

![](https://media.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif)

---

### Things we don't understand :dizzy_face: 

---

- Dealing with **scope** and waiting until elements existed. 
    - E.g. label = document.querySelector("label") --> needed to be referenced in multiple functions but couldn't define globally since the label didn't exist when the code was executed. 
- Whether we can use the `var` variable to make it global or we should define it as `let` or `const` outside the function
