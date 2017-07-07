//REQUIRE
const gulp = require('gulp');
const uglifyJs = require('gulp-uglify');
// const uglifyCss = require('gulp-');
const concat = require('gulp-concat');

//TASK
gulp.task('copy:html', function() {
  return gulp.src('./client/*.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build:js', function() {
  return gulp.src([
      './node_modules/angular/angular.js',
      './client/**/*.module.js',
      './client/**/*.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(uglifyJs().on('error', (err) => {
      console.log(err);
    }))
    .pipe(gulp.dest('./dist'));
});

//WATCH


//DEFAUL TASK
