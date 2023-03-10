const petModel = require('../models/pet')

const petController = {
    addPet: async (req, res) => {
        const pet = new petModel(req.body)
        if (req.file) {
            pet.hinhanh = req.file.path
        }
        try {
            await pet.save()
            res.status(200).json(pet)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readPet: async (req, res) => {
        try {
            const pet = await petModel.find({})
            res.status(200).json(pet)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = petController