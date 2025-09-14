//   const whatever = document.getElementsByTagName("button");
//   console.log(whatever[0].innerHTML);
// const sub = document.querySelector("#title");
// console.log(sub.innerHTML);
// const heading = document.querySelector("#heading");
// heading.innerHTML = "This is a new heading";
// document.querySelector("button").setAttribute("disabled", true);
// document.querySelector("h1").innerText= "This is js";
// document.querySelector("h1").style.color = "blue";
// document.querySelector("h2").style.fontSize = "50px";
// const heading = document.querySelector("h1")
// // function example() {
// //     heading.innerText = "this is a new heading";
// // }
// const btn = document.querySelector("button");
// const input = document.querySelector("input")

// btn.addEventListener("click", function() {
//     heading.innerText = "Javascript"
// });
// btn.addEventListener("click", function() {
//     console.log(input.value)
// });

// const btn = document.querySelector("button");
// const input = document.querySelector("input");

// btn.addEventListener("click", function () {
//     alert(input.value);
// } )
    // const p = document.querySelector("p");
    // const button = document.querySelector("button");
    // button.addEventListener("click", function () {
    //     p.innerHTML = "welcome to js"
    // });

    const input = document.querySelector("input");
    const ipt = document.querySelector("#Login");
    const btn = document.querySelector("button");
    btn.addEventListener("click", function(){
       if("Login == 0-9+%_-"){
        alert("Login sucessful");
       } else {
        alert("Error");
       }
    });

