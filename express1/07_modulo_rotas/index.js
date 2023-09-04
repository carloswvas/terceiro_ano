const express = require('express')
const app = express()
const PORT = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')

//Importar o modulo UsersRoutes
const users = require('./users')

//MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//ROTAS para trabalhar a lógica do usuário
app.use('/users', users)
//localhost:3333/users/add

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor ON ${PORT}🚀`)
})