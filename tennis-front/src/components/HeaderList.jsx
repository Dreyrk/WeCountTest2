import React from "react";
import { useCurrentGameContext } from "../contexts/CurrentGameContext";

function HeaderList() {
  const { currentGame } = useCurrentGameContext();

  const getScoreInText = (score) => {
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
      case score >= 5:
        return "Win";
      default:
        break;
    }
  };

  return (
    <table className="w-full border">
      <thead>
        <tr className="border">
          <th className="border bg-black"></th>
          <th>Set 1</th>
          <th>Set 2</th>
          <th>Set 3</th>
          <th className="border">Current Game</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border">
          <th className="border">{currentGame.player1.name}</th>
          <th>
            {currentGame.player1.setsWin.set1 || currentGame.player1.currentSet}
          </th>
          <th>{currentGame.player1.setsWin.set2 || "0"}</th>
          <th>{currentGame.player1.setsWin.set3 || "0"}</th>
          <th className="border">
            {getScoreInText(currentGame.player1.currentScore)}
          </th>
        </tr>
        <tr>
          <th className="border">{currentGame.player2.name}</th>
          <th>
            {currentGame.player2.setsWin.set1 || currentGame.player2.currentSet}
          </th>
          <th>{currentGame.player2.setsWin.set2 || "0"}</th>
          <th>{currentGame.player2.setsWin.set3 || "0"}</th>
          <th className="border">
            {getScoreInText(currentGame.player2.currentScore)}
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default HeaderList;
