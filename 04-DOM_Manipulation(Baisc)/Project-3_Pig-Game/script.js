"use strict";

//variables
const score = [0, 0];
let currScore = 0;
let rollScore = 0;
let currPlayer = 0;
let playing = true;


//Selection-Variables
const p1ScoreSelect = document.querySelector("#score--0");
const p2ScoreSelcet = document.querySelector("#score--1");
const p1CurScrSelect = document.getElementById("current--0");
const p2CurScrSelect = document.getElementById("current--1");
const diceSelect = document.querySelector(".dice");
const newBtnSelect = document.querySelector(".btn--new");
const rollBtnSelect = document.querySelector(".btn--roll");
const holdBtnSelect = document.querySelector(".btn--hold");


//Switch Player Function
const switchPlayer = function () {
  currScore = 0;
  document.getElementById(`current--${currPlayer}`).textContent = currScore;
  currPlayer = currPlayer === 0 ? 1 : 0;
  p1Select.classList.toggle("player--active");
  p2Select.classList.toggle("player--active");
};


//New Game Function
const newGameFunc = function () {
  playing = true;
  score[0] = 0;
  score[1] = 0;
  currScore = 0;
  rollScore = 0;
  p1CurScrSelect.textContent = 0;
  p2CurScrSelect.textContent = 0;
  p1ScoreSelect.textContent = score[0];
  p2ScoreSelcet.textContent = score[1];
  diceSelect.classList.add("hidden");
  document
    .querySelector(`.player--${currPlayer}`)
    .classList.remove("player--winner");
  document.querySelector(`.player--0`).classList.add("player--active");
  currPlayer = 0;
};
newBtnSelect.addEventListener("click", newGameFunc);



//Roll Dice Function
const rollDiceFunc = function () {
  if (playing) {
    rollScore = Math.trunc(Math.random() * 6) + 1;
    diceSelect.classList.remove("hidden");
    diceSelect.src = `dice-${rollScore}.png`;
    //
    if (rollScore !== 1) {
      currScore += rollScore;
      document.getElementById(`current--${currPlayer}`).textContent = currScore;
    } else {
      switchPlayer();
    }
  }
};
rollBtnSelect.addEventListener("click", rollDiceFunc);



//Hold dice Function
const holdDiceFunc = function () {
  if (playing) {
    score[currPlayer] += currScore;
    document.getElementById(`score--${currPlayer}`).textContent =
      score[currPlayer];
    if (score[currPlayer] >= 100) {
      diceSelect.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${currPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currPlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
};
holdBtnSelect.addEventListener("click", holdDiceFunc);


