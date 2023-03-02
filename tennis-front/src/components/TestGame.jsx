import React, { useState } from "react";

function TennisGame() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  function increaseScore(player) {
    if (player === 1) {
      setPlayer1Score(player1Score + 1);
    } else if (player === 2) {
      setPlayer2Score(player2Score + 1);
    }

    // Check if one player has won the game
    if (player1Score >= 4 && player1Score - player2Score >= 2) {
      console.log("Player 1 wins the game!");
      initializeGame();
    } else if (player2Score >= 4 && player2Score - player1Score >= 2) {
      console.log("Player 2 wins the game!");
      initializeGame();
    }
  }

  function getScore() {
    let scoreString = "";

    if (player1Score === player2Score) {
      if (player1Score < 3) {
        scoreString = `${player1Score * 15}-All`;
      } else if (player1Score === 3) {
        scoreString = "Deuce";
      } else {
        scoreString = "Advantage";
      }
    } else if (player1Score >= 4 && player1Score - player2Score >= 2) {
      scoreString = "Game, Player 1";
    } else if (player2Score >= 4 && player2Score - player1Score >= 2) {
      scoreString = "Game, Player 2";
    } else {
      scoreString = `${player1Score * 15}-${player2Score * 15}`;
    }

    return scoreString;
  }

  function initializeGame() {
    setPlayer1Score(0);
    setPlayer2Score(0);
  }

  return (
    <div>
      <h1>Tennis Game</h1>
      <div>
        <h2>Score</h2>
        <p>Player 1: {player1Score}</p>
        <p>Player 2: {player2Score}</p>
        <p>{getScore()}</p>
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => increaseScore(1)}>Player 1 scores</button>
        <button onClick={() => increaseScore(2)}>Player 2 scores</button>
        <button onClick={initializeGame}>New game</button>
      </div>
    </div>
  );
}

export default TennisGame;
