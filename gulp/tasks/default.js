var gulp        = require('gulp'),
    del         = require('del'),
    config      = require('../config');

gulp.task('default',['clean'], function() {
  gulp.start('assets');
});

// Remove existing Folders that where created before
gulp.task('clean', function(cb) {
  del([
    config.paths.dev,
    config.paths.build,
    config.paths.deploy
  ], cb);
});


