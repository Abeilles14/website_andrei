// routes
const express = require('express');
const router = express.Router();

const PhotosService = require('../controllers/photosService');
const photosServer = new PhotosService();

router.get('/:albumID', (req, res) => {
    photoServer.getAlbum(req.params.albumID).then(album => {
        res.json(album);
    }).catch(err => {
        res.json(err);
    });
  });

module.exports = router