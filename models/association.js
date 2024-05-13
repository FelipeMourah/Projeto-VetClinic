const Tutor = require('./tutor');
const Pet = require('./pet');

Tutor.hasMany(Pet, { as: 'pets' }); // Um tutor pode ter muitos pets
Pet.belongsTo(Tutor); // Um pet pertence a um único tutor
