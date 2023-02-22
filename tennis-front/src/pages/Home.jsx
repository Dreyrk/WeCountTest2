import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-[70%] w-[75%] rounded-xl bg-yellow shadow-md">
        <div className="h-1/3 flex justify-center items-center">
          <div className="h-1/3 w-1/5 flex items-center justify-center bg-orange border-red rounded-xl shadow-md">
            <h1 className="font-bold text-3xl">Define Players</h1>
          </div>
        </div>
        <div className="h-1/3 pt-6 flex justify-center gap-44 mt-2">
          <label
            className="flex flex-col items-start text-sm font-medium"
            htmlFor="name">
            Name:
            <input type="text" />
          </label>
          <h2 className="pt-5 font-bold text-2xl">VS</h2>
          <label
            className=" flex flex-col items-start text-sm font-medium"
            htmlFor="name">
            Name:
            <input type="text" />
          </label>
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
