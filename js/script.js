//THIS IS THE TABLE TAG CONFERENCE LOGOS
const table = document.querySelector(".tableOfLogos");
//console.log(table);

//THIS IS THE DIV CLASS OF THE CONFERENC LOGOS
const divLogos = document.querySelector(".ConferenceDivLogos");
//console.log(divLogos);

//This block of code I added my two buttons on landing page
//These will be the two buttons 'Easy Trivia Game', 'Hard Trivia Game'
//In order to work I created two separate h5 tags to hold them each

let easyBtn = document.createElement("h5");
//let hardBtn = document.createElement("h5");
let easyGameBtn = document.createTextNode("ENTER THE TRIVIA GAME");
//let hardGameBtn = document.createTextNode("Hard Trivia Game");

easyBtn.id = "btn1";
easyBtn.setAttribute("align", "center");
easyBtn.appendChild(easyGameBtn);
document.body.appendChild(easyBtn);

// hardBtn.id = "btn2";
// hardBtn.setAttribute("align", "center");
// hardBtn.appendChild(hardGameBtn);
// document.body.appendChild(hardBtn);

//make buttons clickable

let btn1 = document.querySelector("#btn1");
console.log(btn1);
// let btn2 = document.querySelector("#btn2");
// console.log(btn2);

btn1.addEventListener("click", function() {
  //console.log("I clicked the easy button");
  document.location.href =
    "https://pmorales4.github.io/project-1-collegebasketball/game.html";
});

// btn2.addEventListener("click", function() {
//   //console.log("I clicked the hard button");
//   window.location.href =
//     "file:///Users/pmorales/SEI/projects/project-1-collegebasketball/project-1-collegebasketball/game.html";
// });
