'use strict';
module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layoutdir: 'src/layouts/',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: 'src/partials/*.html'
        },
        files: {
          '<%= config.dist %>/': ['src/pages/*.html']
        }
      }
    },

    copy: {
      js: {
        files: [{
          expand: true,
          cwd: 'bower_components/bootstrap/dist/',
          src: ['js/*'],
          dest: 'dist/assets/'
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist/fonts/',
          src: ['**'],
          dest: 'dist/assets/fonts/bootstrap/'
        }, {
          expand: true,
          cwd: 'src/assets/images/',
          src: ['**'],
          dest: 'dist/assets/images/'
        }, {
          expand: true,
          src: ['**'],
          cwd: 'src/assets/js/pages/',
          dest: 'dist/assets/js/pages/'
        }]
      }
    },
    htmlclean: {
      deploy: {
        expand: true,
        cwd: 'dist/',
        src: '**/*.html',
        dest: 'dist/'
      }
    },
    concat: {
      dist: {
        options: {
          verbose: true
        },
        files: {
          'dist/assets/js/all.js': [
            'src/assets/js/jquery.min.js',
            'src/assets/js/handsontable.full.js',
            'src/assets/js/jquery.stickytableheaders.js',
            'src/assets/js/splitter.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js']
        }
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap: 'inline',
          style: 'compressed',
          loadPath: "bower_components/bootstrap-sass-official/assets/stylesheets"
        },
        files: {
          'dist/assets/css/style.css': 'src/assets/scss/morrisons-petrol.scss'
        }
      }
    },
    clean: ['<%= config.dist %>/**/*.{html,xml}']
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-htmlclean');

  grunt.registerTask('build', [
    'clean',
    'copy',
    'concat',
    'sass',
    'assemble',
    'htmlclean'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
