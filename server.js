const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 5000;

// views
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("room");
});

app.listen(port, (err) => {
  if (err) console.log("server error: ", err);
  console.log(`server is running on port ${port}`);
});
