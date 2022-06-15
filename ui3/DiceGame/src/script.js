var player1;
var player2;
var player1Display = document.querySelector("#player1");
var player2Display = document.querySelector("#player2");
var btn = document.querySelector("#button");

window.onload = ()=>{
    player1 = prompt("Enter player 1 name:");
    player2 = prompt("Enter player 2 name:");
    player1Display.innerHTML = `${player1}`
    player2Display.innerHTML = `${player2}`
}

function diceChange() {
    btn.innerHTML = `<button>Click to change dice</button>`;
    player1Display.innerHTML = `${player1}`
    player2Display.innerHTML = `${player2}`
var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

dice1.src = `images/${randomNumber1}.png`
dice2.src = `images/${randomNumber2}.png`
var result = document.querySelector("#result")
if(randomNumber1>randomNumber2){
    result.innerHTML = `${player1} win.`
}
else if(randomNumber1===randomNumber2){
    result.innerHTML = `Game draw`
}
else{
    result.innerHTML = `${player2} win.`
}
}
var btn = document.querySelector(".btn");
btn.addEventListener("click",diceChange);