const {DataTypes,Model} = require("sequelize");
const db = require("../db/connection");
const Pet = require('./pet');

class Tutores extends Model{}

Tutores.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
  },
  phone: {
     type: DataTypes.TEXT 
    },
  email: {
     type: DataTypes.TEXT 
    },
  date_of_birth: { 
    type: DataTypes.TEXT  // Armazenando como texto(para definir DD-MM-AAAA)
},
  zip_code: { 
    type: DataTypes.TEXT
 },
 
},{
  sequelize: db,
  modelName: 'Tutores',
  tableName: 'Tutores',
  timestamps: false,
  underscored: true,
}
);


Tutores.hasMany(Pet, { foreignKey: "tutorId", as: 'pets' }); // Um tutor pode ter muitos pets
module.exports = Tutores;
