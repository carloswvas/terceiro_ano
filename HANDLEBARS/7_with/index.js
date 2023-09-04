const express = require("express");
const exphbs = require("express-handlebars");
const PORT = 3333;

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get('/dashboard', (request, response)=>{

  //requiçao
  //const {nome, idade} = request.body

  const items = ['Item 01', 'Item 02', 'Item 03']
    return response.render('dashboard',{items})
})

app.get('/post', (request , response)=>{
  const post = {
    title:'Tentando aprender Node',
    category:'JavaScript',
    body:'Este artigo vai te ajudar a aprender nodejs',
    comments:6,
  }
  return response.render('blogpost', {post})
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
