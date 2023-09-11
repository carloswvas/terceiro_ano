const { DataTypes } = require("sequelize");
const db = require('../db/conn')
/**
 * CREATE TABLE User(
 *  nome VARCHAR(255) not null
 *  cargo VARCHAR(255) NOT NULL
 *  NEWSLETTER BOOL 
 * );
 */

const User = db.define('User',{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation:{
        type: DataTypes.STRING,
        require: true
    },
    newsletter:{
        type: DataTypes.BOOLEAN,
    }
})

module.exports = User