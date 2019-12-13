questionDiv.innerHTML = triviaGame[0].Question;
firstAnswer.innerHTML = triviaGame[0].Answer[0];
secondAnswer.innerHTML = triviaGame[0].Answer[1];
thirdAnswer.innerHTML = triviaGame[0].Answer[2];
forthAnswer.innerHTML = triviaGame[0].Answer[3];

// ***************************************************************
// THIS EVENT LISTENER POPULATES THE QUESTION AND ANSWER TO SCREEN
// ***************************************************************
let finalScore = 0;
let maxScore = 10;
let question = 0;

let randomIndex = 0;
let nQuestion = document.querySelector("#nextBtn");
let resetBtn = document.querySelector("#resetBtn");
let exitBtn = document.querySelector("#exitBtn");


//randomIndex = Math.floor(Math.random() * triviaGame.length);

nQuestion.addEventListener("click", function() {
  //GET THE RANDOM ITEM FROM ARRAY OF OBJECTS
  randomIndex = Math.floor(Math.random() * triviaGame.length);
  // console.log(randonIndex);
  questionDiv.innerHTML = triviaGame[randomIndex].Question;
  firstAnswer.innerHTML = triviaGame[randomIndex].Answer[0];
  secondAnswer.innerHTML = triviaGame[randomIndex].Answer[1];
  thirdAnswer.innerHTML = triviaGame[randomIndex].Answer[2];
  forthAnswer.innerHTML = triviaGame[randomIndex].Answer[3];
});

//***************************************************************
//***************************************************************

//FUNCTION MAKE A NEW SCREEN OF QUESTION AND ANSWERS
function nextQuestion() {
  randomIndex = Math.floor(Math.random() * triviaGame.length);
  questionDiv.innerHTML = triviaGame[randomIndex].Question;
  firstAnswer.innerHTML = triviaGame[randomIndex].Answer[0];
  secondAnswer.innerHTML = triviaGame[randomIndex].Answer[1];
  thirdAnswer.innerHTML = triviaGame[randomIndex].Answer[2];
  forthAnswer.innerHTML = triviaGame[randomIndex].Answer[3];

  

}

function reachTwenty() {
  alert("YOU WON THE GAME!!!!!!!!!!!!!");
}
//RESET BUTTON WORKS, REFRESHES THE WHOLE PAGE.

resetBtn.addEventListener("click", function() {
  location.reload();
});

exitBtn.addEventListener("click", function() {
  document.location.href =
    "https://pmorales4.github.io/project-1-collegebasketball/";
});

//******************************************* */

let answerBtn = document.querySelector("span");
console.log(answerBtn);

let wrongAnswer = document.querySelector('span');
console.log(wrongAnswer);
//FIRST EVENT LISTENER BUTTON - CODE BELOW.
//RANDOMLY SELECTS QUESTION AND FINDS ANSWERS
//ONCE FOUND - LOGIC IS EITHER ANSWER IS TRUE FOR RIGHT
//FALSE FOR WRONG
//IF TRUE SCORE INCREMENTS BY 1
//GOERS TO NEXT QUESTION.



firstAnswer.addEventListener("click", function() {
  let pp = triviaGame[randomIndex].Answer[0] == triviaGame[randomIndex].Correct;
  console.log(pp);
  if (pp === true) {
     finalScore = finalScore + 1;
    nextQuestion();
    answerBtn.innerHTML = finalScore;
    if (finalScore == maxScore) {
      reachTwenty();
    }
  } else {//pp === false;
  finalScore = finalScore - 1;
  wrongAnswer.innerHTML = finalScore;
  }
  nextQuestion();

});

secondAnswer.addEventListener("click", function() {
  let pp = triviaGame[randomIndex].Answer[1] == triviaGame[randomIndex].Correct;
  console.log(pp);
  if (pp === true) {
    finalScore = finalScore + 1;
    nextQuestion();
    answerBtn.innerHTML = finalScore;
    if (finalScore == maxScore) {
      
      reachTwenty();
    }
  } else {//pp === false;
    finalScore = finalScore - 1;
    wrongAnswer.innerHTML = finalScore;
  }
  nextQuestion();
});

thirdAnswer.addEventListener("click", function() {
  let pp = triviaGame[randomIndex].Answer[2] == triviaGame[randomIndex].Correct;
  console.log(pp);
  if (pp === true) {
    finalScore = finalScore + 1;
    nextQuestion();
    answerBtn.innerHTML = finalScore;
    if (finalScore == maxScore) {
      reachTwenty();
    }
  } else {//pp === false;
    finalScore = finalScore - 1;
    wrongAnswer.innerHTML = finalScore;
  }
  nextQuestion();
});

forthAnswer.addEventListener("click", function() {
  let pp = triviaGame[randomIndex].Answer[3] == triviaGame[randomIndex].Correct;
  console.log(pp);
  if (pp === true) {
    finalScore = finalScore + 1;
    nextQuestion();
    answerBtn.innerHTML = finalScore;
    if (finalScore == maxScore) {
      reachTwenty();
    }
  } else {//pp === false 
    finalScore = finalScore - 1;
    wrongAnswer.innerHTML = finalScore;
  }
  nextQuestion();
});
