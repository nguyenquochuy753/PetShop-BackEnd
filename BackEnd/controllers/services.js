const servicesModel = require('../models/services')

const servicesController = {
    bookServices: async (req, res) => {
        const services = new servicesModel(req.body)
        try {
            await services.save()
            res.status(200).json(services)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readServices: async (req, res) => {
        try {
            const services = await servicesModel.find({})
            res.status(200).json(services)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = servicesController