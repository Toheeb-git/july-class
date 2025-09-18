const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const task = todoInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = task;

  //toggle complete
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  todoInput.value = "";
});
