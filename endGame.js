const endGame = require("./index");


document.querySelector("h1").innerHTML= endGame.result;
console.log (endGame.result );

if (endGame.result = "Game over"){
    document.querySelector(".victoryImg").src = "/img/defeat.gif"; 
}else if (endGame.result = "Victoire"){
    document.querySelector(".victoryImg").src = "/img/victory.gif"; 
}else{
    document.querySelector(".victoryImg").src = "spaceShuttle.jpg"; 
}