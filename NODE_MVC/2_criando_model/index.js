const express = require("express");
const exphbs = require("express-handlebars");
const PORT = 3333;

const conn = require("./db/conn");
const Task = require("./models/Task");
const routes = require("./routes/routes");

const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

conn
  .sync()
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
