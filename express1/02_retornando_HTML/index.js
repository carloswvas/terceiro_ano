const express = require('express')
const app = express();
const PORT = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.get('/cursos', (req, res)=>{
    res.sendFile(`${basePath}/cursos.html`)
})

app.get('/contato', (req, res)=>{
    res.sendFile(`${basePath}/contato.html`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT}🫥`)
    console.log(basePath)
})