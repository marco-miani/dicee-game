// Setting Variables

var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);

var dicee1 = "images/dice" + randomNumber1 + ".png";
var dicee2 = "images/dice" + randomNumber2 + ".png";

// Applying the new name to the img files

document.querySelectorAll("img")[0].setAttribute("src", dicee1);
document.querySelectorAll("img")[1].setAttribute("src", dicee2);

// Check the Winner

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 💥"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "💥 Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "💥 It's a Draw! 💥"
}