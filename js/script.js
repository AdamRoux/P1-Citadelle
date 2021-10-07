let stockPlayer = 100;
let stockBot = 100;
const divStockPlayer = document.querySelector(".stockPlayer");
const divStockBot = document.querySelector(".stockBot");
 let randomBotStake = missilesNumberBot(stockBot);
const historicDiv = document.querySelector(".historicContainer");
let playerLife = 3;
let botLife = 3;
let result ='';



// RECUPERATION DU NOMBRE DE MISSILE DU JOUEUR
function recoverMissilePlayer() {
  const inputValue = document.querySelector(".inputMissiles");
  return parseInt(inputValue.value);
}

// RANDOMISATION DU NOMBRE DE MISSILES DU BOT
function missilesNumberBot(stock){
  return Math.floor(Math.random() * stock);
}

// LORSQUE L'ON CLIQUE SUR LE BOUTON FIRE => CHECK DE LA VALEUR DE L'INPUT SELON 3 CONDITIONS
const fireButton = document.querySelector(".fireButton");


fireButton.addEventListener("click", () => {
  if (typeof recoverMissilePlayer() === "number" && recoverMissilePlayer() >= 0 && recoverMissilePlayer() <= 100){ 
    if ((stockPlayer - recoverMissilePlayer()) < 0) {
      historicDiv.innerHTML += `Erreur : mise possible entre 0 et 100. <br/>`;
    } else {
       if (recoverMissilePlayer() > randomBotStake) {
          const winningPhrase = `Vous avez envoyé ${recoverMissilePlayer()} missiles. Bot a tiré ${randomBotStake} missiles. Vous avez gagné. <br/><br/> `;
          historicDiv.innerHTML += winningPhrase;
          switch (botLife) {
            case 3:
              botHeart3 = document.querySelector(".heartBot3");
              botHeart3.src = "img/heart.png";
              break;
            case 2:
              botHeart2 = document.querySelector(".heartBot2");
              botHeart2.src = "img/heart.png";
              break;
            case 1:
              botHeart1 = document.querySelector(".heartBot1");
              botHeart1.src = "img/heart.png";
              break;
          }
          botLife--;

        } else if (randomBotStake > recoverMissilePlayer()) {
          const losingPhrase = `Vous avez envoyé ${recoverMissilePlayer()} missiles. Bot a tiré ${randomBotStake} missiles. Vous avez perdu. <br/><br/> `;
          historicDiv.innerHTML += losingPhrase;
          switch (playerLife) {
            case 3:
              playerHeart3 = document.querySelector(".heartPlayer3");
              playerHeart3.src = "img/heart.png";
              break;
            case 2:
              playerHeart2 = document.querySelector(".heartPlayer2");
              playerHeart2.src = "img/heart.png";
              break;
            case 1:
              playerHeart1 = document.querySelector(".heartPlayer1");
              playerHeart1.src = "img/heart.png";
              break;
          }
        
          playerLife--;

        } else if (recoverMissilePlayer() === randomBotStake) {
          const drawPhrase = `Vous avez envoyé ${recoverMissilePlayer()} missiles. Bot a tiré ${randomBotStake} missiles. La manche doit être rejoué. <br/><br/> `;
          historicDiv.innerHTML += drawPhrase;
        }
    }

    stockBot -= randomBotStake;
    stockPlayer -= recoverMissilePlayer();
    divStockBot.innerHTML = `Stock : ${stockBot}`;
    divStockPlayer.innerHTML = `Stock : ${stockPlayer}`;
    randomBotStake = missilesNumberBot(stockBot);
    document.querySelector(".inputMissiles").value= 0;

    

    if (playerLife == 0 && botLife > 0) {
      result = "Game over";
      localStorage.setItem("citadelleStatut", result);
      window.location.href = '../victoryOver.html'  

    } else if (botLife == 0 && playerLife > 0){
      result = "Victoire";
      localStorage.setItem("citadelleStatut", result);
      window.location.href = '../victoryOver.html'
  
    } else if ((stockPlayer+stockBot) == 0 || (playerLife+botLife)==0){
      if (playerLife > botLife){
        result = "Victoire";

      } else if (playerLife < botLife){
        result = "Game over";

      } else{
        result = "Match nul";
      }
      localStorage.setItem("citadelleStatut", result);
      window.location.href = '../victoryOver.html'
    }

  } else {
    historicDiv.innerHTML += `Erreur : mise possible entre 0 et 100. <br/>`;
  }
});