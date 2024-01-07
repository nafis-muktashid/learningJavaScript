"use strict";


//Simple example of DOM(document) manipulation
console.log(document.querySelector('.message').textContent);

//Manipulating a text to something else;
document.querySelector('.message').textContent = 'You got it!!!';
console.log(document.querySelector('.message').textContent);

//more example
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 1;



//Event handling example - Button click
const x = function () {
  console.log(21);
};
// document.querySelector('.check').addEventListener('click', x);



let rightNumber = Math.trunc(Math.random() * 20) + 1;
let scr = 20;
let highScr = 0;

function winWin() {
  document.querySelector(".number").textContent = rightNumber;
  document.querySelector(".message").textContent = "You won!!!";

  if (highScr === 0) {
    document.querySelector(".highscore").textContent = scr;
    highScr = scr;
  } else if (scr > highScr) {
    document.querySelector(".highscore").textContent = scr;
    highScr = scr;
  }
  
  //manipulating CSS
  document.querySelector("body").style.backgroundColor = "#60b347";
  //value with unit
  document.querySelector(".number").style.width = "30rem";
}

function lowLow() {
  document.querySelector(".message").textContent = "Number is low";
  --scr;
  document.querySelector(".score").textContent = scr;
}

function highHigh() {
  document.querySelector(".message").textContent = "Number is high";
  --scr;
  document.querySelector(".score").textContent = scr;
}



//Check Button DOM Manipulation
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  
  //it can be made nested when added an action listener/ event listener
    document.querySelector('.message').textContent = 'You got it!!!'; 
  
  if (!guess) {
    document.querySelector(".message").textContent = "No Number entered";
  } else if (guess === rightNumber) {
    winWin();
  } else if (guess > rightNumber) {
    if (scr > 1) highHigh();
    else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "You Loseee!!!!!";
    }
  } else if (guess < rightNumber) {
    if (scr > 1) lowLow();
    else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "You Loseee!!!!!";
    }
  }  
});



//Again Button DOM Manipulation
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  rightNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing again!";
  scr = 20;
  document.querySelector(".score").textContent = scr;
});








