import React from "react";

function ScoreCard({ game }) {
  return (
    <div className="flex flex-col gap-1 justify-center">
      <h3 className="text-2xl font-semibold">{game.finalScore}</h3>
      <p className="text-sm">{game.score}</p>
    </div>
  );
}

export default ScoreCard;
