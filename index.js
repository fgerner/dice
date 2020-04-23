randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

let first_dice = document.getElementsByClassName('img1')[0];
let second_dice = document.getElementsByClassName('img2')[0];
first_dice.src = "./img/dice" + randomNumber1 + ".png";
second_dice.src = "./img/dice" + randomNumber2 + ".png";

if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player two wins!!';
} else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player one wins!';
} else {
    document.querySelector('h1').innerHTML = 'It\'s a tie';
}