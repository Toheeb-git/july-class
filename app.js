 const todoform = document.getElementById("do-form");
 const input = document.getElementById("do-input");
 const todoul = document.getElementById("todo-ul");

todoform.addEventListener("submit", function(e){
   e.preventDefault()
 const task = input.value.trim();

 if(task === "") {
  alert("please enter a valid input")
 };
 const li = document.createElement("li");

   const span = document.createElement("span");
   span.textContent = task;

   span.addEventListener("click", function(){
    li.classList.toggle("complete");
   })

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn"
  deleteBtn.addEventListener("click", function(){
    li.remove()
  });

li.appendChild(span);
li.appendChild(deleteBtn);
todoul.appendChild(li);
   todoul.value = "";
  });
