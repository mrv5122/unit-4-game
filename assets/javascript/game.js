//script loads upon DOM loading
$(document).ready(function() {

    //computer generates random number for player to guess
    var randomNumber = Math.floor(Math.random()*19+101);
    //append randomNumber to html
    $("#randomNumber").text(randomNumber);
    console.log(randomNumber);

    //VARIABLES TO RECORD WINS & LOSSES, player score
    var wins = 0;
    var losses = 0;
    var playerScore = 0;

// APPEND wins & losses to index
    $("#Wins").text("Wins: " + wins);
    $("#Losses").text("Losses: " + losses);


    //array to hold gem values
    var gemValues = [];
    function gemWorth() {
        for (var i = 0; i < 4; i++) {
            //generate random gem value
            var gemNumber =  Math.floor(Math.random() * 11 + 1)
            //push random gem values to gemValues array
            gemValues.push(gemNumber);
        }
    };
        gemWorth();
    console.log(gemValues);

    //reset game function
    function resetGame() {
        randomNumber = Math.floor(Math.random()*19+101);
        $("#randomNumber").text(randomNumber);
        gemValues = [];
        gemWorth();
        playerScore = 0;
        $("#totalScore").text(playerScore);
        console.log("new gem values: " + gemValues);
    };

    //win game/ lose function
    function winOrLose() {
        if (playerScore === randomNumber) {
        wins++;
        $("#Wins").text(wins);
        alert("YOU WON!");
        resetGame();
        }
        else if (playerScore > randomNumber) {
        losses++;
        $("#Losses").text(losses);
        alert("LOSER");
        resetGame();
        }
    }

   //function for gem clicks
   $("#white").on("click", function() {
       playerScore = playerScore + gemValues[0];
    $("#totalScore").text(playerScore);
    winOrLose();
   })

   $("#red").on("click", function() {
    playerScore = playerScore + gemValues[1];
    $("#totalScore").text(playerScore);
    winOrLose();
    })

    $("#blue").on("click", function() {
        playerScore = playerScore + gemValues[2];
     $("#totalScore").text(playerScore);
     winOrLose();
    })

    $("#yellow").on("click", function() {
        playerScore = playerScore + gemValues[3];
     $("#totalScore").text(playerScore);
     winOrLose();
    })

})
