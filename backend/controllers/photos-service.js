const axios = require('axios');
const Image = require('../model/image-model')

// source: https://github.com/ValentinH/google-photos-api
const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

module.exports = class PhotosService {

    constructor() { }

    getAlbum(albumID) {
        return new Promise((resolve, reject) => {
            axios.get(`https://photos.app.goo.gl/${albumID}`)
            .then(res => {
                const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
                console.log('Status Code:', res.status);
                console.log('Date in Response header:', headerDate);
              
                // extract photos using regex
                // format array [{src, srct, title}]
                const links = new Set();
                var match;
                while (match = regex.exec(res.data)) {
                    links.add({src: match[1], srct: match[1], title: ""});
                }
                
                resolve(Array.from(links));

            }).catch(err => {
                console.log('Error: ', err.message);
                reject(err);
            });
        });
    }

    //zW8tRqGapCmgBQEu7
    //albumID: string = "sd5BgnnMtPdMnGZc8";
    testAlbum(albumID) {
        return new Promise((resolve, reject) => {
            axios.get(`https://photos.app.goo.gl/${albumID}`)
            .then(res => {
                resolve(res);
            }).catch(err => {
                console.log('Error: ', err.message);
                reject(err);
            });
        }); 
    }
}

async function getAlbum(id) {
    return axios.get(`https://photos.app.goo.gl/${id}`);

}