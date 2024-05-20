const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database','user','pass',{
    dialect: 'sqlite',
    host: './dev.sqlite'
})

module.exports = sequelize;