import React, { createContext, useContext, useState } from "react";

const CurrentGameContext = createContext();

export default CurrentGameContext;

export function CurrentGameProvider({ children }) {
  const [currentGame, setCurrentGame] = useState({
    player1: {
      name: "Player 1",
      level: 0,
      currentScore: 0,
      currentSet: 0,
      setsWin: {
        set1: 0,
        set2: 0,
        set3: 0,
      },
      matchWin: false,
    },
    player2: {
      name: "Player 2",
      currentScore: 0,
      currentSet: 0,
      level: 0,
      setsWin: {
        set1: 0,
        set2: 0,
        set3: 0,
      },
      matchWin: false,
    },
    config: {
      avantage: "",
      ptsList: [],
    },
  });

  const game = { currentGame, setCurrentGame };

  return (
    <CurrentGameContext.Provider value={game}>
      {children}
    </CurrentGameContext.Provider>
  );
}

export const useCurrentGameContext = () => useContext(CurrentGameContext);
