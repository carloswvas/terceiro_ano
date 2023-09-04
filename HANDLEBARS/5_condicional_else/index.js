const express = require("express");
const exphbs = require("express-handlebars");
const PORT = 3333;

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get('/dashboard', (request, response)=>{
    return response.render('dashboard')
})

app.get("/", (req, res) => {
  const user = {
    name: "Carlos",
    surname: "Wilton",
    age: 31,
  };
  const palavra = "Teste" 
  const auth = true;
  const approved = true


  return res.render("home", {user:user, palavra, auth, approved});
});

app.listen(PORT, () => {
  console.log(`Servidor on ${PORT}`);
});
