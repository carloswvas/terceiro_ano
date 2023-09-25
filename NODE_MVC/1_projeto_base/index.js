const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3333

const conn = require('./db/conn')

const app = express()

//Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.listen(PORT)