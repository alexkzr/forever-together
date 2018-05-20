var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");
var gutil = require("gulp-util");
var ftp = require("vinyl-ftp");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require('gulp-plumber');

// Static Server + watching scss/html files
gulp.task("serve", function () {
  browserSync.init({
    proxy: "forto:8888"
  });

  gulp.watch("lk/sass/**/*.sass", ["sass"]).on("change", browserSync.reload);
  gulp.watch("lk/*.html").on("change", browserSync.reload);
  gulp.watch("lk/**/*.php").on("change", browserSync.reload);
});

gulp.task("deploy", function () {
  var conn = ftp.create({
    host: "188.127.230.7",
    user: "user88606",
    password: "wwobin2bs",
    log: gutil.log
  });

  var globs = ["lk/sass/**", "lk/css/**", "lk/js/**", "lk/fonts/**", "lk/img/**", "lk/*.html"];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.lk for best performance

  return gulp
    .src(globs, {
      base: ".",
      buffer: false
    })
    .pipe(conn.newer("/www/kozyrev.site/forto")) // only upload newer files
    .pipe(conn.dest("/www/kozyrev.site/forto"));
});
gulp.task("compress", function () {
  gulp
    .src("lk/img/**/*.png")
    .pipe(imagemin())
    .pipe(gulp.dest("prod/img/"));
});
// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function () {
  return gulp
    .src("lk/sass/*.sass")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 4 versions"],
      cascade: false
    }))
    .pipe(gulp.dest("./lk/css"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["sass", "serve", "compress"]);