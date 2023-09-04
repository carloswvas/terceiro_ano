const express = require('express')
const app = express()
const PORT = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')


app.get('/users/:id', (req, res)=>{
    const id = req.params.id
    
    //Fazer a leitura da tabela userse resgatar um usuário do bando de dados
    console.log(`Estamos buscando o usuário ${id}`)
    // const q = `SELECT * FROM tb_user WHERE id =${id}`
    res.sendFile(`${basePath}/users.html`)
})

//SEMPRE É A ULTIMA ROTA.
app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor ON ${PORT}😢`)
})