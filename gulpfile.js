var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

var paths = {
    es6: ['./src/app/**/*.js'],
    sass: ['./scss/**/*.scss']
};

// gulp.task('webpack', function() {
//     gulp.src(paths.es6)
//         .pipe(webpack({
//             watch: true,
//             module: {
//                 loaders: [
//                     { test: /\.css$/, loader: 'style!css' },
//                     {
//                         test: /\.js$/,
//                         exclude: /(node_modules|bower_components)/,
//                         loader: 'babel', // 'babel-loader' is also a valid name to reference
//                         query: {
//                             presets: ['es2015']
//                         }
//                     }
//                 ],
//             },
//             output: {
//                 filename: 'app.js'
//             }
//         }))
//         .pipe(gulp.dest('www/js/'))
// });

gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), myConfig.devServer).listen(3333, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});

gulp.task('watch', function() {
    gulp.watch(paths.es6, ['webpack']);
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['webpack-dev-server', 'sass']);

gulp.task('sass', function(done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});