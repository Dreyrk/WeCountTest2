import mongoose from "mongoose";

export const GameSchema = mongoose.Schema({
  players: Array,
  finalScore: String,
  score: Array,
});

const Game = mongoose.model("Game", GameSchema);

export default Game;
