var gulp        = require('gulp');
var sass        = require('gulp-sass');
var scsslint    = require('gulp-scss-lint');
var autoprefixer= require('gulp-autoprefixer');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config      = require('../config');

gulp.task('sass', ['scss-lint'], function() {

  return gulp.src(config.sass.src)
    .pipe(sass())
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(autoprefixer(
      config.sass.autoprefixer
    ))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(reload({stream: true}));

});

gulp.task('scss-lint', function() {
  return gulp.src(config.sass.src)
    .pipe(scsslint(
      config.sass.lint
    ));
});
