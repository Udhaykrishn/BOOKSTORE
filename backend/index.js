import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routers/BookRouter.js";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config({path:".env"});


const app = express();

app.use(express.json());
app.use(
  cors()
);

app.get("/", (req, res) => {
  return res.status(235).send("Welcome to MERN ");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App Listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
