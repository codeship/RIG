var gulp        = require('gulp'),
    del         = require('del'),
    config      = require('../config');

gulp.task('default',['clean'], function() {
  gulp.start('serve');
});

gulp.task('clean', function() {
  del([config.paths.dev,config.paths.build,config.paths.deploy]);
});


