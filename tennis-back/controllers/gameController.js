import mongoose from "mongoose";
import Game from "../models/GameModel.js";

const gameController = {
  getGames: async (req, res) => {
    try {
      const games = await Game.find({});

      res.status(200).send({ results: games, total: games.length });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
  getGameById: async (req, res) => {
    const { id } = req.params;

    try {
      const game = await Game.findById(id);

      res.status(200).send(game);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
  postGame: async (req, res) => {
    const { players, finalScore, score } = req.body;
    try {
      const game = await Game.create({
        players,
        finalScore,
        score,
      });

      res.status(201).send(game);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
  updateGame: async (req, res) => {
    try {
      const games = await Game.find({});

      res.status(200).send({ results: games, total: games.length });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
  deleteGame: async (req, res) => {
    try {
      const games = await Game.find({});

      res.status(200).send({ results: games, total: games.length });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
  resetGame: async (req, res) => {
    try {
      await Game.deleteMany({});

      res.status(204).send("deleted");
    } catch (e) {
      res.sendStatus(500);
      console.error(e);
    }
  },
};

export default gameController;
