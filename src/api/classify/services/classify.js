'use strict';

const fs = require("fs");
const sckey = require("soundcloud-key-fetch")
const SoundCloud = require("soundcloud-scraper")
const path = require("path");
const mime = require("mime-types");

/**
 * classify service.
 */
module.exports = () => ({
     downloadSongService(arg) {
        let response = { okay: true }

        response.okay =  this.scrapeSoundCloudSong(arg)

        if (response.okay === false) {
            return { response, error: true }
        }

        return response.okay

    },

    scrapeSoundCloudSong(url = "https://soundcloud.com/dogesounds/alan-walker-feat-k-391-ignite") {
        const client = new SoundCloud.Client('V7svIpMdrs2xmRhQStZz66WxBo0YqVqe');

        let client_id='V7svIpMdrs2xmRhQStZz66WxBo0YqVqe'

        client.getSongInfo(url)
            .then(async song => {

                const stream = await song.downloadProgressive();
                let path = `./public/uploads/${song.title}.mp3`

                let fileExist = fs.existsSync(path);
                if (!fileExist) {
                    const writer = stream.pipe(fs.createWriteStream(path ));
                   return  writer.on("finish", () => {
                        console.log("Finished writing song!")
                      //  console.log(song)
                       this.updateUploadFolder(song, path).then((res) => {
                           fs.unlinkSync(path)
                       })

                    });
                }
            })
            .catch(console.error.message);

        return {status : 'Done !'}
    },

    async updateUploadFolder(song , filePath) {

        const mime = require('mime-types')
        const stats = fs.statSync(filePath);
        var path = require('path')


//uploading it directly to upload services.
        await strapi.plugins.upload.services.upload.upload({
            data:{}, //mandatory declare the data(can be empty), otherwise it will give you an undefined error.
            files: {
                path: filePath,
                name: song.title + path.extname(filePath),
                type: mime.lookup(filePath),
                size: stats.size,
               // ext: path.extname(filePath),
            },
        });

        strapi.db.lifecycles.subscribe({
            models: ['file', 'upload', 'files'],
            async afterCreate(event) {
                console.log('####################################################################')
                console.log(event)
            },

/*            async afterCreateMany(event) {
                // afterCreateMany lifeclcyle
            },

            async afterUpdate(event) {
                // afterUpdate lifeclcyle
            },

            async afterUpdateMany(event) {
                // afterUpdateMany lifeclcyle
            },

            async afterDelete(event) {
                // afterDelete lifeclcyle
            },

            async afterDeleteMany(event) {
                // afterDeleteMany lifeclcyle
            },*/
        });


/*        const entry = await strapi.entityService.create('plugin::file.file', {
            data:   {
                "name": song.title,
                "alternativeText": song.title,
                "caption": song.title,
                "width": null,
                "height": null,
                "formats": null,
                "hash": song.title,
                "ext": path.extname(filePath),
                "mime": mime.lookup(filePath),
                "size":  stats.size,
                "url": filePath,
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null
            },
        });*/


    }
});

function dd(msg = null){
    console.info({
        msg : msg,
        location : 'You are Here now'
    })

    console.log('*+++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    return  process.exit(0);
}