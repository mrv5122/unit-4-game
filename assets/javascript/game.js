//computer generates a random number between 19-120
window.onload = function() {
    
    var randomNumber = Math.floor(Math.random()*19+101);
    
    //random number is assigned to location in html
    $("#randomNumber").html("<span>" + randomNumber + "</span>");
    console.log("Random number:" + randomNumber);
    
    //assign variables to user score
    var Wins = 0;
    var Losses = 0;
    var playerScore = 0;
   
       //assign function to update player values on HTML
       $("#Wins").text(Wins);

       $("#Losses").text(Losses);
   
       $("#totalScore").html("<span>" + playerScore + "</span>");

    //set win and loss functions to avoid repetition, include reset
   function youWin() {
       Wins++;
       alert("You win!");
       playerScore = 0;
       randomNumber = Math.floor(Math.random()*19+101);
    }
    function youLose() {
        Losses++;
        alert("Loser!! xD");
        playerScore = 0;
        randomNumber = Math.floor(Math.random()*19+101);
    }
    
    //give each jewel a value betweeen 1-12 for the game
    var whiteNum = Math.floor(Math.random()*11+1);
    console.log("White gem value:" + whiteNum);

    var redNum = Math.floor(Math.random()*11+1);
    console.log("Red gem value:" + redNum);

    var blueNum = Math.floor(Math.random()*11+1);
    console.log("Blue gem value:" + blueNum);

    var yellowNum = Math.floor(Math.random()*11+1);
    console.log("Yellow gem value:" + yellowNum);

   //assign function to update player values on HTML
   $("#Wins").html("<span>" + Wins + "</span>");

   $("#Losses").html("<span>" + Losses + "</span>");

   $("#totalScore").html("<span>" + playerScore + "</span>");
   
    //set up clicks to give player points for clicking on gems
    $("#white").on("click", function(){
        playerScore = playerScore + whiteNum;
        console.log("New playerScore= " + playerScore);
        $("#totalScore").text(playerScore);

        if (playerScore === randomNumber) {
            youWin();
        }
        else if (playerscore > randomNumber) {
            youLose();
        }
    });
    $("#red").on("click", function(){
        playerScore = playerScore + redNum;
        console.log("New playerScore= " + playerScore);
        $("#totalScore").text(playerScore);
        if (playerScore === randomNumber) {
            youWin();
        }
    });
    $("#blue").on("click", function(){
        playerScore =playerScore + blueNum;
        console.log("New playerScore= " + playerScore);
        $("#totalScore").text(playerScore);
        if (playerScore === randomNumber) {
            youWin();
        }
    });
    $("#yellow").on("click", function(){
        playerScore =playerScore + yellowNum;
        console.log("New playerScore= " + playerScore);
        $("#totalScore").text(playerScore);
        if (playerScore === randomNumber) {
            youWin();
        }
    });
};

 // //reset function
    // function resetGame() {
    //     randomNumber = Math.floor(Math.random()*19+101);
    //     console.log("New number to guess:" + randomNumber);
    //     $('#randomNumber').text(randomNumber);  }
