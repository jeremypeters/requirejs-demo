module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: '127.0.0.1',
          port: 8000,
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('preview', 'connect:server');

};
