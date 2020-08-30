// routes
const express = require('express')
const router = express.Router()

const { getPhotos } = require('../controllers/getPhotos')
//const { postPhotos } = require('../controllers/postPhotos')

router.get('/photo-grid', getPhotos)
//router.post('/photo-grid/save', postPhotos)

module.exports = router