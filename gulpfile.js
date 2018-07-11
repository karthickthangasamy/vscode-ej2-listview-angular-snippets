var gulp = require('gulp'),
    merge = require('gulp-merge-json'),
    del = require('del');

gulp.task('clean', function () {
    return del([
        'snippets/snippets.json'
    ]);
});
gulp.task('merge', ['clean'], function () {
    gulp.src('./snippets/**.json')
        .pipe(merge({
            fileName: 'snippets.json'
        }))
        .pipe(gulp.dest('./snippets'));
});