const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

// ctx.beginPath();  //start a new path
// ctx.moveTo(20, 20); //move the pen to(20, 20);
// ctx.lineTo(2000, 40); // Draws a line
// ctx.stroke(); //Renders the line on

// ctx.beginPath();
// ctx.arc(100, 100, 40, 0, 2 *Math.PI);
// ctx.fill();
// ctx.font = "20px Arial"
// ctx.fillText("Hello Canvas", 50, 150);

// canvas.addEventListener("click", (event) => {
//     ctx.fillRect(event.clientX, event.clientY, 10, 10);
// });
//  let x = 0;
//  let speed = 2
//  function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillRect(x, 50, 50, 50);
//     x += speed;
//     if(x + 50 >= canvas.width || x <= 0) {
//         speed =-speed;
//     }
//     requestAnimationFrame(animate);
//  }
//  animate();

 let ball = 0;
 let speed = 2
 function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(200, ball, 50, 50);
    ball += speed;
    if(ball + 50 >= canvas.height || ball <= 0) {
        speed =-speed;
    }
    requestAnimationFrame(animate);
 }
 animate();


 