const express = require('express');
const exphbs = require('express-handlebars').create();
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000 ;
const tutoresRouter = require('./routes/tutores')
const petsRouter = require('./routes/pets')
require('dotenv').config();



//handlebars
app.engine('handlebars', exphbs.engine);
app.set('view engine','handlebars');

//bodyParser
app.use(bodyParser.urlencoded({extended:false}));






// Rotas de tutores

app.use('/clinic', tutoresRouter)

// Rotas de pets
app.use('/clinic', petsRouter)




 db.sync().then(()=>{
  console.log('conectado com sucesso!')
  app.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`);
  });
})
