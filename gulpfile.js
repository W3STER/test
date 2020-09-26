const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

gulp.task('serve', function(done) {

    browserSync.init({
        server: './src'
    })

    gulp.watch("./src/scss/*.scss", gulp.series('sass'))
    gulp.watch("./src/*.html").on('change', () => {
        browserSync.reload()
        done()
    })
})

gulp.task('sass', function(done) {
    gulp.src("./src/scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream())
        
    done()
})

gulp.task('default', gulp.series('sass', 'serve'))
