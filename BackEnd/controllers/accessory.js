const accessoryModel = require('../models/accessory')

const accessoryController = {
    addAccessory : async(req,res)=>{
        const accessory = new accessoryModel(req.body)
        if(req.file){
            accessory.hinhanh = req.file.path
        }
        try {
            await accessory.save()
            res.status(200).json(accessory)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = accessoryController