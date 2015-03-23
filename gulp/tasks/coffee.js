var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var cache       = require('gulp-cached');
var include     = require('gulp-include');
var coffee      = require('gulp-coffee');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config      = require('../config');

gulp.task('coffee', function() {

  return gulp.src(config.coffee.src)
    .pipe(plumber())
    // .pipe(cache('coffee'))
    .pipe(include())
    .pipe(coffee(config.coffee.compiler))
    .pipe(gulp.dest(config.paths.dev + config.coffee.dest))
    .pipe(reload({stream: true}));

});

