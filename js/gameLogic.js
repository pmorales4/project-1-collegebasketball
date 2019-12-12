// let playerScore = 0;
questionDiv.innerHTML = triviaGame[0].Question;
firstAnswer.innerHTML = triviaGame[0].Answer[0];
secondAnswer.innerHTML = triviaGame[0].Answer[1];
thirdAnswer.innerHTML = triviaGame[0].Answer[2];
forthAnswer.innerHTML = triviaGame[0].Answer[3];

// window onload

// first move this array into a new js file
// load array.js before
// gameLogic.js
//DONE ***************************************************

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

//console.log(triviaGame[1].Answer);
//console.log(triviaGame.length);
// for (i = 0; i < triviaGame.length; i++) {
  //console.log(triviaGame[i].Question);
// }
//console.log('------------------------------')
// for (i = 0; i < triviaGame.length; i++) {
  //console.log(triviaGame[i].Answer);
  //let firstAnswer = document.querySelector('#firstAnswer');
  //console.log(triviaGame[i].Answer[0]);
  //let randonIndex = Math.floor(Math.random() * triviaGame.length);
  //firstAnswer.innerHTML = triviaGame[i].Answer[0];
  //console.log(firstAnswer);
  // console.log(triviaGame[i].Answer[1]);
  // console.log(triviaGame[i].Answer[2]);
  // console.log(triviaGame[i].Answer[3]);
// }
// console.log('------------------------------')
// for(i = 0; i < triviaGame.length; i++){
// console.log(triviaGame[i].Correct);
//}

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

let answerBtn = document.createElement("button");
let answerGameBtn = document.createTextNode("SCORE: ");
answerBtn.id = "answerBtn";
answerBtn.setAttribute("align", "center");
answerBtn.appendChild(answerGameBtn);
document.body.appendChild(answerBtn);

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
// let randonIndex = Math.floor(Math.random() * triviaGame.length);
// let c = triviaGame[randonIndex].Answer == triviaGame[randonIndex].Correct;
// console.log(c);




// for(b = 0; b < 4; b++){

//need below line
//let x = triviaGame[0].Answer

// console.log(x);
// }

//need below line
//let randonIndex = Math.floor(Math.random() * triviaGame.length);

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

// for (x = 0; x < triviaGame.length; x++){
//   let randonIndex = Math.floor(Math.random() * triviaGame.length);
//   questionDiv.innerHTML = triviaGame[randonIndex].Question;
// }

//let randonIndex = Math.floor(Math.random() * triviaGame.length);
//let answerElements = document.querySelector('.inputAnswer');

//********************************************************* */
//*************IMPORTANT LLOOP THROUGH WEEL..   */
// for (u = 0; u < answerElements.length; u++){
// questionDiv.innerHTML = triviaGame[randonIndex].Question;
// answerElements[u].innerHTML = triviaGame[randonIndex].Answer[u];
// //console.log(answerElements);
// }
//********************************** */

//let a = triviaGame[19].Correct
//console.log(a);

//EXAMPLE BUTTON BELOW IN INDEX.HTML

//document.body.appendChild(answerBtn).innerHTML = Answer[i];

// let firstAnswer = document.querySelector("#firstAnswer");
// let secondAnswer = document.querySelector("#secondAnswer");
// let thirdAnswer = document.querySelector("#thirdAnswer");
// let forthAnswer = document.querySelector("#forthAnswer");
// console.log(firstAnswer);
// console.log(secondAnswer);
// console.log(thirdAnswer);
// console.log(forthAnswer);

//let randonIndex = Math.floor(Math.random() * triviaGame.length);
//let randomAnswer = firstAnswer.innerHTML = triviaGame[randonIndex].Answer;
//console.log(randomAnswer);

//firstAnswer.setAttribute('align', "center");
//document.body.appendChild(firstAnswer);
//firstAnswer.innerHTML = triviaGame[randonIndex].Answer;
//let randonIndex = Math.floor(Math.random() * triviaGame.length);

//let firstAnswer0 = firstAnswer.innerHTML = triviaGame[randonIndex].Answer;
// console.log(firstAnswer0);
//let secondAnswer1 = secondAnswer.innerHTML = triviaGame[randonIndex].Answer;
// console.log(secondAnswer1);
//let thirdAnswer2 = thirdAnswer.innerHTML = triviaGame[randonIndex].Answer;
// console.log(thirdAnswer2);
//let forthAnswer3 = forthAnswer.innerHTML = triviaGame[randonIndex].Answer;
// console.log(forthAnswer3);

// let randonIndex = Math.floor(Math.random() * triviaGame.length);
// answerDiv.innerHTML = triviaGame[randonIndex].Answer;

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

//********************************************************* */

//for (let j = 0; j < triviaGame.length; j++) {
//console.log(triviaGame[j]);
//

//how to grab one item in array
// let b = triviaGame[1].Question;
// let c = triviaGame[0].Answer;
//console.log(triviaGame[16].Answer17); // this grabs all separate answer the way its written.
//document.getElementById("gameDiv").innerHTML = b;
// console.log(b);
// console.log(c);

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
//************************************************************ */
//IMPORTANT CODE BELOW
// let nQuestion = document.querySelector("#nextBtn");

// nQuestion.addEventListener("click", function() {

//   let randonIndex = Math.floor(Math.random() * triviaGame.length);
//   questionDiv.innerHTML = triviaGame[randonIndex].Question;
//  answerDiv.innerHTML = triviaGame[randonIndex].Answer;
//  // console.log(answerBtn.innerHTML = triviaGame[randonIndex].Correct);
// })
//*********************************************************************** */
// let randonIndex = Math.floor(Math.random() * triviaGame.length);
// let clickAnswer = answerDiv.innerHTML = triviaGame[randonIndex].Answer;

//3 lines below work well. ***********************************************
// let randonIndex = Math.floor(Math.random() * triviaGame.length);
// questionDiv.innerHTML = triviaGame[randonIndex].Question;
// answerDiv.innerHTML = triviaGame[randonIndex].Answer;

// for (let i = 0; i < triviaGame.length; i++) {
//     triviaGame[i].innerHTML = triviaGame[randomIndex].Answer;
//   }
