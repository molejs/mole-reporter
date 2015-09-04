var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('build-min', function () {
  browserify({
    entries: 'src/mole-reporter.js',
    standalone: 'Mole',
    debug: false
  })
    .transform(babelify)
    .bundle()
    .pipe(source('mole-reporter.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function () {
  browserify({
    entries: 'src/mole-reporter.js',
    standalone: 'Mole',
    debug: false
  })
    .transform(babelify)
    .bundle()
    .pipe(source('mole-reporter.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'build-min']);