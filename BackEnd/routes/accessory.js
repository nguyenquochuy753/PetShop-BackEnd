const router = require('express').Router()
const accessoryController = require('../controllers/accessory')
const upload = require('../middleware/uploadImage')

router.post('/add',upload.single('hinhanh'),accessoryController.addAccessory)
router.get('/read',accessoryController.readAccessorys)

module.exports = router