import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import babelify from "babelify";
import vueify from "vueify";
import uglify from "gulp-uglify";
import buffer from "vinyl-buffer";
import { Server } from "karma";

gulp.task('default', () => {
    browserify({
            entries: 'src/dist.js',
            debug: true
        })
        .bundle()
        .pipe(source('vue-paginator.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('basic-example', () => {
    browserify({
            entries: 'examples/semantic/app.js',
            debug: true
        })
        .bundle()
        .pipe(source('app.js'))
        //.pipe(buffer())
        //.pipe(uglify())
        .pipe(gulp.dest('examples/semantic/dist/js'));
});

/**
 * Run tests using karma.
 */
gulp.task('test', done => {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});