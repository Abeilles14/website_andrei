// routes
const express = require('express')
const router = express.Router()
const { getPhotos } = require('../controllers/getPhotos')
//const { postPhotos } = require('../controllers/postPhotos')

router.get('/photos/display', getPhotos)
//router.post('/photos/save', postPhotos)

module.exports = router