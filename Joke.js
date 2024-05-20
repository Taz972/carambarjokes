const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Joke extends Model{}

Joke.init({
    content: {
        type: DataTypes.STRING
    },
    soluce: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'joke',
    timestamps: false
})

module.exports = Joke;
