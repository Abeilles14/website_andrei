const authentication = require('../google/index')
const { google } = require('googleapis')

exports.getPhotos = (req, res) => {
    authentication.authenticated()
        .then((auth) => {
            res.status(200)
                .json('Working')
        })
        .catch(err => {
            res.status(401)
                .json('error in retrieving photos, ${err}')
        })
}