// let playerScore = 0;

// first move this array into a new js file
// load array.js before
// gameLogic.js
//DONE ***************************************************

//function()
// loop over Answer to then
// document.createElement('button).innerHTML = `${answer[i]}`

for(i = 0; i < 20; i++){
  //THIS WORKS ***********************************
 // let randonIndex = Math.floor(Math.random() * triviaGame.length);
 let prtAnswer = triviaGame[i].Answer[0]
if(prtAnswer == triviaGame[i].Correct){
  //console.log('they match');
};
  }
console.log('------------------------------')

console.log(triviaGame[1].Answer);


  // for(j = 0; j < 20; j++){
  // let correctAnswer = triviaGame[j].Correct
  // console.log(correctAnswer);
  //   }


let a = triviaGame[19].Correct
//console.log(a);

//EXAMPLE BUTTON BELOW IN INDEX.HTML

let answerBtn = document.createElement("button");
answerBtn.id = "answerBtn";
answerBtn.setAttribute("align", "center");
//answerBtn.appendChild(easyGameBtn);
//document.body.appendChild(answerBtn).innerHTML = Answer[i];
document.body.appendChild(answerBtn);

let firstAnswer = document.querySelector('#firstAnswer');
let secondAnswer = document.querySelector('#secondAnswer');
let thirdAnswer = document.querySelector('#thirdAnswer');
let forthAnswer = document.querySelector('#forthAnswer');
// console.log(firstAnswer);
// console.log(secondAnswer);
// console.log(thirdAnswer);
// console.log(forthAnswer);

let randonIndex = Math.floor(Math.random() * triviaGame.length);
  let randomAnswer = firstAnswer.innerHTML = triviaGame[randonIndex].Answer;
  //console.log(randomAnswer);






//firstAnswer.setAttribute('align', "center");
//document.body.appendChild(firstAnswer);
//firstAnswer.innerHTML = triviaGame[randonIndex].Answer;
//let randonIndex = Math.floor(Math.random() * triviaGame.length);
let firstAnswer0 = firstAnswer.innerHTML = triviaGame[randonIndex].Answer;
// console.log(firstAnswer0);
let secondAnswer1 = secondAnswer.innerHTML = triviaGame[randonIndex].Answer;
// console.log(secondAnswer1);
let thirdAnswer2 = thirdAnswer.innerHTML = triviaGame[randonIndex].Answer;
// console.log(thirdAnswer2);
let forthAnswer3 = forthAnswer.innerHTML = triviaGame[randonIndex].Answer;
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

let nQuestion = document.querySelector("#nextBtn");

nQuestion.addEventListener("click", function() {
 
  let randonIndex = Math.floor(Math.random() * triviaGame.length);
  questionDiv.innerHTML = triviaGame[randonIndex].Question;
 answerDiv.innerHTML = triviaGame[randonIndex].Answer;
 // console.log(answerBtn.innerHTML = triviaGame[randonIndex].Correct);
})

// let randonIndex = Math.floor(Math.random() * triviaGame.length);
// let clickAnswer = answerDiv.innerHTML = triviaGame[randonIndex].Answer;





//3 lines below work well. ***********************************************
// let randonIndex = Math.floor(Math.random() * triviaGame.length);
// questionDiv.innerHTML = triviaGame[randonIndex].Question;
// answerDiv.innerHTML = triviaGame[randonIndex].Answer;

// for (let i = 0; i < triviaGame.length; i++) {
//     triviaGame[i].innerHTML = triviaGame[randomIndex].Answer;
//   }
