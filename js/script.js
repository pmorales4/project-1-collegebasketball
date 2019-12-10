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

//make buttons clickable

let btn1 = document.querySelector("#btn1");
console.log(btn1);
let btn2 = document.querySelector("#btn2");
console.log(btn2);

btn1.addEventListener("click", function() {
  //console.log("I clicked the easy button");

  window.location.href =
    "file:///Users/pmorales/SEI/projects/project-1-collegebasketball/project-1-collegebasketball/game.html";
  //navigator(new URL('/game.html/'));
});

btn2.addEventListener("click", function() {
  //console.log("I clicked the hard button");
  window.location.href =
    "file:///Users/pmorales/SEI/projects/project-1-collegebasketball/project-1-collegebasketball/game.html";
});

//Variables Needed for Project on Game.html page

//Array of objects for easy game
let triviaGame = [
  {
    Question1:
      "What NCAA Division I basketball team has the most national championships?",
    Answer1: "UCLA",
  },
  {
    Question2:
      "When was the First Naismith College Coach of the Year Award first awarded and who was the recipient?",
    Answer2: " Coach Bobby Knight - 1986-1987",
  },
  {
    Question3:
      "The UCLA men hold the record for the most men's Division I NCAA chanpionships with 11. When did the UCLA men win their first basketball national championship?",
    Answer3: "The was 1964",
  },
  {
    Question4: "When was the first college basketball game played?",
    Answer4: "January 18, 1896",
  },
  {
    Question5:
      " What school won the first NCAA Mens Basketball National Championships?",
    Answer5: "Oregon in 1939",
  },
  {
    Question6: "What teams were in the Final Four back in 2000?",
    Answer6: "Tar Heels, Michigan State, Florida Gators, Wisconsin",
  },
  {
    Question7:
      "What team won the National Championships in 2000 for Mens College Basketball",
    Answer7: "Michigan State Spartans",
  },
  {
    Question8:
      "What team won the National Championship in 1995 mens college basketball?",
    Answer8: "UCLA Bruins",
  },
  {
    Question9:
      "Who was the Most Outstanding Player in the 1995 Mens College Basketball Championship?",
    Answer9: "Ed O'Bannon - UCLA",
  },
  {
    Question10:
      "The 1995 NBA draft picked two players from the North Carolina Tar Heels in the top 5, who are they?",
    Answer10: "Jerry Stackhouse and Rasheed Wallace",
  },
  {
    Question11:
      "He was drafted out of Syracuse University in 1990 as the number pick in the NBA draft, who is he?",
    Answer11: "Derrick Coleman",
  },
  {
    Question12:
      "Syracuse University had a point guard that went by the name of the - General, who is he?",
    Answer12: "Sherman Douglas",
  },
  {
    Question13:
      "In 1984, Georgetown led by Patrick Ewing, won their first National Championship. Which school did they defeat 84-75 in the championship Game?",
    Answer13: "Houston - Phi Slamma Jamma",
  },
  {
    Question14:
      "In the 1992 East regional final, Christian Laettner hit the game winning basket from the top of the key with one second left to lift DUKE to a 104-103 win. What team was their opponent?",
    Answer14: "Kentucky Wildcats",
  },
  {
    Question15: "Who was the loset against North Carolina in 1993?",
    Answer15: "East Caroline University",
  },
  {
    Question16:
      "1985 was the first year the NCAA tournament had a grand total of 64 teams. Villanova defeated Georgetown to become the first national championship of the new format. Who was the loser?",
    Answer16: "Marshall",
  },
  {
    Question17:
      "Kentucky was stunned by which all African American starting lineup team in the 1966 National Championship? Hint: a movie was made about this team. ",
    Answer17: "Texas Western University",
  },
  {
    Question18:
      "Syracuse was the National Champions in 2003, Who was the most outstanding polayer?",
    Answer18: "Carmelo Anthony",
  },
  {
    Question19:
      "The very first Final Four, played in 1939, was held in which midwestern city?",
    Answer19: "Evanston, Illinois",
  },
  {
    Question20: "In 1993, Southern Univesity beat what #4 team?",
    Answer20: "Georgia Teach",
  },
];

for (let j = 0; j < triviaGame.length; j++) {
  console.log(triviaGame[j]);
}
