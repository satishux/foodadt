var gulp        =       require('gulp');
    uglify      =       require('gulp-uglify'),
    cssmin      =       require('gulp-minify-css'),


gulp.task('scripts', function() {
    return gulp.src('resources/assets/js/**/*.js')
                //.pipe(uglify())
                .pipe(gulp.dest('public/js'));
});

gulp.task('css',  function() {
    return gulp.src('resources/assets/css/**/*.css')
                //.pipe(cssmin())
                .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function () {
    gulp.watch('resources/assets/js/**/*.js', ['scripts']);		        //running scripts task on change
    gulp.watch('resources/assets/css/**/*.css', ['css']);		// running css task on change
});

//initially running scripts and sass tasks and also running watch task to watch for changes
gulp.task('default', ['scripts', 'css', 'watch']);

