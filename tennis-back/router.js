import express from "express";
import gameController from "./controllers/gameController.js";

const { getGames, getGameById, postGame, updateGame, resetGame } =
  gameController;

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send("Welcome !");
});

//GET
router.get("/api/games", getGames);
router.get("/api/games/:id", getGameById);

//POST
router.post("/api/games", postGame);

//UPDATE
router.put("/api/games", updateGame);

//DELETE

router.delete("api/games/reset", resetGame);

export default router;
