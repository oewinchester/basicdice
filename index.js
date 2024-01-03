let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
let diceOne = document.querySelector(".img1").setAttribute("src", "/images/dice"+randomNumber1+".png");
let diceTwo = document.querySelector(".img2").setAttribute("src", "/images/dice"+randomNumber2+".png");

function winner() {
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥇 Player 1 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🥇";
}

if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a tie!";
}

}
winner();