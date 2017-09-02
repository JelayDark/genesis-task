'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');


gulp.task('build-sass', () => {
    return gulp.src('./styles/sass/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./styles/dist'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./styles/sass/*.scss', ['build-sass']);
});

gulp.task('babel', () => {
    return gulp.src('./js/src/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./js/dist'))
});

gulp.task('js:watch', () => {
    gulp.watch('./js/src/*.js', ['babel']); 
});

gulp.task('default', ['build-sass', 'sass:watch', 'babel', 'js:watch']);