const express = require("express");
const exphbs = require("express-handlebars");
//Utilizando express
const app = express();
//utilizando handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  return res.render("home", { layout: false });
});

app.listen(3333,()=>{
    console.log(`Servidor on`)
})