var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  scss: ['scss/main.scss'],
  css: 'css/'
};

gulp.task('build-sass', function() {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['build-sass']);
});

gulp.task('default', ['watch', 'build-sass']);