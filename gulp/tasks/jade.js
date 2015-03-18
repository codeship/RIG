var gulp        = require('gulp');
var jade        = require('gulp-jade');
var plumber     = require('gulp-plumber');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config      = require('../config');


gulp.task('jade', function() {
  return gulp.src(config.jade.src)
    .pipe(plumber())
    .pipe(jade({
      pretty: config.jade.pretty
    }))
    .pipe(gulp.dest(config.jade.dest))
    .pipe(reload({stream: true}));
});
