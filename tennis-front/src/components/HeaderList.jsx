import React from "react";

function HeaderList({ currentGame }) {
  return (
    <>
      <div className="border h-12 border-t-2 border-x-2">
        <h1 className="tex">Game Details</h1>
      </div>
      <div className="border h-16 flex flex-wrap justify-between">
        <h2 className="w-1/2 border font-semibold shadow-md">
          {currentGame[0].name}
        </h2>
        <h2 className="w-1/2 border font-semibold shadow-md">
          {currentGame[1].name}
        </h2>
        <h5 className="w-1/2 border-x font-bold text-xl">
          {currentGame[0].currentScore}
        </h5>
        <h5 className="w-1/2 border-x font-bold text-xl">
          {currentGame[1].currentScore}
        </h5>
      </div>
    </>
  );
}

export default HeaderList;
