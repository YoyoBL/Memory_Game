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

// function hidePlayArea(divsToHide) {
//   for (let i in divsToHide){
//     divsToHide[i].classList.add("d-none");
//   };
// }

function hidePlayArea() {
  $playArea.innerHTML = "";
}

let colorsToRemember = 3;

function aiColors() {
  for (let i = 0; i < colorsToRemember; i++) {
    let color = getRandomNum(); //get random number
    $playArea.innerHTML += `<div class="col">
        <div class="color me-2 ${colors[color]}"></div>
      </div>`;
    aiColorSequence[i] = colors[color];
  }
  setTimeout(hidePlayArea, 4000);
}

function color(num) {}
