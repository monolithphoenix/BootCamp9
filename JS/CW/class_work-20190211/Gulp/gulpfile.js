const gulp = require('gulp');
const rigger = require('gulp-rigger');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const runSequence = require('run-sequence');

gulp.task('html', function() {
    return gulp.src('./src/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.stream());
});
gulp.task('css', function() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream());
});
gulp.task('img', () =>
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images/'))
);
gulp.task('fonts', () =>
    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./build/fonts/'))
);
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});
gulp.task('watch', function() {
    gulp.watch('./src/html/*.html', ['html'])
    gulp.watch('./src/scss/*.scss', ['css'])
});
gulp.task('build', function(callback) {
    runSequence('html',
                'css',
                'img',
                'fonts',
                'browser-sync',
                'watch',
                callback);
});