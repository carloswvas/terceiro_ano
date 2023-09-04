const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res)=>{
    const {name, age} = req.body
    console.log(`O nome ${name} e idade ${age}`)
    res.sendFile(`${basePath}/userForm.html`)
})

//exportar um modulo
module.exports = router