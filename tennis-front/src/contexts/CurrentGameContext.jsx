import React, { createContext, useContext, useState } from "react";

const CurrentGameContext = createContext();

export default CurrentGameContext;

export function CurrentGameProvider({ children }) {
  const [currentGame, setCurrentGame] = useState([
    { name: "Player 1", currentScore: 0 },
    { name: "Player 2", currentScore: 0 },
  ]);

  const game = { currentGame, setCurrentGame };

  return (
    <CurrentGameContext.Provider value={game}>
      {children}
    </CurrentGameContext.Provider>
  );
}

export const useCurrentGameContext = () => useContext(CurrentGameContext);
