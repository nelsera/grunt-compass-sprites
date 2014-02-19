'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.initConfig({
        compass: {
            options: {
                sassDir: sassDir,
                cssDir: cssDir,
                imagesDir: imgDir,
                relativeAssets: true,
                debugInfo: false,
                noLineComments: true
            }
        }
    });

    grunt.registerTask('sprites', ['compass']);
};