var canvas;

var gameState = 0;
var playerCount;
var allPlayers = [];
var progress = 0;
var database;

var form, player, game;

var players = [];

function preload(){
  
}


function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
