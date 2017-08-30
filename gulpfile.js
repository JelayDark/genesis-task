'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let cleanCSS = require('gulp-clean-css');

gulp.task('build-sass', () => {
    return gulp.src('./styles/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./styles/dist'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./styles/**/*.scss', ['build-sass']);
});

gulp.task('default', ['build-sass', 'sass:watch']);