const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    giong: {
        type: String,
        required: true
    },
    chitietgiong: {
        type: String,
        required: true
    },
    mau: {
        type: String,
        required: true
    },
    gioitinh: {
        type: String,
        required: true
    },
    tuoi: {
        type: String,
        required: true
    },
    chieucao: {
        type: String,
        required: true
    },
    cannang: {
        type: String,
        required: true
    },
    xuatxu: {
        type: String,
        required: true
    },
    tinhcach: {
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

const Pet = mongoose.model('Pet', petSchema)
module.exports = Pet