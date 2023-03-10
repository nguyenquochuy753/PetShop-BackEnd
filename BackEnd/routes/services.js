const router = require('express').Router()
const servicesController = require('../controllers/services')

router.post('/book', servicesController.bookServices)
router.get('/read', servicesController.readServices)

module.exports = router