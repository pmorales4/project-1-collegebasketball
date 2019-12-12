
questionDiv.innerHTML = triviaGame[0].Question;
firstAnswer.innerHTML = triviaGame[0].Answer[0];
secondAnswer.innerHTML = triviaGame[0].Answer[1];
thirdAnswer.innerHTML = triviaGame[0].Answer[2];
forthAnswer.innerHTML = triviaGame[0].Answer[3];




//function()
// loop over Answer to then
// document.createElement('button).innerHTML = `${answer[i]}`

// for (i = 0; i < 20; i++) {
//   //THIS WORKS ***********************************
//   // let randonIndex = Math.floor(Math.random() * triviaGame.length);
//   let prtAnswer = triviaGame[i].Answer[0];
//   if (prtAnswer == triviaGame[i].Correct) {
//     //console.log('they match');
//   }
// }
//console.log('------------------------------')


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
  for (p = 0; p < triviaGame.length; p++) {
    //GET THE RANDOM ITEM FROM ARRAY OF OBJECTS
    let randonIndex = Math.floor(Math.random() * triviaGame.length);
    questionDiv.innerHTML = triviaGame[randonIndex].Question;
    // let firstAnswer = document.querySelector("#firstAnswer");
    // let secondAnswer = document.querySelector("#secondAnswer");
    // let thirdAnswer = document.querySelector("#thirdAnswer");
    // let forthAnswer = document.querySelector("#forthAnswer");
    firstAnswer.innerHTML = triviaGame[randonIndex].Answer[0];
    secondAnswer.innerHTML = triviaGame[randonIndex].Answer[1];
    thirdAnswer.innerHTML = triviaGame[randonIndex].Answer[2];
    forthAnswer.innerHTML = triviaGame[randonIndex].Answer[3];
  }
});

//***************************************************************
//***************************************************************

let answerBtn = document.querySelector("span");
console.log(answerBtn);


firstAnswer.addEventListener("click", function() {
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  //questionDiv.innerHTML = triviaGame[0].Question;
  if (triviaGame[randonIndex].Answer[0] == triviaGame[randonIndex].Correct) {
    console.log("you got the right answer on index 0");
    finalScore = finalScore + 1;
    console.log(finalScore);
    answerBtn.innerHTML = finalScore;
  }
});

secondAnswer.addEventListener("click", function() {
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  if (triviaGame[randonIndex].Answer[1] == triviaGame[randonIndex].Correct) {
    console.log("you got the right answer on index 1 ");
    finalScore = finalScore + 1;
    console.log(finalScore);
    answerBtn.innerHTML = finalScore;
  }
});

thirdAnswer.addEventListener("click", function() {
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  if (triviaGame[randonIndex].Answer[2] == triviaGame[randonIndex].Correct) {
    console.log("you got the right answer on index 2");
    finalScore = finalScore + 1;
    console.log(finalScore);
    answerBtn.innerHTML = finalScore;
  }
});

forthAnswer.addEventListener("click", function() {
  let randonIndex = Math.floor(Math.random() * triviaGame.length);

  if (triviaGame[randonIndex].Answer[3] == triviaGame[randonIndex].Correct) {
    console.log("you got the right answer on index 3");
    finalScore = finalScore + 1;
    console.log(finalScore);
    answerBtn.innerHTML = finalScore;
  }
});


//let x = triviaGame[randonIndex].Answer
//console.log(x);
//x[Math.floor(Math.random()) * triviaGame.Answer];
//console.log(x);
//x.forEach(element => console.log(element));
//______________________________________________________________
//let randonIndex = Math.floor(Math.random() * triviaGame.length);
// let el = Math.floor(Math.random(x) * triviaGame[0].Answer.length);
// if(el == 0){
//   console.log(triviaGame[randonIndex].Answer[0])
// } else if (el == 1){
//   console.log(triviaGame[randonIndex].Answer[1])
// } else if (el == 2){
//   console.log(triviaGame[randonIndex].Answer[2])
// } else {
//   console.log(triviaGame[randonIndex].Answer[3])
// }
// console.log(el);
//________________________________________________________


//********************************************************* */
//*************IMPORTANT LLOOP THROUGH WEEL..   */
// for (u = 0; u < answerElements.length; u++){
// questionDiv.innerHTML = triviaGame[randonIndex].Question;
// answerElements[u].innerHTML = triviaGame[randonIndex].Answer[u];
// //console.log(answerElements);
// }
//********************************** */



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
