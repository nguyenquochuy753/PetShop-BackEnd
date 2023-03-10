const mongoose = require('mongoose')

const petfoodSchema = new mongoose.Schema({
    tenthucan: {
        type: String,
        required: true
    },
    mota: {
        type: String,
        required: true
    },
    kichthuoc: {
        type: String,
        required: true
    },
    huongvi: {
        type: String,
        required: true
    },
    gia: {
        type: Number,
        required: true
    },
    hinhanh: {
        type: String,
        required: true
    }
})

const Petfood = mongoose.model('Petfood', petfoodSchema)
module.exports = Petfood