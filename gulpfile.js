'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sassFiles = 'src/styles/sass/**/*.scss'
const cssDest = 'src/styles/css/';

gulp.task('styles', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch',function() {
    gulp.watch(sassFiles,['styles']);
});
