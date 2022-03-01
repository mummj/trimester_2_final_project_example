'use strict'

const apple = document.createElement('img');
const background = document.getElementById('gameBackground');
const scoreboard = document.createElement('h2');
const scoreboardBackground = document.getElementById('scoreboardbackground');
var score = -1;

function randomStart(){
  var min = 0;
  var max = 100;
  var number = Math.floor(Math.random()* (max-min +1) + min);
  return(number);
}

function start(){  
  apple.setAttribute("src", "/img/apple.jpg");
  document.body.appendChild(apple);
  var startingPossition = randomStart();
  apple.style.left = startingPossition + '%';
}
function scoreCalculator(){
  ++score;
  scoreboard.textContent = "your score:" + " " + score;
  scoreboardBackground.appendChild(scoreboard);
}
scoreCalculator();
start();

apple.addEventListener('click', scoreCalculator)
background.addEventListener('click', start);


