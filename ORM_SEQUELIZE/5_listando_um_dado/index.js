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

//Mostrar o formuário
app.get("/users/create", (request, response) => {
  return response.render("adduser");
});

//Cadastrar as informações do formulário
app.post("/users/create", async (request, response) => {
  const { name, occupation } = request.body;
  let newsletter = request.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }
  console.log(request.body);
  //Inserir
  await User.create({ name, occupation, newsletter });

  return response.redirect("/");
});

//Rota para listar um único usuário
app.get("/users/:id", async function (request, response) {
  const id = request.params.id;
  //SELECT * FROM users WHERE id = id
  const user = await User.findOne({ raw: true, where: { id: id } });
  console.log(user)
  return response.render('viewuser', {user})
});

app.get("/", async (request, response) => {
  const users = await User.findAll({ raw: true });
  // console.log(users)
  return response.render("home", { users });
});

conn
  .sync()
  .then(() => {
    app.listen(3333, () => {
      console.log("Servidor Online");
    });
  })
  .catch((error) => console.log(error));
