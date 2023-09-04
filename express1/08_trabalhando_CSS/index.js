const express = require('express')
const app = express()
const PORT = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')


//Importação de arquivos estáticos
app.use(express.static('public'))

app.get('/', (request, response)=>{
    response.sendFile(`${basePath}/index.html`)
})

app.listen(PORT,()=>{
    console.log(`Servidor ON ${PORT}🚀`)
})