'use strict'

const apple = document.createElement('img');
const background = document.getElementById('gameBackground');
const scoreboard = document.createElement('h2');
const scoreboardBackground = document.getElementById('scoreboardbackground');
var score = -1;
var clicks = 0;

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
start();
scoreCalculator();


apple.addEventListener('click', scoreCalculator)
background.addEventListener('click', start);

setTimeout(function(){
  document.body.removeChild(apple);
  scoreboardBackground.removeChild(scoreboard);
  var newBackground = document.getElementById('background');
  newBackground.style.backgroundImage = "url('/img/appleBasket.jpg')"
  newBackground.style.backgroundSize = "cover";
  var title = document.createElement('h2');
  title.textContent = 'Your Final Score is:';
  title.setAttribute("id","title");
  background.appendChild(title);
  var finalScore = document.createElement('h2');
  finalScore.textContent=score;
  finalScore.setAttribute("id", "finalScore");
  background.appendChild(finalScore);
  var playAgain = document.createElement('button');
  playAgain.textContent = "Play Again!"
  playAgain.setAttribute("type", "button");
  playAgain.onclick=function(){
    window.location.href="/index.html"
  }
  background.appendChild(playAgain);
},30000);


