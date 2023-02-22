import express from "express";
import cors from "cors";
import router from "./router.js";
import main from "./database.js";

const port = process.env.PORT ?? 5000;

const app = express();

//Middlewares

app.use(express.json());
app.use(cors());
app.use(router);

//Connect db

try {
  main();
} catch (error) {
  console.error(error);
}

//Start server

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
