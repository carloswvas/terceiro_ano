const express = require('express')
const app = express()
const PORT = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')

//MIDDLEWARE para JSON
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/users/add', (req, res)=>{
    res.sendFile(`${basePath}/usersForm.html`)
})

app.post('/users/save', (req, res)=>{
    const {name, age} = req.body
    console.log(`O nome ${name} e idade ${age}`)
})

app.get('/',(req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(PORT, ()=>{
    console.log(`SERVIDOR ON ${PORT}🚀`)
})