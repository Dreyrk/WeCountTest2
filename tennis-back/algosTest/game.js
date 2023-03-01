const player1 = {
  name: "Player 1",
  level: 0,
  currentScore: 0,
  currentSet: 0,
  setsWin: {
    set1: 0,
    set2: 0,
    set3: 0,
  },
  gameWin: false,
};
const player2 = {
  name: "Player 2",
  level: 0,
  currentScore: 0,
  currentSet: 0,
  setsWin: {
    set1: 0,
    set2: 0,
    set3: 0,
  },
  gameWin: false,
};

const finalScore = [];

function getScoreInText(score) {
  switch (score) {
    case 0:
      return "-";
    case 1:
      return "15";
    case 2:
      return "30";
    case 3:
      return "40";
    case 4:
      return "AV";
  }
}

// function GameEnd() {
//   if (player1.gameWin || player2.gameWin) return false;
//   else return true;
// }

function SetWin(player1, player2) {
  if (player1.currentScore === 6 && player2.currentScore === 4) {
    return false;
  }
  return true;
}

function RunGame(player1, player2) {
  while (SetWin(player1, player2)) {
    const scoreGap = Math.abs(player1.currentScore - player2.currentScore);
    const random = Math.floor(Math.random() * 2);
    if (player1.currentScore >= 3 && player2.currentScore >= 3) {
      if (scoreGap < 2) {
        if (random === 1) {
          console.log(`${player2.name} has an adventage`);
          player2.currentScore = 5;
          player1.currentScore = 0;
        } else {
          console.log(`${player1.name} has an adventage`);
          player1.currentScore = 5;
          player2.currentScore = 0;
        }
      } else {
        if (random === 1) {
          console.log(`${player2.name} has win`);
          console.log(player1, player2);
          player2.currentScore = 6;
          player1.currentScore = 4;
        } else {
          console.log(`${player1.name} has win`);
          player1.currentScore = 6;
          player2.currentScore = 4;
        }
      }
    } else {
      if (random === 1) {
        console.log(`${player2.name} has win the point`);
        player2.currentScore += 1;
      } else {
        console.log(`${player1.name} has win the point`);
        player1.currentScore += 1;
      }
    }
  }
}

RunGame(player1, player2);
