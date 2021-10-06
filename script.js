let stockPlayer = 100;
let stockBot = 100;
let lifePlayer = 3;
let lifeBot = 3;


//RECUPERATION DU NOMBRE DE MISSILE DU JOUEUR
function recoverMissilePlayer(){
    const inputValue = document.querySelector('.inputMissiles');
    return parseInt(inputValue.value);
}

//RANDOMISATION DU NOMBRE DE MISSILES DU BOT
function missilesNumberBot(stock){
    return parseInt(Math.random()* stock);
};


//LORSQUE L'ON CLIQUE SUR LE BOUTON FIRE => CHECK DE LA VALEUR DE L'INPUT SELON 3 CONDITIONS
const fireButton = document.querySelector(".fireButton");

fireButton.addEventListener("click", function(){
    if (typeof (recoverMissilePlayer()) === 'number' && recoverMissilePlayer() >= 0 && recoverMissilePlayer() <= 100){
        console.log('Lancer la fonction de comparaison')
        console.log(`Mise du joueur : ${recoverMissilePlayer()}`);
        console.log(`Mise du bot : ${missilesNumberBot(stockBot)}`);
    } else {
        console.log("error");
    }  
});

