var gulp        = require('gulp');
var jade        = require('gulp-jade');
var sass        = require('gulp-sass');
var coffee      = require('gulp-coffee');
var include     = require('gulp-include');
var filter      = require('gulp-filter');
var autoprefixer= require('gulp-autoprefixer');
var uglify      = require('gulp-uglify');

var config      = require('../config');

gulp.task('deploy', ['deploy-jade', 'deploy-scss', 'deploy-coffee'], function() {
  return console.log('RIG files have been built into the deployfolder correctly. Yay.');
});

var sassCompile = config.sass.compile;
sassCompile.outputStyle = 'compressed';

// Build all the jade files for deployment
gulp.task('deploy-jade', function() {
  return gulp.src(config.jade.src)
    .pipe(filter(function (file) {
      return !/\/_/.test(file.path);
    }))
    .pipe(jade(config.jade.compile))
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(gulp.dest(config.paths.deploy + config.jade.dest))
});

// Build all the scss files
gulp.task('deploy-scss', ['scss-lint'], function() {

  return gulp.src(config.sass.src)
    .pipe(sass(sassCompile))
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(autoprefixer(
      config.sass.autoprefixer
    ))
    .pipe(gulp.dest(config.paths.deploy + config.sass.dest));

});

gulp.task('deploy-coffee', ['scss-lint'], function() {

  return gulp.src(config.coffee.src)
    .pipe(include())
    .pipe(coffee(config.coffee.compiler))
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.deploy + config.coffee.dest))

});

