var database
var gameState = 0;
var playerCount = 0;
var form, player, game;

function setup(){
    createCanvas(400,400);
    
    

    database = firebase.database();

    console.log(database);
  
    game = new Game();
    game.getState();
 

    game.start();

    // ref() :  location for read and write eg: car  position
    // set() :  write to the database - update to dB 
    // on() : read from the database - get data from dB
    
}




function draw(){
    background("white");
}

