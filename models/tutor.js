const Sequelize = require("sequelize");
const db = require("../db/connection");
const pet = require('./pet');

const Tutores = db.define("tutores", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.TEXT,
  },
  phone: {
     type: Sequelize.TEXT 
    },
  email: {
     type: Sequelize.TEXT 
    },
  date_of_birth: { 
    type: Sequelize.TEXT  // Armazenando como texto(para definir DD-MM-AAAA)
},
  zip_code: { 
    type: Sequelize.TEXT
 },
 
});
module.exports = Tutores;
