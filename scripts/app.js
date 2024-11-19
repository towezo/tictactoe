let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 0;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const confirmPlayerNameBtnElement = document.getElementById("confirm-name-btn");
const startNewGameBtnElement = document.getElementById("new-game-btn");
const gameAreaElement = document.getElementById("active-game");
const gameFieldelements = document.querySelectorAll("#game-board li");
const activePlayerNameElement = document.getElementById("active-player-name");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

for (gameFieldelement of gameFieldelements) {
  gameFieldelement.addEventListener("click", selectGameField);
}
