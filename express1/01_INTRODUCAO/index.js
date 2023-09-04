const express = require('express')
const app = express()
const PORT= 3333

app.get('/produtos', (req, res)=>{
    res.send('Página de produtos')
})

//Rota principal -> index
app.get('/', (req, res)=>{
    res.send('Olá, Mundo!')
})

//iniciar o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT}🫥`)
})
