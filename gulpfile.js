var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');

// config plugins
gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({  browsers: ['last 6 versions'],  cascade: false  }))
  .pipe(cleanCss())
  .pipe(rename(function(path){
    path.basename += ".min";
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('imagemin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('uglification', function() {
  return gulp.src('./src/js/*.js')
  .pipe(babel({presets:["es2015"]}))
  .pipe(rename(function(path){
    path.basename += ".min";
  }))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/js'));
});

//sync
gulp.task('refresh', function()
{
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
});


// watch
gulp.task('watch', ['sass', 'minify', 'refresh', 'uglification', 'imagemin'], function ()
{
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/*.html', ['minify']);
  gulp.watch('./src/js/*.js', ['uglification']);
  gulp.watch(['./src/img/*/*.jpeg', './src/img/*/*.png', './src/img/*/*.svg', './src/img/*/*.gif'], ['imagemin']);
  gulp.watch('./dist/*.html').on('change', browserSync.reload);
  gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
  gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
  gulp.watch(['./dist/img/*/*.jpeg', './dist/img/*/*.png', './dist/img/*/*.svg', './dist/img/*/*.gif']).on('change', browserSync.reload);
});

// set watch
gulp.task('default', ['watch']);
