let questionDiv = document.createElement("div");
let answerDiv = document.createElement("div");

let questionDivStatement = document.createTextNode(
  "this is a div for question"
);
let answerDivStatement = document.createTextNode("this is a div for answer");

questionDiv.id = "questionDiv";
questionDiv.setAttribute("align", "center");
questionDiv.appendChild(questionDivStatement);
document.body.appendChild(questionDiv);

answerDiv.id = "answerDiv";
answerDiv.setAttribute("align", "center");
answerDiv.appendChild(answerDivStatement);
document.body.appendChild(answerDiv);

let score = 0;

//Array of objects for easy game
let triviaGame = [
  {
    Question:
      "What NCAA Division I basketball team has the most national championships?",
    Answer: ["UCLA", "Tar Heels", "Indiana", "Uconn"],
  },
  {
    Question:
      "Who received the First Naismith College Coach of the Year Award?",
    Answer: [
      "Coach Bobby Knight",
      "Coach Tom Moore",
      "Coach Jim Boeheim",
      "Coach Jim Calhoun",
    ],
  },
  {
    Question:
      "The UCLA men hold the record for the most men's Division I NCAA chanpionships with 11. When did the UCLA men win their first basketball national championship?",
    Answer: "The was 1964",
  },
  {
    Question: "When was the first college basketball game played?",
    Answer: "January 18, 1896",
  },
  {
    Question:
      " What school won the first NCAA Mens Basketball National Championships?",
    Answer: "Oregon in 1939",
  },
  {
    Question: "What teams were in the Final Four back in 2000?",
    Answer: "Tar Heels, Michigan State, Florida Gators, Wisconsin",
  },
  {
    Question:
      "What team won the National Championships in 2000 for Mens College Basketball",
    Answer: "Michigan State Spartans",
  },
  {
    Question:
      "What team won the National Championship in 1995 mens college basketball?",
    Answer: "UCLA Bruins",
  },
  {
    Question:
      "Who was the Most Outstanding Player in the 1995 Mens College Basketball Championship?",
    Answer: "Ed O'Bannon - UCLA",
  },
  {
    Question:
      "The 1995 NBA draft picked two players from the North Carolina Tar Heels in the top 5, who are they?",
    Answer: "Jerry Stackhouse and Rasheed Wallace",
  },
  {
    Question:
      "He was drafted out of Syracuse University in 1990 as the number pick in the NBA draft, who is he?",
    Answer: "Derrick Coleman",
  },
  {
    Question:
      "Syracuse University had a point guard that went by the name of the - General, who is he?",
    Answer: "Sherman Douglas",
  },
  {
    Question:
      "In 1984, Georgetown led by Patrick Ewing, won their first National Championship. Which school did they defeat 84-75 in the championship Game?",
    Answer: "Houston - Phi Slamma Jamma",
  },
  {
    Question:
      "In the 1992 East regional final, Christian Laettner hit the game winning basket from the top of the key with one second left to lift DUKE to a 104-103 win. What team was their opponent?",
    Answer: "Kentucky Wildcats",
  },
  {
    Question: "Who was the loset against North Carolina in 1993?",
    Answer: "East Caroline University",
  },
  {
    Question:
      "1985 was the first year the NCAA tournament had a grand total of 64 teams. Villanova defeated Georgetown to become the first national championship of the new format. Who was the loser?",
    Answer: "Marshall",
  },
  {
    Question:
      "Kentucky was stunned by which all African American starting lineup team in the 1966 National Championship? Hint: a movie was made about this team. ",
    Answer: "Texas Western University",
  },
  {
    Question:
      "Syracuse was the National Champions in 2003, Who was the most outstanding polayer?",
    Answer: "Carmelo Anthony",
  },
  {
    Question:
      "The very first Final Four, played in 1939, was held in which midwestern city?",
    Answer: "Evanston, Illinois",
  },
  {
    Question: "In 1993, Southern Univesity beat what #4 team?",
    Answer: "Georgia Teach",
  },
];

for (let j = 0; j < triviaGame.length; j++) {
  //console.log(triviaGame[j]);
}

//how to grab one item in array
let b = triviaGame[1].Question;
let c = triviaGame[0].Answer;
//console.log(triviaGame[16].Answer17); // this grabs all separate answer the way its written.
//document.getElementById("gameDiv").innerHTML = b;
console.log(b);
console.log(c);

//create random number
//for (i = 0; i < triviaGame.length; i++) {

//let ranQues = triviaGame[i].Question;
//console.log(ranQues);

// let randomGame = triviaGame[Math.floor(Math.random() * triviaGame.length)];
// console.log(randomGame);
// let myOutput = JSON.stringify(randomGame);
// console.log(myOutput);

//   document.getElementById("gameDiv").innerHTML =
//     triviaGame[Math.floor(Math.random() * triviaGame.length)];

//}
//******************************************* */
// let randomGame = triviaGame[Math.floor(Math.random() * triviaGame.length)];
// let myOutput = JSON.stringify(randomGame);
// document.getElementById("gameDiv").innerHTML = myOutput;

//console.log(randomGame);
//document.getElementById("gameDiv").innerHTML = myOutput;
//let x = JSON.stringify(document.getElementById("gameDiv").innerHTML = randomGame);
//console.log(x);

let nQuestion = document.querySelector("#nextBtn");

nQuestion.addEventListener("click", function() {
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  questionDiv.innerHTML = triviaGame[randonIndex].Question;
  answerDiv.innerHTML = triviaGame[randonIndex].Answer;
});

//3 lines below work well. ***********************************************
// let randonIndex = Math.floor(Math.random() * triviaGame.length);
// questionDiv.innerHTML = triviaGame[randonIndex].Question;
// answerDiv.innerHTML = triviaGame[randonIndex].Answer;

// for (let i = 0; i < triviaGame.length; i++) {
//     triviaGame[i].innerHTML = triviaGame[randomIndex].Answer;
//   }
