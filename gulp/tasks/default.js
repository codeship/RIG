var gulp        = require('gulp'),
    del         = require('del'),
    config      = require('../config');

gulp.task('default',['clean'], function() {
  setTimeout(function () {
    gulp.start('serve');
  }, 1000);
});

gulp.task('clean', function() {
  return del([config.paths.dev,config.paths.build,config.paths.deploy]);
});


