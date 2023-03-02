import React, { useEffect, useState } from "react";
import HeaderList from "../components/HeaderList";
import { useCurrentGameContext } from "../contexts/CurrentGameContext";

function GamePage() {
  const { currentGame, setCurrentGame } = useCurrentGameContext();
  const { player1, player2, config } = currentGame;
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [p1CurrentSet, setP1CurrentSet] = useState(0);
  const [p2CurrentSet, setP2CurrentSet] = useState(0);

  useEffect(() => console.log(currentGame), [currentGame]);
  //--------------------------------------------------------------

  const simulatePts = (player1, player2, random) => {
    if (random === 1) {
      return player2;
    }
    return player1;
  };

  const PlayGame = () => {
    const random = Math.floor(Math.random() * 2);
    // Set the current player
    const ptsWinner = simulatePts(player1, player2, random);

    config.ptsList.push(random);
    ptsWinner.currentScore++;

    if (
      ptsWinner.currentScore >= 4 &&
      ptsWinner.currentScore - currentPlayer.currentScore >= 2
    ) {
      ptsWinner.currentSet++;
      player1.currentScore = 0;
      player2.currentScore = 0;
      if (
        ptsWinner.currentSet >= 6 &&
        ptsWinner.currentSet - currentPlayer.currentSet >= 2
      ) {
        //if set Win the set 1 = current set
        if (player1.setsWin.set1 === 0 || player2.setsWin.set1 === 0) {
          setP1CurrentSet(player1.currentSet);
          setP2CurrentSet(player2.currentSet);
          setCurrentGame({
            ...currentGame,
            player1: {
              ...currentGame.player1,
              setsWin: {
                ...currentGame.player1.setsWin,
                set1: p1CurrentSet,
              },
            },
          });
          setCurrentGame({
            ...currentGame,
            player2: {
              ...currentGame.player2,
              setsWin: {
                ...currentGame.player2.setsWin,
                set1: p2CurrentSet,
              },
            },
          });
        }
        //if set Win the set 2 = current set
        if (ptsWinner.setsWin.set1 >= 6 || player2.setsWin.set1 >= 6) {
          setP1CurrentSet(player1.currentSet);
          setP2CurrentSet(player2.currentSet);
          setCurrentGame({
            ...currentGame,
            player1: {
              ...currentGame.player1,
              setsWin: {
                ...currentGame.player1.setsWin,
                set2: p1CurrentSet,
              },
            },
          });
          setCurrentGame({
            ...currentGame,
            player2: {
              ...currentGame.player2,
              setsWin: {
                ...currentGame.player2.setsWin,
                set2: p2CurrentSet,
              },
            },
          });
        }
        //if set Win the set 3 = current set
        if (player1.setsWin.set2 >= 6 || player2.setsWin.set2 >= 6) {
          setP1CurrentSet(player1.currentSet);
          setP2CurrentSet(player2.currentSet);
          setCurrentGame({
            ...currentGame,
            player1: {
              ...currentGame.player1,
              setsWin: {
                ...currentGame.player1.setsWin,
                set3: p1CurrentSet,
              },
            },
          });
          setCurrentGame({
            ...currentGame,
            player2: {
              ...currentGame.player2,
              setsWin: {
                ...currentGame.player2.setsWin,
                set3: p2CurrentSet,
              },
            },
          });
        }
        if (
          ptsWinner.setsWin.set1 +
            ptsWinner.setsWin.set2 +
            ptsWinner.setsWin.set3 >=
          2
        ) {
          // Check if the point winner has won the match
          ptsWinner.matchWin = true;
        }
      }
    }
    setCurrentPlayer(ptsWinner === player1 ? player2 : player1);
  };

  //------------------------------------------------------------
  const ChangeRandomInPlayer = (ptsWinner) => {
    switch (ptsWinner) {
      case 0:
        return player1.name;
      case 1:
        return player2.name;
      default:
        break;
    }
  };

  const resetGame = () => {
    setCurrentGame({
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
      config: {
        avantage: false,
        ptsList: [],
      },
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[90%] w-[80%] bg-yellow rounded-xl shadow-md">
        <div className="h-[40%] flex flex-col justify-center items-center gap-6">
          <div className="w-full flex justify-center">
            <div className=" w-3/4 flex justify-center">
              <h1 className="p-6 ml-40 border-2 bg-orange font-bold text-4xl rounded-md shadow-lg text-white">
                Match !
              </h1>
            </div>
            <button
              className="h-12 p-2 font-bold text-2xl text-white bg-red rounded-3xl"
              type="button"
              onClick={resetGame}>
              Reset Game
            </button>
          </div>
          <button
            className="h-12 w-40 mt-10 font-bold text-2xl text-white bg-red rounded-3xl"
            type="button"
            disabled={
              currentGame.player1.matchWin || currentGame.player1.matchWin
            }
            onClick={PlayGame}>
            Play
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/5">
            <HeaderList />
            <div className="w-full h-[300px] border overflow-auto">
              <ul className="w-full flex flex-col justify-center">
                {config.ptsList.map((pts, i) => (
                  <li key={i} className="font-medium">
                    Point remporté par {ChangeRandomInPlayer(pts)}
                  </li>
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
