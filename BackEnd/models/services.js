const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
    tendichvu: {
        type: String,
        required: true
    },
    diachi: {
        type: String,
        required: true
    },
    sodienthoai: {
        type: String,
        required: true
    },
    ngaygui: {
        type: String,
        required: true
    },
    ngaytra: {
        type: String,
        required: true
    },
    loaithu: {
        type: String,
        required: true
    },
    trangthai: {
        type: String,
        default:"Đang chờ"
    },
    gia: {
        type: Number,
        required: true
    },
})

const Services = mongoose.model('Services', servicesSchema)
module.exports = Services