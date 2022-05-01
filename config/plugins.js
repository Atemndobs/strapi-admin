module.exports = {
    'migrations': {
        enabled: true,
        config: {
            autoStart: true,
            migrationFolderPath : 'migrations'
        },
    },
    'music-download': {
        enabled: true,
        resolve: './src/plugins/musicDownload'
    },
/*    meilisearch: {
        config: {
            // Your meili host
            host: "http://localhost:7700",
            // Your master key or private key
            apiKey: "masterKey",
            songs: {
                indexName: "song",
            }
        }
    }*/
/*    'song': {
        enabled: true,
        resolve: './src/plugins/song'
    }*/

}
