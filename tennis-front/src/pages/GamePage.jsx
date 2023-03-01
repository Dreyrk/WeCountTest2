import React, { useEffect } from "react";
import HeaderList from "../components/HeaderList";
import { useCurrentGameContext } from "../contexts/CurrentGameContext";

function GamePage() {
  const { currentGame, setCurrentGame } = useCurrentGameContext();
  const { player1, player2, config } = currentGame;

  useEffect(() => console.log(currentGame), [currentGame]);

  const ChangeRandomInPlayer = (pts) => {
    switch (pts) {
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
        setWin: {
          set1: 0,
          set2: 0,
          set3: 0,
        },
        gameWin: false,
      },
      player2: {
        name: "Player 2",
        currentScore: 0,
        currentSet: 0,
        level: 0,
        setWin: {
          set1: 0,
          set2: 0,
          set3: 0,
        },
        gameWin: false,
      },
      config: {
        scoreGap: 0,
        avantage: false,
        ptsList: [],
      },
    });
  };

  const playGame = () => {
    //Define a random number to decide who have the point and push it to the pts list
    const random = Math.floor(Math.random() * 2);

    config.ptsList.push(random);

    //Verify if it's adventage mode
    const scoreGap = Math.abs(player1.currentScore - player2.currentScore);
    if (player1.currentScore >= 3 && player2.currentScore >= 3) {
      //if true pass in adventage mode
      setCurrentGame({
        ...currentGame,
        config: { avantage: true },
      });

      if (scoreGap < 2) {
        console.log(scoreGap);
        if (random === 1) {
          setCurrentGame({
            ...currentGame,
            player2: {
              ...currentGame.player1,
              currentSet: currentGame.player1.currentSet + 1,
            },
            config: {
              ...currentGame.config,
              avantage: false,
            },
          });
        } else {
          setCurrentGame({
            ...currentGame,
            player1: {
              ...currentGame.player2,
              currentSet: currentGame.player2.currentSet + 1,
            },
            config: {
              ...currentGame.config,
              avantage: false,
            },
          });
        }
      }
      if (random === 1) {
        setCurrentGame({
          ...currentGame,
          player1: {
            ...currentGame.player1,
            currentScore: 0,
          },
          player2: {
            ...currentGame.player2,
            currentScore: 4,
          },
        });
      } else {
        setCurrentGame({
          ...currentGame,
          player1: {
            ...currentGame.player1,
            currentScore: 4,
          },
          player2: {
            ...currentGame.player2,
            currentScore: 0,
          },
        });
      }
    } else {
      if (random === 1 && !config.avantage) {
        setCurrentGame({
          ...currentGame,
          player2: {
            ...currentGame.player2,
            currentScore: currentGame.player2.currentScore + 1,
          },
        });
      } else {
        setCurrentGame({
          ...currentGame,
          player1: {
            ...currentGame.player1,
            currentScore: currentGame.player1.currentScore + 1,
          },
        });
      }
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
            onClick={playGame}>
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
