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

//************* START BUTTONS ABOVE ON LANDING PAGE ***********/

//Below is the Modal Javascript code
//THIS IS HE FIRST MODAL FOR ATLANTIC 10 LIST
const firstModal = document.querySelector("#firstModal"); //works
let modalBtn1 = document.querySelector("#modalBtn1"); // works
const closeFirstModal = document.querySelector(".closeFirstModal"); // works
modalBtn1.addEventListener("click", openM); //works
closeFirstModal.addEventListener("click", closeM);

function openM() {
  firstModal.style.display = "block";
}

function closeM() {
  firstModal.style.display = "none";
}
//************* MODAL ATLANTIC 10 ENDS ***********/

//THIS IS THE MODAL FOR ATLANTIC COAST
const firstModal2 = document.querySelector("#firstModal2");
let modalBtn2 = document.querySelector("#modalBtn2");
const closeFirstModal2 = document.querySelector(".closeFirstModal2");
modalBtn2.addEventListener("click", openM2);
closeFirstModal2.addEventListener("click", closeM2);
function openM2() {
  firstModal2.style.display = "block";
}
function closeM2() {
  firstModal2.style.display = "none";
}

//************* MODAL ATLANTIC COAST ENDS ***********/

//THIS IS THE BIG TEN CONFERENCE

const firstModal3 = document.querySelector("#firstModal3");
let modalBtn3 = document.querySelector("#modalBtn3");
const closeFirstModal3 = document.querySelector(".closeFirstModal3");
modalBtn3.addEventListener("click", openM3);
closeFirstModal3.addEventListener("click", closeM3);

//FUNCTION BELOW FOR 3RD MODAL
function openM3() {
  firstModal2.style.display = "block";
}
function closeM3() {
  firstModal2.style.display = "none";
}
//************* MODAL BIG TEN CONFERENCE ENDS ***********/

//THIS IS THE BIG 12 CONFERENCE
const firstModal4 = document.querySelector("#firstModal4");
let modalBtn4 = document.querySelector("#modalBtn4");
const closeFirstModal4 = document.querySelector(".closeFirstModal4");
modalBtn4.addEventListener("click", openM4);
closeFirstModal4.addEventListener("click", closeM4);
//FUNCTION BELOW FOR 3RD MODAL
function openM4() {
  firstModal2.style.display = "block";
}
function closeM4() {
  firstModal2.style.display = "none";
}
//************* MODAL BIG 12 CONFERENCE ENDS ***********/
