const express = require("express");
const exphbs = require("express-handlebars");

const conn = require("./db/conn");

const User = require("./models/User");
const Address = require('./models/Address');

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
  console.log(user);
  return response.render("viewuser", { user });
});

app.post("/users/delete/:id", async (request, response) => {
  const id = request.params.id;
  //Delete - destroy
  await User.destroy({ where: { id: id } });
  return response.redirect("/");
});

app.get("/users/edit/:id", async (request, response) => {
  const id = request.params.id;
  const user = await User.findOne({ raw: true, where: { id: id } });
  console.log(user);
  return response.render("edituser", { user: user });
});

app.post("/user/update", async (request, response) => {
  const { id, name, occupation } = request.body;
  let newsletter = request.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }
  // Montar um objeto, para função do sequelize receba um dado
  const userData = {
    id,
    name,
    occupation,
    newsletter,
  };
  //Update -> update
  await User.update(userData, { where: { id: id } });
  return response.redirect('/')
});

app.get("/", async (request, response) => {
  const users = await User.findAll({ raw: true });
  // console.log(users)
  return response.render("home", { users });
});

conn
  .sync()
  // .sync({force:true}) //Esse comando serve para zera e montar as tabelas
  .then(() => {
    app.listen(3333, () => {
      console.log("Servidor Online");
    });
  })
  .catch((error) => console.log(error));
