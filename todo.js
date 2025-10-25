// const todoForm = document.getElementById("todo-form");
// const todoInput = document.getElementById("todo-input");
// const todoList = document.getElementById("todo-list");

// todoForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const task = todoInput.value.trim();
//   if (task === "") return;

//   const li = document.createElement("li");

//   const span = document.createElement("span");
//   span.textContent = task;

  
//   span.addEventListener("click", function () {
//     li.classList.toggle("completed");
//   });

  
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "X";
//   deleteBtn.className = "delete-btn";
//   deleteBtn.addEventListener("click", function () {
//     li.remove();
//   });

//   li.appendChild(span);
//   li.appendChild(deleteBtn);
//   todoList.appendChild(li);

//   todoInput.value = "";
// });


// $("#todo-form").click(function(e) {
// e.preventDefault();
//  let task = $("#todo-input").val().trim();
//  if(task === "")return;
//  $("li").create (".li")
//  $(".span").create("span")
//  $(".span").text("task");

//  $(".span").click(function(){
//   $(".li").classlist.toggle("completed");
//  });

//  $("button").create(".deletebtn");
//  $(".deletebtn").text("X");
//  $(".deletebtn").className = "delete-btn"

//  $(".deletebtn").click(function(){
//   $("li").remove();
//  });

//   $("li").append("span");
//   $("li").append("li");
//   $("#todo-list").append("li");

//   $("#todo-input").value = "";
// });


  // $("#todo-form").click( function (e) {
  //   e.preventDefault();

  //   const task = $("#todo-input").val().trim();
  //   if (task === "") return;

  //   const $li = $("<li></li>");
  //   const $span = $("<span></span>").text("task");
  //   const $deleteBtn = $("<button></button>")
  //     .text("X")
  //     .addClass("delete-btn");

  //   $span.click(function () {
  //     $li.toggleClass("completed");
  //   });

  //   $deleteBtn.click(function() {
  //     $li.remove();
  //   });

  //   $li.append("$span", "$deleteBtn");
  //   $("#todo-list").append("$li");

  //   $("#todo-input").val("");
  // });

  $(document).ready(function () {
  $("#todo-form").on("submit", function (e) {
    e.preventDefault();

    const task = $("#todo-input").val().trim();
    if (task === "") return;

    const $li = $("<li></li>");
    const $span = $("<span></span>").text(task);
    const $deleteBtn = $("<button></button>")
      .text("X")
      .addClass("delete-btn");

    $span.on("click", function () {
      $li.toggleClass("completed");
    });

    $deleteBtn.on("click", function () {
      $li.remove();
    });

    $li.append($span, $deleteBtn);
    $("#todo-list").append($li);

    $("#todo-input").val("");
  });
});
