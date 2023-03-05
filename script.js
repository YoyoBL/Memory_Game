let $colors = document.querySelectorAll(".color");
let $playArea = document.getElementById("play-area");
let $playBtn = document.getElementById("play-btn");

function getRandomNum() {
  return Math.floor(Math.random() * 3);
}

let colors = ["purple", "orange", "cyan"];

let aiColorSequence = [];

let playerColorSequence = [];

function play() {
  $playBtn.classList.add("d-none");
  aiColors();
}

// function to erase Play-Area
function resetPlayArea() {
  $playArea.innerHTML = "";
}

// function that adds colors to Plat area
function addColorToPlayArea(num) {
  $playArea.innerHTML += `<div class="col">
      <div class="color me-2 ${colors[num]}"></div>
    </div>`;
}

let colorsToRemember = 3;

function aiColors() {
  for (let i = 0; i < colorsToRemember; i++) {
    let color = getRandomNum(); //get random number
    addColorToPlayArea(color);
    aiColorSequence[i] = colors[color];
  }
  setTimeout(resetPlayArea, 4000);
}

// player click on color
let numberOfColors = 0; // tracks how many colors the player picked

function colorClick(num) {
  addColorToPlayArea(num);
  playerColorSequence.push(colors[num]);
  numberOfColors++;
  let globalCounter = 0;

  if (numberOfColors === colorsToRemember) {
    let rightAnswers = 0;
    for (let i in aiColorSequence) {
      if (aiColorSequence[i] === playerColorSequence[i]) {
        rightAnswers++;
      }
    }
    if (rightAnswers === colorsToRemember) {
      setTimeout(function () {
        $playArea.innerHTML = "Well Played! \n\r Moving to next level.";
        aiColorSequence = [];
        playerColorSequence = [];
      }, 500);
      colorsToRemember++;
      numberOfColors = 0;
      setTimeout(function () {
        resetPlayArea();
        aiColors();
      }, 2500);
    }
  }
}
