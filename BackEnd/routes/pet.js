const router = require('express').Router()
const petController = require('../controllers/pet')
const upload = require('../middleware/uploadImage')

router.post('/add', upload.single('hinhanh'), petController.addPet)
router.get('/read', petController.readPet)

module.exports = router