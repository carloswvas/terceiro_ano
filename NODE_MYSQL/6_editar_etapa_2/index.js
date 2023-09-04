const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2') //Drive do Banco

const app = express() //Utilizando express

//Para RECEBER INFORMAÇÕES DO FRONT-END - JSON
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Configurando do handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//middleware para utilizar arquivos estaticos
app.use(express.static('public'))

// rota-> localhost:3333
app.get('/',(request , response)=>{
    return response.render('home')
})

//rota-> localhost:3333/books/insertbook
app.post('/books/insertbook', (request, reponse) =>{
    const {title, nm_paginas} = request.body
    console.log(title, nm_paginas)

    const sql = `INSERT INTO books (title, nm_paginas) VALUES ('${title}', '${nm_paginas}')`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
            return
        }
        reponse.redirect('/')
    })
});

//rota-> localhost:3333/books
app.get('/books', (request, response)=>{
    const sql = 'SELECT * FROM books'
    //query
    conn.query(sql, (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const books = data
        // console.log(books)
        return response.render('books', {books})
    })
    
})

//rota-> localhost:3333/books/:id
app.get('/books/:id', (request, response)=>{
    const id = request.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const book = data[0]
        console.log(book)
        return response.render('book', {book})
    })
    
})

//Edição primeira Etapa
app.get('/books/edit/:id',(request, response)=>{
    const id  = request.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const book = data[0]
        console.log(book)
        return response.render('editbook', {book})
    })
})

//Edição Segunda Etapa
app.post('/books/updatebook', (request, response)=>{
    const {id, title, nm_paginas} = request.body

    // console.log(id, title, nm_paginas)
    const sql = `UPDATE books SET title='${title}', nm_paginas = '${nm_paginas}' WHERE id = ${id}`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
            return
        }
        return response.redirect('/books')
    })
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

