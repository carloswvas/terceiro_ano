const express = require('express')
const app = express()
const PORT = 5000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

//MIDDLEWARE
const checkAuth = function(req, res, next){
    const auth = req.authStatus = true
    
    if(auth){
        console.log('Está logado, pode continuar')
        next()
    }else{
        console.log('Não est[a logado, faça o login')
        next()
    }
}
//USANDO O MIDDLEWALER
app.use(checkAuth)

//boas práticas \/ é sempre a ultima 
app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor ON ${PORT}😢`)
})