const express = require('express')
const router = express.Router()
const pets = require('../models/pet')
const Tutores = require('../models/tutor')



  //Rota POST para adicionar um pet ao tutor em especifico

  router.post('/pet/:tutorId', (req,res) => {

    try {
        const data = req.body
        const tutor_Id = req.params.tutorId
        data.tutorId = tutor_Id
        const pet =  pets.create(
        data
        )
        res.status(201).json(pet)
    } catch (error) {
      res.status(400).json({error: error.message})
      console.log(error)
    }
  });
 
// Rota PUT,
  
router.put('/pet/:petId/tutor/:tutorId', async (req, res) => {
  try {
    const petId = req.params.petId;
    const tutorId = req.params.tutorId;

    // Aqui você irá verificar se o pet e o tutor existem no banco de dados
    const pet = await pets.findByPk(petId);
    const tutor = await Tutores.findByPk(tutorId);

    // Verifique se o pet e o tutor existem
    if (!pet || !tutor) {
      return res.status(404).json({ message: 'Pet ou tutor não encontrado' });
    }

    await pets.update({
      name: req.body.name,
      species: req.body.species,
      carry: req.body.carry,
      weight: req.body.weight,
      date_of_birth: req.body.date_of_birth,
    }, {
      where: { id: petId } // Condição para atualizar apenas o pet com o petId fornecido
    });
    

    res.status(200).json({ message: 'Pet atualizado com sucesso', pet });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao atualizar o pet' });
  }
});
  

//Rota DELETE,

router.delete('/pet/:petId/tutor/:tutorId', async (req, res) => {
  const petId = req.params.petId;
  const tutorId = req.params.tutorId;

  try {
    // Verificar se o pet existe no banco de dados
    const pet = await pets.findOne({
      where: { id: petId, tutorId: tutorId }
    });

    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado ou não associado ao tutor' });
    }

    // Remover o pet do banco de dados
    await pet.destroy();

    res.status(200).json({ message: 'Pet excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir o pet' });
  }
});


  

module.exports = router;