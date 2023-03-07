import mongoose from "mongoose";

export const GameSchema = mongoose.Schema({
  players: Array,
  winner: String,
  sets: Array,
});

const Game = mongoose.model("Game", GameSchema);

export default Game;
