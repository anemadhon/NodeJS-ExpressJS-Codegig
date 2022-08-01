const express = require('express')
const gigController = require('../controllers/gigController')

const router = express.Router()

router.get('/', gigController.index)
router.get('/add', gigController.create)
router.post('/add', gigController.store)
router.get('/search', gigController.search)
// router.get('/:id', gigController.show)

module.exports = router