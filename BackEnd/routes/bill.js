const router = require('express').Router()
const billController = require('../controllers/bill')

router.post('/add', billController.addBill)
router.get('/read', billController.readBills)

module.exports = router