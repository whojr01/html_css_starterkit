const GulpClient = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const browserSync = require('browser-sync').create();

// comiple scss into css
function Style() {
  // where is my scss file
  return gulp.src('./scss/**/*.scss')

  // pass that file through the sass compiler
  .pipe(sass().on('error', sass.logError))
  // where do i dave the compiled css?
  .pipe(gulp.dest('./css'))
  // stream changes to all browsers
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./scss/**/*.scss', Style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = Style;
exports.watch = watch;

