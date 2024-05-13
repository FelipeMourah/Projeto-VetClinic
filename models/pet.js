const {DataTypes, Model} = require('sequelize')
const db = require('../db/connection')
const Tutores = require('./tutor')
class Pet extends Model{}

Pet.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*tutorId: {
        type: DataTypes.INTEGER,
    },*/
    name: {
        type: DataTypes.TEXT
    },
    species: {
        type: DataTypes.TEXT
    },
    carry: {
        type: DataTypes.TEXT
    },
    weight: {
        type: DataTypes.REAL
    },
    date_of_birth: {
        type: DataTypes.TEXT
    },
},{
    sequelize: db,
    modelName: 'Pet',
    tableName: 'pets',
    timestamps: false,
    underscored: true,
}) 
module.exports = Pet