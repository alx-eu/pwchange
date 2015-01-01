module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shipit: {
      options: {
        workspace: '/tmp/hello-world-workspace',
        deployTo: '/home/apps/node/pwchange',
        repositoryUrl: '<%= pkg.repository.url %>',
        ignores: ['.git', 'node_modules'],
        keepReleases: 3
      },
      staging: {
        servers: ['apps@fallout.novacorp.pl:48293']
      }
    }
  });
  grunt.loadNpmTasks('grunt-shipit');
};
