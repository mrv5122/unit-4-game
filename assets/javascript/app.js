


var randomNumber = Math.floor(Math.random()*19+101);

$("#randomNumber").html("<span>" + randomNumber + "</span>");
console.log("Random number: " + randomNumber);

//assign variables to user score
var Wins = 0;
var Losses = 0;
var playerScore = 0;

var gemValues = [$("#white"), $("#red"), $("#blue"), $("#yellow")];

function gemValGenerator() {
 for (var i = 0; i < 4; i++) {
     var gem = Math.floor(Math.random() * 11 + 1);
     gemValues.push(gem);
     console.log(
         "white =" + gemValues[0],
         "red =" + gemValues[1],
         "blue =" + gemValues[2],
         "yellow =" + gemValues[3]
        );
     }
 };