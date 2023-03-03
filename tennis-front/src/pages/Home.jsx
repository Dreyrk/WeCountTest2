import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentGameContext } from "../contexts/CurrentGameContext";

function Home() {
  const navigate = useNavigate();
  const { currentGame, setCurrentGame } = useCurrentGameContext();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-[70%] w-[75%] rounded-xl bg-yellow shadow-md">
        <div className="h-1/3 flex justify-center items-center">
          <div className="h-1/3 w-1/5 flex items-center justify-center bg-orange border-red rounded-xl shadow-md">
            <h1 className="font-bold text-3xl">Define Players</h1>
          </div>
        </div>
        <div className="h-1/3 pt-6 flex justify-center gap-44 mt-2">
          <div className="h-full">
            <label
              className="flex flex-col items-start text-sm font-medium mb-2"
              htmlFor="name">
              Name:
              <input
                type="text"
                onChange={(e) => {
                  setCurrentGame({
                    ...currentGame,
                    player1: { ...currentGame.player1, name: e.target.value },
                  });
                }}
              />
            </label>
            <label
              className="flex flex-col items-start text-sm font-medium"
              htmlFor="name">
              Level:
              <input
                type="text"
                onChange={(e) => {
                  setCurrentGame({
                    ...currentGame,
                    player1: { ...currentGame.player1, level: e.target.value },
                  });
                }}
              />
            </label>
          </div>
          <h2 className="pt-5 font-bold text-2xl">VS</h2>
          <div className="h-full">
            <label
              className=" flex flex-col items-start text-sm font-medium mb-2"
              htmlFor="name">
              Name:
              <input
                type="text"
                onChange={(e) => {
                  setCurrentGame({
                    ...currentGame,
                    player2: { ...currentGame.player2, name: e.target.value },
                  });
                }}
              />
            </label>
            <label
              className=" flex flex-col items-start text-sm font-medium"
              htmlFor="name">
              Level:
              <input
                type="text"
                onChange={(e) => {
                  setCurrentGame({
                    ...currentGame,
                    player2: { ...currentGame.player2, level: e.target.value },
                  });
                }}
              />
            </label>
          </div>
        </div>
        <div className="h-1/3 flex justify-center items-center">
          <button
            className="h-12 w-40 font-bold text-xl text-white bg-red rounded-3xl"
            type="button"
            onClick={() => navigate("/game")}>
            Start Match
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
