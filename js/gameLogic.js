// THESE STATEMENTS BELOW WILL POPULATE THE PAGE WHEN YOU LAND ON IT.
// QUESTIOLN ARE STARTED ON THE FIRST ONE IN THE ARRAY OF OBJECTS.
// QUESTION AND ANSWERS COME FROM ------ gameArray.js
questionDiv.innerHTML = triviaGame[0].Question;
firstAnswer.innerHTML = triviaGame[0].Answer[0];
secondAnswer.innerHTML = triviaGame[0].Answer[1];
thirdAnswer.innerHTML = triviaGame[0].Answer[2];
forthAnswer.innerHTML = triviaGame[0].Answer[3];

// ***************************************************************
// SET UP OF VARIABLES WITHIN PROJECT
// FINALSCORE, MAXSCORE --  WITHIN THE CODE FOR HOW MANY QUESTION
// TO CHOOSE AND TALLY UP.

// RANDOMINDEX - THIS IS FOR THE RANDOM QUESTION / GLOBALLY.

// LAST THREE ARE TO PULL FROM HTML INTO JAVASCRIPT TO MAKE CONNECTIONS.
// ***************************************************************
//let score = 0;
let count = 0;
let maxQuestions = 10;
let falseScore = 0;
let trueScore = 0;

let randomIndex = 0;
let nQuestion = document.querySelector("#nextBtn");
let resetBtn = document.querySelector("#resetBtn");
let exitBtn = document.querySelector("#exitBtn");

//let scoreButtons = document.querySelector("#scoreButtons");
//console.log(scoreButtons);

let buttons = document.querySelectorAll(".inputAnswer");
console.log(buttons);

//GETS THE RANDOM QUESTION ONCE YOU CLICK ON THE 'NEXT QUESTION BTN'
nQuestion.addEventListener("click", function() {
  //GET THE RANDOM ITEM FROM ARRAY OF OBJECTS
  randomIndex = Math.floor(Math.random() * triviaGame.length);
  questionDiv.innerHTML = triviaGame[randomIndex].Question;
  firstAnswer.innerHTML = triviaGame[randomIndex].Answer[0];
  secondAnswer.innerHTML = triviaGame[randomIndex].Answer[1];
  thirdAnswer.innerHTML = triviaGame[randomIndex].Answer[2];
  forthAnswer.innerHTML = triviaGame[randomIndex].Answer[3];
});

//FUNCTION MAKE A NEW SCREEN OF QUESTION AND ANSWERS
function nextQuestion() {
  //let count = 0;

  randomIndex = Math.floor(Math.random() * triviaGame.length);
  questionDiv.innerHTML = triviaGame[randomIndex].Question;
  firstAnswer.innerHTML = triviaGame[randomIndex].Answer[0];
  secondAnswer.innerHTML = triviaGame[randomIndex].Answer[1];
  thirdAnswer.innerHTML = triviaGame[randomIndex].Answer[2];
  forthAnswer.innerHTML = triviaGame[randomIndex].Answer[3];
  //count++;
  //} while (count < 10);
}

// SIMPLE ALERT ONCE YOUR REACH 10 POSITIVE NUMBERS.
// NEED TO ADD MORE FUNCTIONALITY INTO THIS PAGE.
function trueBoolean() {
  trueScore = trueScore + 1;
  scoreButtons[0].innerHTML = trueScore;
  gameOver();
}

function falseBoolean() {
  falseScore = falseScore + 1;
  scoreButtons[1].innerHTML = falseScore;
  gameOver();
}

function gameOver() {
  count = trueScore + falseScore;
  if (count == maxQuestions)
    alert(
      "Your final score is: " +
        trueScore +
        " correct answer and " +
        falseScore +
        " wrong answers!"
    );
}

//RESET BUTTON WORKS, REFRESHES THE WHOLE PAGE.
resetBtn.addEventListener("click", function() {
  location.reload();
});

// EXIT BUTTON OUT TO LANDING PAGE.
exitBtn.addEventListener("click", function() {
  document.location.href =
    "https://pmorales4.github.io/project-1-collegebasketball/";
});

// THESE ARE FOR BOTH POSITIVE AND NEGATIVE NUMBERS OUTPUT
// YOU NEED TO SCORE MORE POSITVE UP TO 10 TO WIN GAME.
// IF YOU KEEP HITTING NEGATIVE YOU NEED TO HIT MORE POSITIVE.
// TALLIES IN THE 'YOUR SCORE ', BOX

// let answerBtn = document.querySelector("span");
// console.log(answerBtn);
// let wrongAnswer = document.getElementsByTagName("span");
// console.log(wrongAnswer);

let scoreButtons = document.getElementsByTagName("span");
console.log(scoreButtons[0]);
console.log(scoreButtons[1]);

for (let g = 0; g < buttons.length; g++) {
  buttons[g].addEventListener("click", function() {
    let pp =
      triviaGame[randomIndex].Answer[g] == triviaGame[randomIndex].Correct;
    console.log(pp);
    if (pp === true) {
      trueBoolean();
      nextQuestion();
    } else {
      falseBoolean();
      nextQuestion();
    }
  });
}
