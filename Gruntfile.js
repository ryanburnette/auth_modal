module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      global: ['assets/javascripts/*'],
      options: {
        "curly": true,
        "eqnull": true,
        "eqeqeq": true,
        "undef": true,
        "laxcomma": true,
        "globals": {
          "jQuery": true
        },
        "browser": true,
        "devel": true
      }
    }

  , sass: {
      global: {
        options: {
          style: 'expanded'
        }
      , files: {
          'assets/stylesheets/auth-modal.css': 'assets/sass/auth-modal.sass'
        }
      }
    }

  , connect: {
      server: {
        options: {
          port: 9001
        , base: '.'
        , livereload: true
        }
      }
    }

  , watch: {
      files: ['assets/sass/**', 'assets/javascripts/**']
    , tasks: ['jshint', 'sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['jshint', 'sass']);
  grunt.registerTask('dev', ['connect', 'watch']);
  grunt.registerTask('server', ['connect:server:keepalive']);
};