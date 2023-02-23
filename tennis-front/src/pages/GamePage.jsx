import React, { useState, useEffect } from "react";
import GameList from "../components/GameList";
import HeaderList from "../components/HeaderList";
import { useCurrentGameContext } from "../contexts/CurrentGameContext";

function GamePage() {
  const { currentGame, setCurrentGame } = useCurrentGameContext();
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data.results))
      .catch((e) => console.error(e));
  });


  const playGame = () => {
    
  }


  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[80%] w-[80%] bg-yellow rounded-xl shadow-md">
        <div className="h-[40%] flex flex-col justify-center items-center gap-6">
          <h1 className="p-6 border-2 bg-orange font-bold text-4xl rounded-md shadow-lg text-white">
            Match !
          </h1>
          <button
            className="h-12 w-40 mt-10 font-bold text-2xl text-white bg-red rounded-3xl"
            type="button"
            onClick={playGame}>
            Play
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/5">
            <HeaderList currentGame={currentGame} />
            <GameList games={games} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
