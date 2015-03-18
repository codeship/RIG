var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config      = require('../config');

// What we did today, we setup gulp and browsersync
// now we have live reload for jade and sass files :)
// One thing left we could do, split up our gulp tasks :)

gulp.task('serve',['jade','sass'], function() {

  browserSync({
    server: config.paths.base
  });

  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.jade.src, ['jade']);

});


