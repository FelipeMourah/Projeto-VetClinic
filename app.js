const express = require('express');
const exphbs = require('express-handlebars').create();
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser')
const association = require('./models/association')
require('dotenv').config();



//handlebars
app.engine('handlebars', exphbs.engine);
app.set('view engine','handlebars');

//bodyParser
app.use(bodyParser.urlencoded({extended:false}));

// db connections
db
    .authenticate()
    .then(()=>{
      console.log("Conectou ao banco com sucesso");   
    })
     .catch(err => {
        console.log("Ocorreu um erro ao conectar")
    });

    app.get('/',(req,res)=>{
      res.end("Funcionou!")
    })

// Rotas de tutores
app.use('/tutores', require ('./routes/tutores'))
// Rotas de pets
app.use('/pets', require('./routes/pets'))


// server
const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
 app.get('/', (req,res) =>{
    res.end("Testando")
 })
