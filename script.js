let stockPlayer = 100;
let stockBot = 100;
let divStockPlayer = document.querySelector('.stockPlayer')
let divStockBot = document.querySelector('.stockBot')
let randomBotStake = missilesNumberBot(stockBot);


const historicDiv = document.querySelector('.historicContainer')

let playerLife = 3
let botLife = 3
 

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

fireButton.addEventListener("click", function(){

    if (typeof (recoverMissilePlayer()) === 'number' && recoverMissilePlayer() >= 0 && recoverMissilePlayer() <= 100){
        if (recoverMissilePlayer() > randomBotStake)
    
        {   
            
            const winningPhrase = `Vous avez envoyé ${recoverMissilePlayer()} missiles. Bot a tiré ${randomBotStake} missiles.<br/> Vous avez gagné. <br/> `;
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
            console.log(`Nombre de vie du Bot : ${botLife}`)
            

            
        }
    else if (randomBotStake > recoverMissilePlayer() ) {
            
            const losingPhrase = `Vous avez envoyé ${recoverMissilePlayer()} missiles. Bot a tiré ${randomBotStake} missiles.<br/> Vous avez perdu. <br/> `;
            historicDiv.innerHTML += losingPhrase
            switch(playerLife) {
                case 3: playerHeart3 = document.querySelector('.heartPlayer3')
                playerHeart3.src = 'img/heart.png'; break;
                case 2: playerHeart2 = document.querySelector('.heartPlayer2')
                playerHeart2.src = 'img/heart.png'; break;
                case 1: playerHeart1 = document.querySelector('.heartPlayer1')
                playerHeart1.src = 'img/heart.png'; break;

            }
            playerLife--
            console.log(`Nombre de vie du Joueur : ${playerLife}`)
            
            
    }
    if (recoverMissilePlayer() === randomBotStake ) {
        const drawPhrase = `Vous avez envoyé ${recoverMissilePlayer()} missiles. Bot a tiré ${randomBotStake} missiles.<br/> La manche doit être rejoué. <br/> `;
        historicDiv.innerHTML += drawPhrase
        
        

    }
    stockBot -= randomBotStake;
    
    stockPlayer -= recoverMissilePlayer();
    divStockBot.innerHTML = `Stock : ${stockBot}`
    divStockPlayer.innerHTML = `Stock : ${stockPlayer}`
    randomBotStake = missilesNumberBot(stockBot)
    

    } else {
        console.log("error");
        historicDiv.innerHTML += `Erreur : mise possible entre 0 et 100. <br/>`

    }  

    
   
   
});






// FONCTION COMPARE //

/*fireButton.addEventListener('click', compare());*/
/*function compare() {
    

    if (recoverMissilePlayer() > missilesNumberBot(stockBot))
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
    else if (missilesNumberBot(stockBot) > recoverMissilePlayer() ) {
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
    
    if (recoverMissilePlayer() === missilesNumberBot(stockBot) ) {
            historicDiv.innerHTML += drawPhrase

    }
    stockBot -= missilesNumberBot(stockBot);
    stockPlayer -= recoverMissilePlayer();
    /*divStockBot.innerHTML = `Stock : ${stockBot}`
    divStockPlayer.innerHTML = `Stock : ${stock}`
}

*/

