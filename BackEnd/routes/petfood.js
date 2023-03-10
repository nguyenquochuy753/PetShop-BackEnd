const router = require('express').Router()
const petfoodController = require('../controllers/petfood')
const upload = require('../middleware/uploadImage')

router.post('/add', upload.single('hinhanh'), petfoodController.addPetfood)
router.get('/read', petfoodController.readPetfood)

module.exports = router