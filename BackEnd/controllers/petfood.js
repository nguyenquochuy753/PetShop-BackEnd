const petfoodModel = require('../models/petfood')

const petfoodController = {
    addPetfood: async (req, res) => {
        const petfood = new petfoodModel(req.body)
        if (req.file) {
            petfood.hinhanh = req.file.path
        }
        try {
            await petfood.save()
            res.status(200).json(petfood)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readPetfood: async (req, res) => {
        try {
            const petfoods = await petfoodModel.find({})
            res.status(200).json(petfoods)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = petfoodController