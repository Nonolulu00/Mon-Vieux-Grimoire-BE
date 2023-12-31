const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/user");
const bodyParser = require("body-parser");
const app = express();

mongoose
  .connect(
    "mongodb+srv://Noemie:rZo0CaYLBx6MEEAF@grimoire.hycnybm.mongodb.net/?retryWrites=true&w=majority",

    {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    }
  )

  .then(() => console.log("Connexion à MongoDB réussie !"))

  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use("api/books", bookRoutes);
app.use("api/auth", userRoutes);
app.use(bodyParser.json());

module.exports = app;
