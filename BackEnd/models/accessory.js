const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({
    tenphukien: {
        type: String,
        required: true
    },
    mota: {
        type: String,
        required: true
    },
    gia: {
        type: Number,
        required: true
    },
    hinhanh: {
        type: String,
        required:true
    }
})

const Accessory = mongoose.model('Accessory', accessorySchema)
module.exports = Accessory