// var num = 0,
//   playerdetails = [],
//   finalScore = 0,
//   pos = 0,
//   totalScore=0;

var score1 = 0;
var score2 = 0;
var finalscore1 = 0;
var finalscore2 = 0;
// var

// function PlayersInfo(name, score, totalScore) {
//   this.playerNames = name;
//   this.playerMarks = score;
//   this.totalScores = totalScore;
// }
var genRandom = function() {
  randomNo = Math.floor(Math.random() * 6) + 1;
  return randomNo;
}
// PlayersInfo.prototype.AddScores = function(thisMark) {
//   if (thisMark === 1) {
//     this.playerMarks = 0;
//   } else if (thisMark !== 1) {
//     this.playerMarks = this.playerMarks + thisMark;
//   }
//   return this.playerMarks;
// }
// PlayersInfo.prototype.Total = function(total) {
//   return this.totalScores = this.totalScores + total;
// }

function reset() {
  pos = 0;
  PlayersInfo.playerMarks = 0;
  PlayersInfo.totalScores = 0;
}


$(document).ready(function() {
  $("#roll-dice1").click(function() {
    var roll1 = genRandom();
    if (roll1 === 1) {
      score1 = 0;
      $("#roll-dice1").hide();
      $("#hold1").hide();
      $("#roll-dice2").show();
      $("#hold2").show();
      alert("Pass mouse to player 2");
    } else {
      $("#roll1").text(roll1);
      score1 = score1 + roll1;
      $("#score1").text(score1)
    }
  });
  $("#roll-dice2").click(function() {
    var roll2 = genRandom();
    if (roll2 === 1) {
      score2 = 0;
      $("#roll-dice2").hide();
      $("#hold2").hide();
      $("#roll-dice1").show();
      $("#hold1").show();
      alert("Pass mouse to player 1");
    } else {
      $("#roll2").text(roll2);
      score2 = score2 + roll2;
      $("#score2").text(score2)
    }
  });
  $("#hold1").click(function() {
    finalscore1 = finalscore1 + score1;
    $("#final-score1").text(finalscore1);
    $("#roll-dice1").hide();
    $("#hold1").hide();
    $("#roll-dice2").show();
    $("#hold2").show();
    if (finalscore1 >= 100) {
      alert("Player 1 won");
      location.reload();
    }
  });
  $("#hold2").click(function() {
    finalscore2 = finalscore2 + score2;
    $("#final-score2").text(finalscore2);
    $("#roll-dice2").hide();
    $("#hold2").hide();
    $("#roll-dice1").show();
    $("#hold1").show();
    if (finalscore2 >= 100) {
      alert("Player 2 won");
      location.reload();
    }
  });
});
