const express = require("express");
const app = express();
const connectDB = require("./config/db");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
