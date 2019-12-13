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
let finalScore = 0;
let maxScore = 10;
let randomIndex = 0;
let nQuestion = document.querySelector("#nextBtn");
let resetBtn = document.querySelector("#resetBtn");
let exitBtn = document.querySelector("#exitBtn");

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
  randomIndex = Math.floor(Math.random() * triviaGame.length);
  questionDiv.innerHTML = triviaGame[randomIndex].Question;
  firstAnswer.innerHTML = triviaGame[randomIndex].Answer[0];
  secondAnswer.innerHTML = triviaGame[randomIndex].Answer[1];
  thirdAnswer.innerHTML = triviaGame[randomIndex].Answer[2];
  forthAnswer.innerHTML = triviaGame[randomIndex].Answer[3];
}

// SIMPLE ALERT ONCE YOUR REACH 10 POSITIVE NUMBERS.
// NEED TO ADD MORE FUNCTIONALITY INTO THIS PAGE.
function reachTen() {
  alert(
    "You score 10 positive numbers in trivia game.  YOU WON THE GAME!!!!!!!!!!!!!"
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
let answerBtn = document.querySelector("span");
let wrongAnswer = document.querySelector("span");

// THIS IS THE FIRST CLICK BOX FOR THE ANSWERS
firstAnswer.addEventListener("click", function() {
  let pp = triviaGame[randomIndex].Answer[0] == triviaGame[randomIndex].Correct;
  console.log(pp);
  if (pp === true) {
    finalScore = finalScore + 1;
    nextQuestion();
    answerBtn.innerHTML = finalScore;
    if (finalScore == maxScore) {
      reachTen();
    }
  } else {
    finalScore = finalScore - 1;
    wrongAnswer.innerHTML = finalScore;
  }
  nextQuestion();
});

// THIS IS THE SECOND CLICK BOX FOR THE ANSWERS
secondAnswer.addEventListener("click", function() {
  let pp = triviaGame[randomIndex].Answer[1] == triviaGame[randomIndex].Correct;
  console.log(pp);
  if (pp === true) {
    finalScore = finalScore + 1;
    nextQuestion();
    answerBtn.innerHTML = finalScore;
    if (finalScore == maxScore) {
      reachTen();
    }
  } else {
    finalScore = finalScore - 1;
    wrongAnswer.innerHTML = finalScore;
  }
  nextQuestion();
});

// THIS IS THE THIRD CLICK BOX FOR THE ANSWERS
thirdAnswer.addEventListener("click", function() {
  let pp = triviaGame[randomIndex].Answer[2] == triviaGame[randomIndex].Correct;
  console.log(pp);
  if (pp === true) {
    finalScore = finalScore + 1;
    nextQuestion();
    answerBtn.innerHTML = finalScore;
    if (finalScore == maxScore) {
      reachTen();
    }
  } else {
    finalScore = finalScore - 1;
    wrongAnswer.innerHTML = finalScore;
  }
  nextQuestion();
});

// THIS IS THE FORTH CLICK BOX FOR THE ANSWERS
forthAnswer.addEventListener("click", function() {
  let pp = triviaGame[randomIndex].Answer[3] == triviaGame[randomIndex].Correct;
  console.log(pp);
  if (pp === true) {
    finalScore = finalScore + 1;
    nextQuestion();
    answerBtn.innerHTML = finalScore;
    if (finalScore == maxScore) {
      reachTen();
    }
  } else {
    finalScore = finalScore - 1;
    wrongAnswer.innerHTML = finalScore;
  }
  nextQuestion();
});
