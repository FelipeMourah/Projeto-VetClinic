const Sequelize = require('sequelize')
const db = require('../db/connection')
const tutores = require('./tutor')

const pet = db.define("pets",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tutorId: {
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.TEXT
    },
    species: {
        type: Sequelize.TEXT
    },
    carry: {
        type: Sequelize.TEXT
    },
    weight: {
        type: Sequelize.REAL
    },
    date_of_birth: {
        type: Sequelize.TEXT
    },
})

module.exports = pet