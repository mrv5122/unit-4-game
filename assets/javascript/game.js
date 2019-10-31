//computer generates a random number between 19-120
window.onload = function() {
    gemValGenerator();

          //assign function to update player values on HTML
          $("#Wins").text(Wins);

          $("#Losses").text(Losses);
      
          $("#totalScore").html("<span>" + playerScore + "</span>");


    var randomNumber = Math.floor(Math.random()*19+101);
    
    //random number is assigned to location in html
    $("#randomNumber").html("<span>" + randomNumber + "</span>");
    console.log("Random number:" + randomNumber);
    
    //assign variables to user score
    var Wins = 0;
    var Losses = 0;
    var playerScore = 0;
   
 var gemValues = [$("#white"), $("#red"), $("#blue"), $("#yellow")];

 function gemValGenerator() {
     for (var i = 0; i < 4; i++) {
         var gem = Math.floor(Math.random() * 11 + 1); }
         gemValues.push(gem);
         console.log(
             "white =" + gemValues[0],
             "red =" + gemValues[1],
             "blue =" + gemValues[2],
             "yellow =" + gemValues[3]
         )
     }
 
$("#white").on("click", function() {
    playerScore = playerScore + gemValues[0];
});

$("#red").on("click", function() {
    playerScore = playerScore + gemValues[1];
});

$("#blue").on("click", function() {
    playerScore = playerScore + gemValues[2];
});

$("#yellow").on("click", function() {
    playerScore = playerScore + gemValues[3];
});
  //set win and loss functions to avoid repetition, include reset
   
  function youWin() {
    if (playerScore === randomNumber) {
        alert("You Win!")
        Wins++;
    } else if (playerScore > randomNumber) {
        youLose();
    }
    resetGame();
 }

 function youLose() {
     Losses++;
     alert("Loser!! xD");
     playerScore = 0;
     randomNumber = Math.floor(Math.random()*19+101);
 }
}