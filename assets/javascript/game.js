//computer generates a random number between 19-120
$(document).ready(function randomNumber() {
    var randomNumber = Math.floor(Math.random()*19+101);
    
    //random number is assigned to location in html
    $('#randomNumber').innerHTML.text(randomNumber);
    console.log(randomNumber);
    
    //assign variables to user score
    var Wins = 0;
    var Losses = 0;
    var playerScore = 0;
    //assign function to update player values on HTML
    document.getElementById('Wins').innerHTML= 'Wins: ' + Wins;
    document.getElementById('Losses').innerHTML= 'Losses: ' + Losses;
    document.getElementById('Score').innerHTML= 'Score: ' + playerScore;

    //give each jewel a value betweeen 1-12 for the game
    var whiteNum = Math.floor(Math.random()*1+11);
    var redNum = Math.floor(Math.random()*1+11);
    var blueNum = Math.floor(Math.random()*1+11);
    var yellowNum = Math.floor(Math.random()*1+11);

    //reset function
    function resetGame() {
        randomNumber = Math.floor(Math.random()*19+101);
        console.log(randomNumber);
        $('#randomNumber').text(randomNumber);
    }

    //set up clicks for gems
    $('#one').on ('click', function(){
        playerScore = playerScore + whiteNum;
        console.log("New playerScore= " + playerScore);
        $('#finalTotal').text(playerScore);
    });
    $('#two').on ('click', function(){
        playerScore = playerScore + redNum;
        console.log("New playerScore= " + playerScore);
        $('#finalTotal').text(playerScore);
    });
    $('#three').on ('click', function(){
        playerScore = playerScore + blueNum;
        console.log("New playerScore= " + playerScore);
        $('#finalTotal').text(playerScore);
    });
    $('#four').on ('click', function(){
        playerScore = playerScore + yellowNum;
        console.log("New playerScore= " + playerScore);
        $('#finalTotal').text(playerScore);
    });
});


//log the values for each gem
console.log("White= " + whiteNum);
console.log("Red= " +redNum);
console.log("Blue= " + blueNum);
console.log("Yellow= " + yellowNum);
});