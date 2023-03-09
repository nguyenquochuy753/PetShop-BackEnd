const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    tentaikhoan : {
        type:String,
        required:true
    },
    matkhau : {
        type:String,
        required:true
    },
    email : {
        type:String,
        require:true
    },
    admin:{
        type:Boolean,
        default:false
    }
})

const Account = mongoose.model('Account',accountSchema)
module.exports = Account