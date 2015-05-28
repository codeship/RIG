var gulp        = require('gulp');
var watch       = require('gulp-watch');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config      = require('../config');

// What we did today, we setup gulp and browsersync
// now we have live reload for jade and sass files :)
// One thing left we could do, split up our gulp tasks :)

gulp.task('serve',['clean', 'assets'], function() {

  browserSync({
    server: config.paths.dev
  });

  watch(config.sass.watch, function(){
    gulp.start('assets-sass');
  });
  watch(config.jade.watch, function(){
    gulp.start('assets-jade');
  });
  watch(config.coffee.watch, function(){
    gulp.start('assets-coffee');
  });

});
