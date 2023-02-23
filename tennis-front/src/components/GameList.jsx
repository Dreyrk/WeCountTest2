import React from "react";
import ScoreCard from "./ScoreCard";

function GameList({ games }) {
  return (
    <div className="w-full max-h-[335px] border overflow-auto">
      <ul className="flex flex-col justify-center">
        {games.map((el) => (
          <ScoreCard key={el._id} game={el} />
        ))}
      </ul>
    </div>
  );
}

export default GameList;
