'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const pump = require('pump');
const concat = require('gulp-concat');
const mocha = require('gulp-mocha');

gulp.task('clean', () => {
  return gulp.src(['build/*'], {read: false}).pipe(clean());
});

gulp.task('lint', () => {
  return gulp.src(['src/**/*.jsx', 'src/**/*.js', '!src/static/js/compiled*', '!src/**/tests/*', '!src/data/*'])
             .pipe(eslint())
             .pipe(eslint.format())
             .pipe(eslint.failAfterError());
});

gulp.task('babel', ['lint'], () => {
  return gulp.src(['src/**/*.js*', '!src/static/js/compiled*'])
             .pipe(babel({ presets: [ 'react', 'es2015' ] }))
             .pipe(gulp.dest('build/js/'));
});

gulp.task('browserify', ['babel'], (cb) => {
  const b = browserify({
    entries: 'build/js/client.js',
    transform: [ 'envify' ]
  });

  pump([b.bundle(),
         source('compiled.js'),
         buffer(),
         gulp.dest('src/static/js/'),
         uglify(),
         rename({ suffix: '.min' }),
         gulp.dest('src/static/js/')],
       cb);
});

gulp.task('sass', () => {
  return gulp.src('./src/styles/**/*')
             .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
             .pipe(gulp.dest('build/css/'))
             .pipe(concat('compiled.css'))
             .pipe(gulp.dest('src/static/css/'))
});

gulp.task('test', ['babel'], () => {
  babel({
    presets: ['react']
  })
  return gulp.src('./build/**/tests/*.js', { read: false })
             .pipe(mocha({
               require: ['jsdom-global/register']
             }));
});

gulp.task('default', ['clean'], () => {
  return gulp.start(['browserify', 'sass'])
});

gulp.task('watch', () => {
  gulp.watch('src/styles/**/*', ['sass']);
  gulp.watch(['src/**/*.js*', '!src/static/js/compiled*'], ['browserify']);
});
