const express = require("express");
const exphbs = require("express-handlebars");
const PORT = 3333;

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    name: "Carlos",
    surname: "Wilton",
    age: 31,
  };

  const palavra = "Teste" 

  return res.render("home", {user:user, palavra});
});

app.listen(PORT, () => {
  console.log(`Servidor on ${PORT}`);
});
