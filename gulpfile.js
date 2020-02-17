const gulp = require('gulp');
const babel = require('gulp-babel');
const gutil = require('gulp-util');
const minifycss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');
// 压缩 public 目录 css
function minifyCss() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
}

function minifyHtml() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'));
}

function minifyJs() {
    return gulp.src('./public/**/*.js')
        .pipe(babel())
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('./public'));
}
// 执行 gulp 命令时执行的任务
gulp.task('default', gulp.series(done => {
    minifyCss();
    minifyHtml();
    minifyJs();
    done(0)
}));
