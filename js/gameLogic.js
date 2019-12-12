questionDiv.innerHTML = triviaGame[0].Question;
firstAnswer.innerHTML = triviaGame[0].Answer[0];
secondAnswer.innerHTML = triviaGame[0].Answer[1];
thirdAnswer.innerHTML = triviaGame[0].Answer[2];
forthAnswer.innerHTML = triviaGame[0].Answer[3];

//function()
// loop over Answer to then
// document.createElement('button).innerHTML = `${answer[i]}`

// ***************************************************************
// THIS EVENT LISTENER POPULATES THE QUESTION AND ANSWER TO SCREEN
// ***************************************************************
let finalScore = 0;
let maxScore = 20;

let nQuestion = document.querySelector("#nextBtn");

nQuestion.addEventListener("click", function() {
  //for (p = 0; p < triviaGame.length; p++) {
  //GET THE RANDOM ITEM FROM ARRAY OF OBJECTS
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  // console.log(randonIndex);
  questionDiv.innerHTML = triviaGame[randonIndex].Question;
  // console.log(questionDiv);
  // let firstAnswer = document.querySelector("#firstAnswer");
  // let secondAnswer = document.querySelector("#secondAnswer");
  // let thirdAnswer = document.querySelector("#thirdAnswer");
  // let forthAnswer = document.querySelector("#forthAnswer");
  firstAnswer.innerHTML = triviaGame[randonIndex].Answer[0];
  // console.log(firstAnswer);
  secondAnswer.innerHTML = triviaGame[randonIndex].Answer[1];
  // console.log(secondAnswer);
  thirdAnswer.innerHTML = triviaGame[randonIndex].Answer[2];
  // console.log(thirdAnswer);
  forthAnswer.innerHTML = triviaGame[randonIndex].Answer[3];
  // console.log(forthAnswer);
  //}
});

//***************************************************************
//***************************************************************

function nextQuestion() {
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  questionDiv.innerHTML = triviaGame[randonIndex].Question;
  firstAnswer.innerHTML = triviaGame[randonIndex].Answer[0];
  secondAnswer.innerHTML = triviaGame[randonIndex].Answer[1];
  thirdAnswer.innerHTML = triviaGame[randonIndex].Answer[2];
  forthAnswer.innerHTML = triviaGame[randonIndex].Answer[3];
}

let answerBtn = document.querySelector("span");
console.log(answerBtn);

// firstAnswer.addEventListener("click", function() {
//   let randonIndex = Math.floor(Math.random() * triviaGame.length);
//   //questionDiv.innerHTML = triviaGame[0].Question;
//   for (i = 0; i < triviaGame.length; i++) {
//   if (triviaGame[randonIndex].Answer[0] == triviaGame[i].Correct) {
//     console.log("right answer");

//     finalScore = finalScore + 1;
//     if (finalScore == 20){
//     console.log(finalScore);
//     alert('YOU WON GAME *************');
//   }
//     answerBtn.innerHTML = finalScore;
//   }
// }
// });

secondAnswer.addEventListener("click", function() {
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  for (i = 0; i < triviaGame.length; i++) {
    if (triviaGame[i].Answer[1] == triviaGame[i].Correct) {
      console.log("right answer");
      finalScore = finalScore + 1;
      nextQuestion();
    } else if (triviaGame[i].Answer[1] !== triviaGame[i].Correct) {
      console.log("wrong answer");
      nextQuestion();
    }

    // finalScore = finalScore + 1;
    if (finalScore == maxScore) {
      console.log(finalScore);
      answerBtn.innerHTML = finalScore;
    }
  }
});

thirdAnswer.addEventListener("click", function() {
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  for (i = 0; i < triviaGame.length; i++) {
    if (triviaGame[i].Answer[2] == triviaGame[i].Correct) {
      console.log("right answer");
      finalScore = finalScore + 1;
      nextQuestion();
    } else if (triviaGame[i].Answer[2] !== triviaGame[i].Correct) {
      console.log("wrong answer");
      nextQuestion();
    }

    if (finalScore == maxScore) {
      //finalScore = finalScore + 1;
      console.log(finalScore);
      answerBtn.innerHTML = finalScore;
    }
  }
});

forthAnswer.addEventListener("click", function() {
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  for (i = 0; i < triviaGame.length; i++) {
    if (triviaGame[i].Answer[3] == triviaGame[i].Correct) {
      console.log("right answer");
      finalScore = finalScore + 1;
      nextQuestion();
    } else if (triviaGame[i].Answer[3] !== triviaGame[i].Correct) {
      console.log("wrong answer");
      nextQuestion();
    }

    if (finalScore == maxScore) {
      console.log(finalScore);
      answerBtn.innerHTML = finalScore;
    }
  }
});

firstAnswer.addEventListener("click", function() {
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  //questionDiv.innerHTML = triviaGame[0].Question;
  for (i = 0; i < triviaGame.length; i++) {
    console.log(triviaGame[i]);
    if (triviaGame[i].Answer[0] == triviaGame[i].Correct) {
      console.log("right answer");
      finalScore = finalScore + 1;
      nextQuestion();
    } else if (triviaGame[i].Answer[0] !== triviaGame[i].Correct) {
      console.log("wrong answer");
      nextQuestion();
    }

    //finalScore = finalScore + 1;
    if (finalScore == maxScore) {
      console.log(finalScore);

      //}
      answerBtn.innerHTML = finalScore;
    }
  }
});

//RESET BUTTON WORKS, REFRESHES THE WHOLE PAGE.
let resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener("click", function() {
  location.reload();
});

let exitBtn = document.querySelector("#exitBtn");
exitBtn.addEventListener("click", function() {
  exit();
});

// checkingLogic()
// userclick = chosenAnswer
// chosenAnswer == obj.correct => score()
// if user is wrong => nextQuestion() don't add to score

// timer()
//setTimeout() REASEARCH THIS
// .innerHTML = i

// score()
// 0 and then +1 everytime the user is right
//
// {
//   Question: "Who received the First Naismith College Coach of the Year Award?",
//   Correct: "Coach Bobby Knight",
//   Answer: [
//     "Coach Bobby Knight",
//     "Coach Tom Moore",
//     "Coach Jim Boeheim",
//     "Coach Jim Calhoun",
//   ],
// },

//
