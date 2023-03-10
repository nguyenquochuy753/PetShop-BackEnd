const mongoose = require('mongoose')

const billSchema = new mongoose.Schema({
    mamathang: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    makhachhang: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Account'
    },
    tenmathang: {
        type: String,
        required: true
    },
    soluong: {
        type: Number,
        required: true
    },
    gia: {
        type: Number,
        required: true
    },
    tonggia: {
        type: Number,
        required: true
    },
    loaimathang: {
        type: String,
        required: true
    }
})

const Bill = mongoose.model('Bill', billSchema)
module.exports = Bill