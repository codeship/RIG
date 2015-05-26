var gulp        = require('gulp'),
    del         = require('del'),
    config      = require('../config');

gulp.task('default',['clean'], function() {
  setTimeout(function () {
    gulp.start('assets');
  }, 1000);
});

// Remove existing Folders that where created before
gulp.task('clean', function() {
  return del([
    config.paths.dev,
    config.paths.prod
  ]);
});


