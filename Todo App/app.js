const addTodoForm_el = document.querySelector(".app__form");
const addTodoInput_el = document.querySelector(".app__input-todo");
const todoList_el = document.querySelector(".app__list");

const todoList = [];

const displayTodo = () => {
  let todos = "";

  // build up the todos string based on the todoList array
  todoList.forEach(function (todoObj, index) {
    todos =
      todos +
      `
      <li class="app__todo ${todoObj.check == true ? "app__todo--check" : ""}">
        <p class="app__text">${todoObj.text}</p>
     
        <button class="app__del-todo">x</button>
      </li>
    `;
  });

  // display the todos string to list in the UI
  todoList_el.innerHTML = todos;

 const delTodoBtns = document.querySelectorAll(".app__del-todo");
  delTodoBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const index = e.target.getAttribute("data-index");
      todoList.splice(index, 1);
      displayTodo();
    });
  });
};


addTodoForm_el.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoValue = addTodoInput_el.value;

  if (todoValue) {
    const todo = { text: todoValue, check: false };
    todoList.unshift(todo);

    displayTodo();
  } else {
    alert("Please Type in a Todo!");
  }
});
