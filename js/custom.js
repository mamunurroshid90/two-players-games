let heading_1 = document.querySelector(".heading-1");
let heading_2 = document.querySelector(".heading-2");
let heading_3 = document.querySelector(".heading-3");
let heading_4 = document.querySelector(".heading-4");

// player one
let playerOneNameEl = document.querySelector(".player-one-name");
let playerOneInputEl = document.querySelector(".player-one-input");

// player two
let playerTwoNameEl = document.querySelector(".player-two-name");
let playerTwoInputEl = document.querySelector(".player-two-input");

let buttons = document.querySelectorAll("button");
let error_number = document.querySelector(".error");
console.log(error_number);

let boxFirstPlayerNameEl = document.querySelector(".box-first-player-name");
let boxFirstPlayerInputEl = document.querySelector(".box-first-player-input");
let boxSecondPlayerNameEl = document.querySelector(".box-second-player-name");
let boxSecondPlayerInputEl = document.querySelector(".box-second-player-input");
// result show
let player_one = document.querySelector(".player-one");
let player_two = document.querySelector(".player-two");

buttons.forEach((button, step) => {
  button.addEventListener("click", function () {
    boxFirstPlayerNameEl.style.display = "none";
    boxFirstPlayerInputEl.style.display = "none";
    boxSecondPlayerNameEl.style.display = "none";
    boxSecondPlayerInputEl.style.display = "none";

    // show or hide boxes
    if (step === 0) {
      // user clicked on first box's button
      boxFirstPlayerInputEl.style.display = "flex";
      heading_2.innerHTML = playerOneNameEl.value;
    } else if (step === 1) {
      boxSecondPlayerNameEl.style.display = "flex";
    } else if (step === 2) {
      heading_4.innerHTML = playerTwoNameEl.value;
      boxSecondPlayerInputEl.style.display = "flex";
    } else if (step === 3) {
      // milao
      if (playerOneInputEl.value === playerTwoInputEl.value) {
        player_two.innerHTML = "Player two win the game";
        player_two.style.display = "flex";
        error_number.innerHTML = "Please enter a number between 0 - 10";
      } else {
        player_one.innerHTML = "Player one win the game";
        player_one.style.display = "flex";
      }
    }
  });
});
