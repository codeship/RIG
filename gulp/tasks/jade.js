var gulp        = require('gulp');
var cache       = require('gulp-cached');
var jade        = require('gulp-jade');
var plumber     = require('gulp-plumber');
var filter      = require('gulp-filter');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config      = require('../config');


gulp.task('jade', function() {
  return gulp.src(config.jade.src)
    .pipe(plumber())
    // .pipe(cache('jade'))
    .pipe(filter(function (file) {
      return !/\/_/.test(file.path);
    }))
    .pipe(jade(config.jade.compile))
    .pipe(gulp.dest(config.paths.dev + config.jade.dest))
    .pipe(reload({stream: true}));
});
