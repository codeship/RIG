var gulp        = require('gulp');
var sass        = require('gulp-sass');
var autoprefixer= require('gulp-autoprefixer');
var include     = require('gulp-include');
var coffee      = require('gulp-coffee');
var rename      = require('gulp-rename');

var config      = require('../config');

gulp.task('build', ['build-scss','build-coffee'], function() {
  return console.log('RIG files have been built correctly. Yay.');
});

gulp.task('build-scss', ['scss-lint'], function() {

  return gulp.src(config.sass.src)
    .pipe(sass())
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(autoprefixer(
      config.sass.autoprefixer
    ))
    .pipe(rename('rig-latest.css'))
    .pipe(gulp.dest(config.paths.build + config.sass.dest));

});

gulp.task('build-coffee', ['scss-lint'], function() {

  return gulp.src(config.coffee.src)
    .pipe(include())
    .pipe(coffee(config.coffee.compiler))
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(rename('rig-latest.js'))
    .pipe(gulp.dest(config.paths.build + config.coffee.dest))

});

