// INPUT REMIS A ZERO

document.querySelector(".fireButton").addEventListener("click", function(){
    console.log(document.querySelector(".inputMissiles").value= 0);

});

//CHECK FIN DE PARTIE : SI VIE BOT = 0, SI VIE JOUEUR = 0, SI 2 STOCKS = 0

let result = ""; 

if (lifePlayer == 0 && lifeBot > 0) {
    result = "Game over";

}else if (lifeBot == 0 && lifePlayer > 0){
    result = "Victoire";

}else if (((stockPlayer+stockBot) == 0) || ((lifePlayer+lifeBot)==0) ) {
    if (lifePlayer > lifeBot){
        result = "Victoire";
    } else if (lifePlayer < lifeBot){
        result = "Game over";
    } else{
        result = "Match nul";
    }
}

export {
    result,
}