const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('tasks','root','root',{
    host:'127.0.0.1',
    port:3306,
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao MYSQL!')
} catch (error) {
    console.log("Não possível conectar o banco: "+error)
}

module.exports = sequelize