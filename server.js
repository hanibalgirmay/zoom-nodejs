const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { v4: uuid } = require("uuid");

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(morgan());
app.use(cors());
app.use(express.static("public"));

// views
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.render("room");
  res.redirect(`/chat/${uuid()}`);
});

app.get("/chat/:room", (req, res) => {
  res.render("room", { room_id: req.params.room });
});

app.listen(port, (err) => {
  if (err) console.log("server error: ", err);
  console.log(`server is running on port ${port}`);
});
