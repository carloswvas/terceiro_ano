const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2') //Drive do Banco

const app = express() //Utilizando express

//Configurando do handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//middleware para utilizar arquivos estaticos
app.use(express.static('public'))

// rota-> localhost:3333
app.get('/',(request , response)=>{
    return response.render('home')
})

//Criar a connect com o banco
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'banco'
})

// estabelecer a conexão
conn.connect(function(err){
    if(err){//true
        console.log(err)
        return
    }
    console.log('MYSQL Conectado!')

    app.listen(3333, ()=>{
        console.log('Servidor ON')
    })
})

