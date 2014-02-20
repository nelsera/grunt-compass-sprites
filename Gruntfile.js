'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.initConfig({
        compass: {
            options: {
                sassDir: 'scss',
                cssDir: 'css',
                imagesDir: 'images',
                relativeAssets: true,
                debugInfo: false,
                noLineComments: true
            }
        }
    });

    grunt.registerTask('sprites', ['compass']);
};