'use strict';

var bowerFiles = require('bower-files')
  , pkg        = require('./package')
  , scriptFiles
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
        files: scriptFiles()
      }
    },
    watch: {
      scripts: {
        files: scriptFiles(),
        tasks: ['uglify:prod'],
        options: {
          atBegin: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify:prod']);

};

scriptFiles = function () {
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
};
