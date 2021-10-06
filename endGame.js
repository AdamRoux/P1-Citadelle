import {
    result,
} from './js/index.js'

document.querySelector("h1").innerHTML= result;
console.log (result);

if (result == "Victoire"){
    document.querySelector(".victoryImg").src = "/img/victory.gif"; 
}else if (result == "Game over"){
    document.querySelector(".victoryImg").src = "/img/defeat.gif"; 
}else{
    document.querySelector(".victoryImg").src = "img/spaceShuttle.png"; 
}