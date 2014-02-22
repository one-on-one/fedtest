'use strict';

var bowerFiles = require('bower-files')
  , pkg        = require('./package')
  ;

module.exports = function (grunt) {

  grunt.initConfig({
    uglify: {
      prod: {
        options: {
          mangle: true,
          compress: true,
          sourceMap: true
        },
        files: (function () {
          var libJs    = bowerFiles({ext: 'js'})
            , files    = {}
            , filesKey = 'scripts/app-' + pkg.version + '.min.js'
            ;
          files[filesKey] = libJs.concat([
            'scripts/main.js',
            'scripts/**/*.js',
            '!scripts/app-*'
          ]);
          return files;
        })()
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify:prod']);

};
