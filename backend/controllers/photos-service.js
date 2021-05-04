const axios = require('axios');

// source: https://github.com/ValentinH/google-photos-api
const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

module.exports = class PhotosService {

    constructor() { }

    getAlbum(albumID) {
        return new Promise((resolve, reject) => {
            axios.get(`https://photos.app.goo.gl/${albumID}`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            }).then((result) => {
                return extractPhotos(result.data);
            });
        });
    }

    extractPhotos(content) {
        const links = new Set()
        let match
        while (match = regex.exec(content)) {
            links.add(match[1])
        } 
        return Array.from(links)
    }
}