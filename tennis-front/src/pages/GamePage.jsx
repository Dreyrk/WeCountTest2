import React from "react";
import ScoreCard from "../components/ScoreCard";

const game = [
  {
    finalScore: "3 - 0",
    score: "(45 - 0, 45 - 15, 15 - 45)",
  },
  {
    finalScore: "3 - 0",
    score: "(45 - 0, 45 - 15, 15 - 45)",
  },
  {
    finalScore: "3 - 0",
    score: "(45 - 0, 45 - 15, 15 - 45)",
  },
  {
    finalScore: "3 - 0",
    score: "(45 - 0, 45 - 15, 15 - 45)",
  },
];

function GamePage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[80%] w-[80%] bg-yellow rounded-xl shadow-md overflow-auto">
        <div className="h-[40%] flex flex-col justify-center items-center gap-6">
          <h1 className="pb-10 font-bold text-4xl">Match !</h1>
          <button
            className="h-12 w-40 mt-10 font-bold text-2xl text-white bg-red rounded-3xl"
            type="button">
            Play
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/5">
            <div className="border border-t-2 border-x-2">
              <h1>Game Details</h1>
            </div>
            <div className="border flex flex-wrap justify-between">
              <h2 className="w-1/2 border">Player 1</h2>
              <h2 className="w-1/2 border">Player 2</h2>
              <h5 className="w-1/2 border-x">15</h5>
              <h5 className="w-1/2 border-x">0</h5>
            </div>
            <div className="w-full h-1/2 border">
              <ul className="">
                {game.map((el) => (
                  <ScoreCard game={el} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
