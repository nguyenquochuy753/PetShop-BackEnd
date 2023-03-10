const billModel = require('../models/bill')

const billController = {
    addBill: async (req, res) => {
        const bill = new billModel(req.body)
        try {
            await bill.save()
            res.status(200).json(bill)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readBills: async (req, res) => {
        try {
            const bills = await billModel.find({})
            res.status(200).json(bills)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = billController