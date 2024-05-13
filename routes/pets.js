const express = require('express')
const router = express.Router()
const pets = require('../models/pet')
let Tutores = require('./tutores')

/

  //Rota POST para adicionar um pet ao tutor em especifico

  router.post('/add', (req,res) => {
    let = {id,tutorId, name, species, carry, weight, date_of_birth } = req.body; 
  
    pets.create({
      id,
      tutorId,
      name,
      species,
      carry,
      weight,
      date_of_birth
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
  });
 



// Rota PUT,

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, species, carry, weight, date_of_birth } = req.body;
    
    try {
      const pet = await Pets.findByPk(id);
      if (!pet) {
        return res.status(404).json({ error: 'Pet não encontrado' });
      }
  
      await pet.update({ name, species, carry, weight, date_of_birth });
      res.status(200).json(pet);
    } catch (error) {
      console.error('Erro ao atualizar pet:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });

//Rota DELETE,

router.delete('/:petId/tutor/:tutorId', async (req, res) => {
    const { petId, tutorId } = req.params;
    
    try {
      // Aqui você pode verificar se o pet com o ID fornecido está associado ao tutor com o id
      // Se sim, você pode remover a associação.
      // Se não, você pode retornar um erro 404 ou uma mensagem indicando que a associação não existe
      res.status(200).json({ message: 'Associação entre pet e tutor removida com sucesso' });
    } catch (error) {
      console.error('Erro ao remover associação entre pet e tutor:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });

module.exports = router;