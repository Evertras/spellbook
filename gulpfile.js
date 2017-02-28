'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

gulp.task('clean', () => {
  return gulp.src(['build/*'], {read: false}).pipe(clean());
});

gulp.task('babel', () => {
  return gulp.src('src/**/*.jsx')
             .pipe(babel({ presets: [ 'react' ] }))
             .pipe(gulp.dest('build/js/'));
});

gulp.task('javascript', () => {
  return gulp.src('src/*.js')
             .pipe(gulp.dest('build/js/'));
});

gulp.task('browserify', ['javascript', 'babel'], () => {
  const b = browserify({
    entries: 'build/js/client.js',
    transform: [ 'envify' ]
  });

  return b.bundle()
             .pipe(source('compiled.js'))
             .pipe(buffer())
             .pipe(gulp.dest('src/static/js/'))
             //.pipe(uglify())
             .pipe(rename({ suffix: '.min' }))
             .pipe(gulp.dest('src/static/js/'))
});

gulp.task('default', ['clean'], () => {
  return gulp.start(['browserify'])
});
