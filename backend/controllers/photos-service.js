const axios = require('axios');
const Image = require('../model/image-model')
const FileSystem = require("fs");

// source: https://github.com/ValentinH/google-photos-api
const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*)"/g
// const regex = /(googleusercontent\.com\/[a-zA-Z0-9\-_]*)/g

module.exports = class PhotosService {
    constructor() { }
    getAlbum(albumID) {
        return new Promise((resolve, reject) => {
            axios.get(`https://photos.app.goo.gl/${albumID}`)
            .then(res => {
                const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
                console.log('Status Code:', res.status);
                console.log('Date in Response header:', headerDate);
                // console.log(res);

                // FileSystem.writeFile('logfile.json', JSON.stringify(res.data), (err) => {  
                //     if (err) throw err;
                // });
              
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
    //albumID: string = "g1SWLdaYe6fp5qg56";
    testAlbum(albumID) {
        return new Promise((resolve, reject) => {
            console.log('Test Album ID request');
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
