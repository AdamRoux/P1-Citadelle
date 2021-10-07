// INPUT REMIS A ZERO

document.querySelector(".fireButton").addEventListener("click", function(){
    document.querySelector(".inputMissiles").value= 0;

});

// CHECK FIN DE PARTIE : SI VIE BOT = 0, SI VIE JOUEUR = 0, SI 2 STOCKS = 0

let result = ""; 

if (playerLife == 0 && botLife > 0) {
    result = "Game over";

}else if (botLife == 0 && playerLife > 0){
    result = "Victoire";

}else if (((stockPlayer+stockBot) == 0) || ((playerLife+botLife)==0) ) {
    if (playerLife > botLife){
        result = "Victoire";
    } else if (playerLife < botLife){
        result = "Game over";
    } else{
        result = "Match nul";
    }
    window.location.href = '../victoryOver.html'
}

export {
    result,
}