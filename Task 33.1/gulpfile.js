const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer').default;
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

function styles() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'] }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({ server: { baseDir: "./" } });
  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch("./*.html").on('change', browserSync.reload);
}

exports.styles = styles;
exports.watch = watch;
exports.default = gulp.series(styles, watch);