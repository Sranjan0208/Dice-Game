var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6)+1; // 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomDiceSource = "images/" + randomDiceImage; //images/dice1.png - images/dice2.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}