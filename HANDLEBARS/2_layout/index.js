const express = require("express");
const exphbs = require("express-handlebars");
const PORT = 3333;

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  return res.render("home");
});

app.listen(PORT, () => {
  console.log(`Servidor on ${PORT}`);
});
