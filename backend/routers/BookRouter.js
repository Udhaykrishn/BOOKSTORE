import express from "express";
import { Book } from "../models/bookModels.js";
const router = express.Router();


//Create new Book
router.post("/", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(400).send({
          message: `Send all required fields: titiel, author, publishYear`,
        });
      }
  
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
      const book = await Book.create(newBook);
      return res.status(201).send(book);
    } catch (erro) {
      console.log(erro.message);
      res.status(500).send({ message: erro.message });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      const books = await Book.find({});
      return res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    }
  });
  
  //Find a Book
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const books = await Book.findById(id);
      return res.status(200).json(books);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //Update a Boook
  router.put("/:id", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(400).send({
          message: `Send all required fields: titiel, author, publishYear`,
        });
      }
      const { id } = req.params;
      const result = await Book.findByIdAndUpdate(id, req.body);
  
      if (!result) {
        return res.status(400).json({ message: "Book not found" });
      }
      return res.status(200).send({ message: "Book updated Succesfully" });
    } catch (error) {
      console.log(error.message);
      return res.status(500).send({ message: error.message });
    }
  });
  
  //Delete a Book
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Book.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(400).json({ message: "Book not found" });
      }
      return res.status(200).send({ message: "Book Deleted Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error.message });
    }
  });

  export default  router;