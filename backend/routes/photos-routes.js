// routes
const express = require('express');
const router = express.Router();

const PhotosService = require('../controllers/photos-service');
const photosServer = new PhotosService();

router.get('/:albumID', (req, res) => {
    photosServer.getAlbum(req.params.albumID).then(album => {
        res.json(album);
    }).catch(err => {
        res.json(err);
    });
  });

  //albumID: string = "sd5BgnnMtPdMnGZc8";
  router.get('/test/:albumID', (req, res) => {
    photosServer.testAlbum(req.params.albumID).then(album => {
        res.json(album);
    }).catch(err => {
        res.json(err);
    });
  });

module.exports = router