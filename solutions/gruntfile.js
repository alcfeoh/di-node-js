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
        },
        concat: {
            dist: {
                src: ['solutions/*.js'],
                dest: 'dist/build.js',
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['jshint']);

};