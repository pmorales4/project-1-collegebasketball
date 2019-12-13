//THIS IS THE TABLE TAG CONFERENCE LOGOS
const table = document.querySelector(".tableOfLogos");
//THIS IS THE DIV CLASS OF THE CONFERENC LOGOS
const divLogos = document.querySelector(".ConferenceDivLogos");

// THIS IS THE ONE BUTTON ON THE LANDING PAGE TO ENTER THE TRIVIA GAME.
//DONE DYNAMICALLY WITH VANILLA JAVASCRIPT
let easyBtn = document.createElement("h5");
let easyGameBtn = document.createTextNode("ENTER THE TRIVIA GAME");
easyBtn.id = "btn1";
easyBtn.setAttribute("align", "center");
easyBtn.appendChild(easyGameBtn);
document.body.appendChild(easyBtn);

//MADE BUTTON CLICKABLE WITH EVENT LISTENER TO THE SECOND PAGE OF APPLICATION
let btn1 = document.querySelector("#btn1");
console.log(btn1);

btn1.addEventListener("click", function() {
  document.location.href =
    "https://pmorales4.github.io/project-1-collegebasketball/game.html";
});
