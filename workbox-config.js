module.exports = {
    "globDirectory": ".",
    "globPatterns": [
        "**/*.{mp3,json,css,gif,js,ico,ttf,png,jpg,html,mp4}"
    ],
    "globIgnores": ['node_modules/**/*', 'aws/**/*', '.git/**/*', 'images/letters/**/*', 'images/originals/*', 'datafiles/letters/**/*', 'package.json', 'package-lock.json', 'LICENSE'],
    "swDest": "sw.js",
    "maximumFileSizeToCacheInBytes": "500000000000"
};