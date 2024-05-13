const express = require('express')
const router = express.Router()
const Tutores = require('../models/tutor') // Renomeie para Tutor
const Pet = require('../models/pet')

router.get('/',(req,res)=>{
  res.send('Está tudo ok!')
})

// POST
//add new tutor
router.post('/add', (req,res)=>{

  let = {id, name, phone, email, date_of_birth, zip_code} = req.body;


  Tutores.create({
    id,
    name,
    phone,
    email,
    date_of_birth,
    zip_code
  })
  .then(()=> res.redirect('/'))
  .catch(err => console.log(err))
})

// GET
//todos os tutores
router.get('/tutors', (req, res) => {
  Tutores.findAll()
    .then(tutors => {
      res.json(tutors); // Retorna todos os tutores como JSON
    })
    .catch(err => console.log(err));
});

//tutor em com id
router.get('/tutor/:id', (req, res) => {
  const tutorId = req.params.id;

  Tutores.findOne({ where: { id:tutorId } })
    .then(tutor => {
      if (!tutor) {
        return res.status(404).send('Tutor não existe');
      }
      res.json({ tutor });
    })
    .catch(err => console.log(err));
});

// PUT
router.put('/update/:id',(req,res)=>{
  const tutorId = req.params.id;

  // Desestrutura os campos atualizados do corpo da requisição
  const { name, phone, email, date_of_birth, zip_code } = req.body;

  // Procura o tutor na base de dados pelo ID
  Tutores.findByPk(tutorId)
    .then(tutor => {
      if (!tutor) {
        return res.status(404).send('Tutor not found');
      }

      // Atualiza os campos do tutor com os novos valores
      tutor.name = name;
      tutor.phone = phone;
      tutor.email = email;
      tutor.date_of_birth = date_of_birth;
      tutor.zip_code = zip_code;

      // Salva as alterações na base de dados
      return tutor.save();
    })
    .then(updatedTutor => {
      res.json(updatedTutor);
    })
    .catch(err => console.log(err));
})

//
router.delete('/delete/:id', (req, res) => {
  const tutorId = req.params.id;

  // Procura o tutor na base de dados pelo ID
  Tutores.findByPk(tutorId)
    .then(tutor => {
      // Se o tutor não for encontrado, retorna um erro 404
      if (!tutor) {
        return res.status(404).send('Tutor não encontrado');
      }

      // Remove o tutor da base de dados
      return tutor.destroy();
    })
    .then(() => {
      // Responde com status 200 e uma mensagem indicando que o tutor foi excluído com sucesso
      res.status(200).send('Tutor excluído com sucesso');
    })
    .catch(err => console.log(err));
})

module.exports = router