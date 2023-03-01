import mongoose from "mongoose";

const PlayerSchema = mongoose.Schema({
  name: String,
  level: Number,
});

export const TennisSchema = mongoose.Schema({
  players: [PlayerSchema],
});

const Tennis = mongoose.model("Tennis", TennisSchema);

export default Tennis;
