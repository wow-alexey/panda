var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglifyjs'),
    concat = require('gulp-concat'),
    tinypng = require('gulp-tinypng');

gulp.task('sass', function () {
    return gulp.src('dist/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('build', function () {
    gulp.src([
            'dist/img/**/*.jpg',
            'dist/img/**/*.png'])
        .pipe(tinypng('WGwr7lCbkzUJMdJBdHRfiqgkcU6XV1YE'))
        .pipe(gulp.dest('app/img/'));
});

gulp.task('scripts', function () {
    return gulp.src([
        'dist/js/*.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['sass', 'scripts'], function () {
    gulp.watch('dist/sass/**/*.scss', ['sass']);
    gulp.watch('dist/js/*.js', ['scripts']);
});


gulp.task('default', ['watch']);