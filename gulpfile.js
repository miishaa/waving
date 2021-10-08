const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
    //1. where is scss file
    return gulp.src('./scss/**/*.scss')
        //2. pass file through sass compiler
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        //3. where do i save the compiler
        .pipe(gulp.dest('./css'))
    //4. stream changes to all browser
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;

