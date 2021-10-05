const playerMissiles = document.querySelector('.inputMissiles').value;
const historicDiv = document.querySelector('.historicContainer')
const winningPhrase = `Vous avez envoyé ${playerMissiles} missiles. Bot a tiré ${/*botMissiles*/} missiles. Vous avez gagné `;
const losingPhrase = `Vous avez envoyé ${playerMissiles} missiles. Bot a tiré ${/*botMissiles*/} missiles. Vous avez perdu `;
const drawPhrase = `Vous avez envoyé ${playerMissiles} missiles. Bot a tiré ${/*botMissiles*/} missiles. La manche doit être rejoué `;
let playerLife = 3
let botLife = 3

let stockPlayer = 100;
let stockBot = 100;



//RECUPERATION DU NOMBRE DE MISSILE DU JOUEUR
function recoverMissilePlayer(){
    const inputValue = document.querySelector('.inputMissiles');
    return parseInt(inputValue.value);
}


//RANDOMISATION DU NOMBRE DE MISSILES DU BOT
function missilesNumberBot(stockBot){
    return Math.floor(Math.random() * stockBot);
};



//LORSQUE L'ON CLIQUE SUR LE BOUTON FIRE => CHECK DE LA VALEUR DE L'INPUT SELON 3 CONDITIONS
const fireButton = document.querySelector(".fireButton");

fireButton.addEventListener("mouseover", function(){
    console.log("boutton")
    if (typeof (recoverMissilePlayer()) === 'number' && recoverMissilePlayer() >= 0 && recoverMissilePlayer() <= 100){
        console.log('Lancer la fonction de comparaison')
        console.log(`Mise du joueur : ${recoverMissilePlayer()}`);
        console.log(`Mise du bot : ${missilesNumberBot(stockBot)}`);
    } else {
        console.log("error");
    }  
});

console.log(playerMissiles)

// FONCTION COMPARE //

function compare() {

    if (  > /*mettre la fonction du nmbre de missile du bot*/ )
        {
            historicDiv.innerHTML += winningPhrase
            switch(botLife) {
                case 3: botHeart3 = document.querySelector('.heartBot3')
                botHeart3.src = 'img/heart.png'; break;
                case 2: botHeart2 = document.querySelector('.heartBot2')
                botHeart2.src = 'img/heart.png'; break;
                case 1: botHeart1 = document.querySelector('.heartBot1')
                botHeart1.src = 'img/heart.png'; break;
                
            }
            botLife--
            
        }
    else if (playerMissiles < /*botMissiles*/ ) {
            historicDiv.innerHTML += losingPhrase
            switch(playerLife) {
                case 3: playerHeart3 = document.querySelector('.heartPlayer3')
                playerHeart3.src = 'img/heart.png'; break;
                case 2: playerHeart2 = document.querySelector('.heartPlayer2')
                playerHeart3.src = 'img/heart.png'; break;
                case 1: playerHeart1 = document.querySelector('.heartPlayer1')
                playerHeart3.src = 'img/heart.png'; break;

            }
            playerLife--
            
    }
    
    if (playerMissiles === /*bot missiles*/) {
            historicDiv.innerHTML += drawPhrase

    }
    stockBot = (stockBot - missilesNumberBot());
    stockPlayer = (stockPlayer - playerMissiles);
}
