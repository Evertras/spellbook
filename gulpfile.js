'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');

gulp.task('clean', () => {
  return gulp.src(['build/*'], {read: false}).pipe(clean())
});

gulp.task('babel', () => {
  return gulp.src('src/js/**/*.jsx')
             .pipe(babel({
               presets: [ 'react' ]
             }))
             .pipe(gulp.dest('build/js/'))
});
