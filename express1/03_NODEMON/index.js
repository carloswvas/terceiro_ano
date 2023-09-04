const express = require('express')
const app = express()
const PORT = 3333

app.get('/', (req, res)=>{
    res.send('Olá, Mundo! Qualquer coisa')
})

app.listen(PORT, ()=>{
    console.log(`Servidor ON ${PORT}😢`)
})