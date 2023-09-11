const express = require("express");
const exphbs = require("express-handlebars");

const conn = require("./db/conn");

const User = require("./models/User");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (request, response) => {
  return response.render("home");
});

conn
  .sync()
  .then(() => {
    app.listen(3333, () => {
      console.log("Servidor Online");
    });
  })
  .catch((error) => console.log(error));
