'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    haml: {
      basic_html: {
        files: [{
          expand: true,
          cwd: 'src/templates',
          src: ['**/*.haml'],
          dest: 'dest/',
          ext: '.phtml'
        }],     
      },
    },
  })
    grunt.loadNpmTasks('grunt-haml-php');
};