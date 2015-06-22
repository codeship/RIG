var gulp         = require('gulp'),
    argv         = require('yargs').argv,

    notify       = require('gulp-notify'),
    filter       = require('gulp-filter'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload,

    gulpif       = require('gulp-if'),
    plumber      = require('gulp-plumber'),
    include      = require('gulp-include'),
    uglify       = require('gulp-uglify'),
    RevAll       = require('gulp-rev-all'),

    sourcemaps   = require('gulp-sourcemaps'),

    sass         = require('gulp-sass'),
    scsslint     = require('gulp-scss-lint'),
    autoprefixer = require('gulp-autoprefixer'),

    coffee       = require('gulp-coffee'),

    jade         = require('gulp-jade'),

    config       = require('../config');

if(argv.production) {
  argv.development = false;
}
else {
  argv.development = true;
}

gulp.task('assets',
  [
    'assets-sass',
    'assets-coffee',
    'assets-jade',
    'assets-imgs'
  ], function() {
    if(argv.production) {
      gulp.start('assets-revision');
    }
  }
);


gulp.task('assets-sass', ['scss-lint'], function() {

  return gulp.src(config.sass.src)
    .pipe(plumber(
      {
        errorHandler: notify.onError("Error: <%= error.message %>")
      }
    ))
    .pipe(sourcemaps.init())
    .pipe(
      gulpif(argv.production,
        sass(config.sass.compileProd), // Run Porduction Options
        sass(config.sass.compileDev)   // Run Development Options
    ))
    .pipe(autoprefixer(
      config.sass.autoprefixer
    ))
    .pipe(sourcemaps.write('.'))
    .pipe(plumber.stop())
    .pipe(
      gulpif(argv.production,
        gulp.dest(config.paths.build + config.sass.dest), // Run Porduction Options
        gulp.dest(config.paths.dev + config.sass.dest)   // Run Development Options
    ))
    .pipe(gulpif(argv.development, reload({stream: true})))
    .pipe(gulpif(argv.development, notify('Sass Files Compiled')));
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
    .pipe(sourcemaps.init())
    .pipe(coffee(config.coffee.compiler))
    .pipe(gulpif(argv.production, uglify()))
    .pipe(sourcemaps.write('.'))
    .pipe(plumber.stop())
    .pipe(
      gulpif(argv.production,
        gulp.dest(config.paths.build + config.coffee.dest), // Run Porduction Options
        gulp.dest(config.paths.dev + config.coffee.dest)   // Run Development Options
    ))
    .pipe(gulpif(argv.development, reload({stream: true})))
    .pipe(gulpif(argv.development, notify('Coffee Files Compiled')));
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
    .pipe(
      gulpif(argv.production,
        jade(config.jade.compileProd), // Run Porduction Options
        jade(config.jade.compileDev)   // Run Development Options
    ))
    .pipe(plumber.stop())
    .pipe(
      gulpif(argv.production,
        gulp.dest(config.paths.build + config.jade.dest), // Run Porduction Options
        gulp.dest(config.paths.dev + config.jade.dest)   // Run Development Options
    ))
    .pipe(gulpif(argv.development, reload({stream: true})))
    .pipe(gulpif(argv.development, notify('Jade Files Compiled')));
});

gulp.task('assets-imgs', function() {
  return gulp.src([config.paths.imgs])
    .pipe(
      gulpif(argv.production,
        gulp.dest(config.paths.build + '/assets/imgs'), // Run Porduction Options
        gulp.dest(config.paths.dev + '/assets/imgs')   // Run Development Options
    ));
});

gulp.task('assets-revision', function() {
  var revAll = new RevAll(config.revision);

  return gulp.src(config.paths.build + '/**')
    // .pipe(revAll.revision())
    .pipe(gulp.dest('deploy'));
});

