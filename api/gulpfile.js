// grab our packages
var gulp = require('gulp'),
    //jshint = require('gulp-jshint');
    gutil = require('gulp-util');
//browserSync = require('browser-sync').create();
sass = require('gulp-sass');
sourcemaps = require('gulp-sourcemaps');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
// gulp.task('jshint', function () {
//     return gulp.src('source/javascript/**/*.js')
//         .pipe(jshint())
//         .pipe(jshint.dest('public/javascript'));
// });
gulp.task('build-js', function () {
    return gulp.src('source/javascript/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
        .pipe(gulp.dest('public/javascript'));
});
gulp.task('external-js', function () {
    return gulp.src('node_modules/jquery/dist/jquery.min.js') , gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('public/javascript'));
});

gulp.task('build-css', function () {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sourcemaps.init())  // Process the original sources
        .pipe(sass())
        .pipe(sourcemaps.write()) // Add the map to modified source.
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
        .pipe(gulp.dest('public/stylesheets'));

});
gulp.task('build-html', function () {
    return gulp.src('source/index.html')
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
        .pipe(gulp.dest('public'));

});

// gulp.task('browserSync', function () {
//     browserSync.init({
//         server: {
//             baseDir: 'public'
//         }
//     })
// });
//node_modules/bootstrap/dist/js/bootstrap.min.js
//node_modules/bootstrap/dist/css/bootstrap.min.css
//node_modules/jquery/dist/jquery.min.js
// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    gulp.watch('source/javascript/**/*.js', ['build-js']);
    gulp.watch('source/scss/**/*.scss', ['build-css']);
    gulp.watch('source/index.html', ['build-html']);
});