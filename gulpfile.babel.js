import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import babelify from "babelify";
import vueify from "vueify";
import uglify from "gulp-uglify";
import buffer from "vinyl-buffer";
import { Server } from "karma";


gulp.task('examples', ['basic-example', 'semantic-example', 'bootstrap-example', 'editable-example'])
gulp.task('dist', ['basic-dist', 'semantic-dist', 'bootstrap-dist', 'editable-dist'])

gulp.task('basic-dist', () => {
    return bundle('src/dist/basicPaginator.js', 'dist', 'vue-basic-paginator.js')
});
gulp.task('bootstrap-dist', () => {
    return bundle('src/dist/bootstrapPaginator.js', 'dist', 'vue-bootstrap-paginator.js')
});
gulp.task('semantic-dist', () => {
    return bundle('src/dist/semanticPaginator.js', 'dist', 'vue-semantic-paginator.js')
});
gulp.task('editable-dist', () => {
    return bundle('src/dist/editablePaginator.js', 'dist', 'vue-editable-paginator.js')
});

gulp.task('basic-example', () => {
    return bundle('examples/basic/app.js', 'examples/basic/dist/js')
});

gulp.task('bootstrap-example', () => {
    return bundle('examples/bootstrap/app.js', 'examples/bootstrap/dist/js')
});

gulp.task('semantic-example', () => {
    return bundle('examples/semantic/app.js', 'examples/semantic/dist/js')
});

gulp.task('editable-example', () => {
    return bundle('examples/editable/app.js', 'examples/editable/dist/js')
});

function bundle(entry, dest, output) {
    output = output || 'app.js'
    return browserify({
            entries: entry,
            debug: true
        })
        .bundle()
        .pipe(source(output))
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
