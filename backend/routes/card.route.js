const express = require("express");
const router = express.Router();
const Card = require("../models/card.model.js");

router.post("/cards", async (req, res) => {
  console.log("Incoming request body:", req.body); // Log the request body
  try {
    const { id, title, description } = req.body;
    if (!id || !title || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const card = new Card({ id, title, description });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/cards/:title", async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
