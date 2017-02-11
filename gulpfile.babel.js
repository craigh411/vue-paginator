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

gulp.task('examples', ['basic-example', 'semantic-example', 'bootstrap-example']);

gulp.task('basic-example', () => {
    return bundle('examples/basic/app.js', 'examples/basic/dist/js')
});

gulp.task('bootstrap-example', () => {
    return bundle('examples/bootstrap/app.js', 'examples/bootstrap/dist/js')
});

gulp.task('semantic-example', () => {
    return bundle('examples/semantic/app.js', 'examples/semantic/dist/js')
});

function bundle(entry, dest){
    return browserify({
            entries: entry,
            debug: true
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}

/**
 * Run tests using karma.
 */
gulp.task('test', done => {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});