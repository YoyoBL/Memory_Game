let $colors = document.querySelectorAll(".color");
let $playArea = document.getElementById("play-area");

let $level = document.getElementById("level");
let level = 1;

function getRandomNum() {
  return Math.floor(Math.random() * 3);
}

let colors = ["purple", "orange", "cyan"];

let aiColorSequence = [];

let playerColorSequence = [];

function play() {
  document.getElementById("play-btn").classList.add("d-none");
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
let globalCounter = 0;

function colorClick(num) {
  addColorToPlayArea(num);
  playerColorSequence.push(colors[num]);
  numberOfColors++;
  globalCounter++;

  if (numberOfColors === colorsToRemember) {
    let rightAnswers = 0;
    for (let i in aiColorSequence) {
      if (aiColorSequence[i] === playerColorSequence[i]) {
        rightAnswers++;
      }
    }
    if (rightAnswers === colorsToRemember) {
      setTimeout(function () {
        $playArea.classList.toggle("bg-body");
        $playArea.classList.add("bg-green");

        level++;
        $playArea.innerHTML = `Well Played! \n\r Moving to level ${level}.`;
        aiColorSequence = [];
        playerColorSequence = [];
        globalCounter = 0;
        $level.innerHTML = level;
      }, 500);
      colorsToRemember++;
      numberOfColors = 0;
      setTimeout(function () {
        $playArea.classList.toggle("bg-green");
        $playArea.classList.toggle("bg-body");

        resetPlayArea();
        aiColors();
      }, 2500);
    } else if (globalCounter === colorsToRemember) {
      setTimeout(function () {
        $playArea.classList.toggle("bg-body");

        $playArea.classList.add("bg-danger", "text-white");
        $playArea.innerHTML = "Game Over!";
        aiColorSequence = [];
        playerColorSequence = [];
        globalCounter = 0;
        numberOfColors = 0;
        colorsToRemember = 3;
        level = 1;
        $level.innerHTML = level;
      }, 500);
      setTimeout(function () {
        $playArea.classList.toggle("bg-body");
        $playArea.classList.toggle("bg-danger", "text-white");

        resetPlayArea();
        $playArea.innerHTML = `<button onclick="play()" id="play-btn" class="btn btn-danger fs-3">
        Play!
      </button>`;
      }, 2500);
    }
  }
}
