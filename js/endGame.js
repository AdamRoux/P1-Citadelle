// import {
//     result,
// } from './script.js'


let statut = localStorage.getItem("citadelleStatut");
localStorage.setItem("citadelleStatut", "");

document.querySelector("h1").innerHTML= statut;

if (statut == "Victoire"){
    document.querySelector(".victoryImg").src = "/img/victory.gif"; 
}else if (statut == "Game over"){
    document.querySelector(".victoryImg").src = "/img/defeat.gif"; 
}else if (statut == "Match nul") {
    document.querySelector(".victoryImg").src = "img/spaceShuttle.png"; 
} else {
    document.querySelector("h1").innerHTML= "Dit donc... ça veut tricher ?"
    document.querySelector(".victoryImg").src = ""; 
}