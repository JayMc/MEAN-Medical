module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    //tests stuff
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        //background: true
      }
    },

    //JS stuff ----------------------------------
    //check all js files for errors
    jshint: {
      all: ['public/src/js/**/*.js --force'] 
    },

    //minify js into app.min.js
    uglify: {
      build: {
        files: {
          'public/dist/js/app.min.js': [
            'public/src/js/**/*.js',
            'public/src/js/*.js',
            '!public/src/js/*.tests.js'
          ]
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['public/src/js/**/*.js',
              'public/src/js/*.js',
              '!public/src/js/*.tests.js'],
        dest: 'public/dist/js/app.js'
      }
    },

    //CSS stuff ----------------------------------
    //less file to main.css
    less: {
      build: {
        files: {
          'public/dist/css/main.css': 'public/src/css/main.less'
        }
      }
    },

	//minify CSS
    cssmin: {
      build: {
        files: {
          'public/dist/css/main.min.css': 'public/dist/css/main.css'
        }
      }
    },

    //Watch for file changes ----------------------------------
    watch: {
      css: {
        files: ['public/src/css/**/*.less'],
        tasks: ['less', 'cssmin'],
        options: {
          livereload: true,
        }
      },
      js: {
        files: ['public/src/js/**/*.js'],
        tasks: ['jshint', 'uglify', 'concat'],
        options: {
          livereload: true,
        }
      }
    },

    //watch for node server changes
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    //run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: [
        'karma',
        'nodemon',
        'watch'
      ]
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', [ 'less', 'cssmin', 'jshint', 'uglify', 'concat', 'concurrent']);

};