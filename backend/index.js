const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cardRoutes = require("./routes/card.route.js");

dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("Server is running");
});

app.use("/api", cardRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
