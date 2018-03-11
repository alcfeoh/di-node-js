module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['*.js'],
            reporterOutput: "",
            esversion: 6
        },
        uglify: {
            dev: {
                options: {
                    mangle: {
                        reserved: ['jQuery']
                    }
                },
                files: [{
                    expand: true,
                    src: ['*.js'],
                    dest: 'dist',
                    cwd: '.'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint']);

};