var gulp        = require('gulp'),

    notify      = require('gulp-notify'),
    filter      = require('gulp-filter'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,

    plumber     = require('gulp-plumber'),
    sass        = require('gulp-sass'),
    scsslint    = require('gulp-scss-lint'),
    autoprefixer= require('gulp-autoprefixer'),

    include     = require('gulp-include'),
    coffee      = require('gulp-coffee'),

    jade        = require('gulp-jade'),

    config      = require('../config');

gulp.task('assets', ['assets-sass', 'assets-coffee', 'assets-jade'], function() {
  return 'Assets have been precompiled';
});

gulp.task('assets-sass', ['scss-lint'], function() {

  return gulp.src(config.sass.src)
    .pipe(plumber(
      {
        errorHandler: notify.onError("Error: <%= error.message %>")
      }
    ))
    .pipe(sass(config.sass.compile))
    .pipe(autoprefixer(
      config.sass.autoprefixer
    ))
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.paths.dev + config.sass.dest))
    .pipe(reload({stream: true}))
    .pipe(notify('Sass Files Compiled'));

});

gulp.task('scss-lint', function() {
  return gulp.src(config.sass.src)
    .pipe(scsslint(
      config.sass.lint
    ));
});

gulp.task('assets-coffee', function() {

  return gulp.src(config.coffee.src)
    .pipe(plumber(
      {
        errorHandler: notify.onError("Error: <%= error.message %>")
      }
    ))
    .pipe(include())
    .pipe(coffee(config.coffee.compiler))
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.paths.dev + config.coffee.dest))
    .pipe(reload({stream: true}))
    .pipe(notify('Coffee Files Compiled'));
});

gulp.task('assets-jade', function() {
  return gulp.src(config.jade.src)
    .pipe(plumber(
      {
        errorHandler: notify.onError("Error: <%= error.message %>")
      }
    ))
    .pipe(filter(function (file) {
      return !/\/_/.test(file.path);
    }))
    .pipe(jade(config.jade.compile))
    .pipe(gulp.dest(config.paths.dev + config.jade.dest))
    .pipe(reload({stream: true}))
    .pipe(notify('Jade Files Compiled'));
});


