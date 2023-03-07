import React, { useEffect, useState } from "react";
import HeaderList from "../components/HeaderList";
import { useCurrentGameContext } from "../contexts/CurrentGameContext";

function GamePage() {
  const { currentGame, setCurrentGame } = useCurrentGameContext();
  const { player1, player2, config } = currentGame;
  const [opponentPlayer, setOpponentPlayer] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [winner, setWinner] = useState("");
  const [p1CurrentSet, setP1CurrentSet] = useState(0);
  const [p2CurrentSet, setP2CurrentSet] = useState(0);

  useEffect(() => console.log(currentGame), [currentGame]);

  const simulatePts = (player1, player2, random, setOpponent) => {
    if (random === 1) {
      setOpponent(player1);
      return player2;
    } else {
      setOpponent(player2);
      return player1;
    }
  };

  //--------------------------------------------------------------

  const PlayGame = () => {
    const random = Math.floor(Math.random() * 2);
    config.ptsList.push(random);
    // Set the current player
    const ptsWinner = simulatePts(player1, player2, random, setOpponentPlayer);

    ptsWinner.currentScore++;

    const scoreGap = Math.abs(player1.currentScore - player2.currentScore);

    if (player1.currentScore >= 4 && scoreGap === 1) {
      console.log("Joueur 1 a l'avantage");
    } else if (player2.currentScore >= 4 && scoreGap === 1) {
      console.log("Joueur 2 a l'avantage");
    } else {
      console.log("Pas d'avantage");
    }

    const setGap = Math.abs(player1.currentSet - player2.currentSet);

    //if ptsWinner has won increment currentSet
    if (ptsWinner.currentScore >= 4 && scoreGap >= 2) {
      ptsWinner.currentSet++;
      setCurrentGame({
        ...currentGame,
        player1: { ...currentGame.player1, currentScore: 0 },
        player2: { ...currentGame.player2, currentScore: 0 },
      });
      setP1CurrentSet(player1.currentSet);
      setP2CurrentSet(player2.currentSet);
      if (ptsWinner.currentSet >= 6 && setGap >= 2) {
        //if set Win the set 1 = current set

        if (player1.setsWin.set1 === 0 || player2.setsWin.set1 === 0) {
          setCurrentGame({
            config: { ...currentGame.config, ptsList: [] },
            player1: {
              ...currentGame.player1,
              currentSet: 0,
              setsWin: {
                ...currentGame.player1.setsWin,
                set1: p1CurrentSet,
              },
            },
            player2: {
              ...currentGame.player2,
              currentSet: 0,
              setsWin: {
                ...currentGame.player2.setsWin,
                set1: p2CurrentSet,
              },
            },
          });
        }
        //if set Win the set 2 = current set
        else if (
          ptsWinner.setsWin.set1 > 1 ||
          player1.setsWin.set2 === 0 ||
          player2.setsWin.set2 === 0
        ) {
          setCurrentGame({
            ...currentGame,
            config: { ...currentGame.config, ptsList: [] },
            player1: {
              ...currentGame.player1,
              currentSet: 0,
              setsWin: {
                ...currentGame.player1.setsWin,
                set2: p1CurrentSet,
              },
            },
            player2: {
              ...currentGame.player2,
              currentSet: 0,
              setsWin: {
                ...currentGame.player2.setsWin,
                set2: p2CurrentSet,
              },
            },
          });
        }
        //if set Win the set 3 = current set
        else if (
          ptsWinner.setsWins.set2 > 1 ||
          player1.setsWin.set3 === 0 ||
          player2.setsWin.set3 === 0
        ) {
          setCurrentGame({
            ...currentGame,
            config: { ...currentGame.config, ptsList: [] },
            player1: {
              ...currentGame.player1,
              currentSet: 0,
              setsWin: {
                ...currentGame.player1.setsWin,
                set3: p1CurrentSet,
              },
            },
            player2: {
              ...currentGame.player2,
              currentSet: 0,
              setsWin: {
                ...currentGame.player2.setsWin,
                set3: p2CurrentSet,
              },
            },
          });
        }
        if (ptsWinner.setsWin.set3 >= 6 && setGap >= 2) {
          // Check if the point winner has won the match
          console.log(ptsWinner);
          ptsWinner.matchWin = true;
          setWinner(`${ptsWinner.name}`);

          const body = {
            players: [player1, player2],
            winner: ptsWinner.name,
            sets: [player1.setWins, player2.setWins],
          };

          const myHeaders = {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(body),
          };
          fetch("http://localhost:5000/api/game", myHeaders)
            .then((res) => console.log(res))
            .catch((e) => console.error(e));
        }
      }
    }
    setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
    console.log(currentGame);
  };

  //------------------------------------------------------------

  const resetGame = () => {
    setCurrentGame({
      player1: {
        ...currentGame.player1,
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
        ...currentGame.player2,
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
                {!player1.matchWin || !player2.matchWin
                  ? config.ptsList.map((pts, i) => (
                      <li key={i} className="font-medium">
                        Point remporté par {ChangeRandomInPlayer(pts)}
                      </li>
                    ))
                  : `${winner} has won the match`}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
