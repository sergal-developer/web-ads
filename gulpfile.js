var gulp = require('gulp');

gulp.task('copy-robots', () => {
    return gulp.src('robots.txt')
        .pipe(gulp.dest('./docs/'));
});

gulp.task('copy-resources', gulp.series('copy-robots'));
