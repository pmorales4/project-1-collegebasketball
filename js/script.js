//THIS IS THE TABLE TAG CONFERENCE LOGOS
const table = document.querySelector(".tableOfLogos");
console.log(table);

//THIS IS THE DIV CLASS OF THE CONFERENC LOGOS
const divLogos = document.querySelector(".ConferenceDivLogos");
console.log(divLogos);

//This block of code I added my two buttons on landing page
//These will be the two buttons 'Easy Trivia Game', 'Hard Trivia Game'
//In order to work I created two separate h5 tags to hold them each

let easyBtn = document.createElement("h5");
let hardBtn = document.createElement("h5");
let easyGameBtn = document.createTextNode("Easy Trivia Game");
let hardGameBtn = document.createTextNode("Hard Trivia Game");

easyBtn.id = "btn1";
easyBtn.setAttribute("align", "center");
easyBtn.appendChild(easyGameBtn);
document.body.appendChild(easyBtn);

hardBtn.id = "btn2";
hardBtn.setAttribute("align", "center");
hardBtn.appendChild(hardGameBtn);
document.body.appendChild(hardBtn);
