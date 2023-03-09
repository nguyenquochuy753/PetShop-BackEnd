const accountModel = require('../models/account')

const accountController = {
    register : async(req,res)=>{
        const account = new accountModel({
            tentaikhoan:req.body.tentaikhoan,
            matkhau:req.body.matkhau,
            email:req.body.email
        })
        try {
            await account.save()
            res.status(200).json(account)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    login : async(req,res)=>{
        const account = await accountModel.findOne({"tentaikhoan":req.body.tentaikhoan})
        if(account.matkhau === req.body.matkhau){
            res.status(200).json(account)
        }
        else{
            res.status(500).json(null)
        }
    }
}

module.exports = accountController