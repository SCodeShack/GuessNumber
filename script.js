"use strict";

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = Secretnumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".start-guessing").textContent = `⛔ No Number!`;
  }

  if (guess === Secretnumber) {
    document.querySelector(".start-guessing").textContent = `Correct !`;
    document.querySelector("body").style.backgroundColor = "#60b347";
    // document.querySelector(".guess").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".number").textContent = Secretnumber;
  } else if (guess > Secretnumber) {
    if (score > 1) {
      document.querySelector(".start-guessing").textContent = " 📈 to High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("body").style.backgroundColor = "#b32727";
      //   document.querySelector(".guess").style.backgroundColor = "#b32727";
      document.querySelector(".score").textContent = 0;
      document.querySelector(
        ".start-guessing"
      ).textContent = `💥 You lost the game`;
    }
  } else if (guess < Secretnumber) {
    if (score > 1) {
      document.querySelector(".start-guessing").textContent = " 📉 to low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("body").style.backgroundColor = "#b32727";
      //   document.querySelector(".guess").style.backgroundColor = "#b32727";
      document.querySelector(".score").textContent = 0;
      document.querySelector(
        ".start-guessing"
      ).textContent = `💥 You lost the game`;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".start-guessing").textContent = "start guessing...";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
