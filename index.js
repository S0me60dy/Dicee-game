var randomNumber1 = 0;
var randomNumber2 = 0;
for (let i = 1; i <= 2; i++) {
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    document.querySelector("#player-" + i + "-dice").setAttribute("src", "./images/dice" + randomNumber + ".png");
    if (i === 1){
        randomNumber1 = randomNumber;
    }
    else{
        randomNumber2 = randomNumber;
    }
}

let winnerText = "Refresh Me!"; // Default text
if (randomNumber1 > randomNumber2) {
    winnerText = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    winnerText = "Player 2 wins! 🚩";
} else{
    winnerText = "Draw!"
}

document.querySelector("h1").innerHTML = winnerText;