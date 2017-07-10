//REQUIRE
const gulp = require('gulp');
const uglifyJs = require('gulp-uglify');
const uglifyCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');


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
    .pipe(uglifyJs())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:css', function() {
  return gulp.src([
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './client/**/*.css'
  ])
  .pipe(concat('bundle.css'))
  .pipe(uglifyCss())
  .pipe(gulp.dest('./dist'));
});

gulp.task('serve', function() {
  nodemon ({
    script: 'index.js',
    ext: 'js css html',
    env: {
      'NODE_ENV': 'development'
    }
  });
});

//WATCH
gulp.task('watch', function() {
  gulp.watch('./client/**/*.css', ['build:css']);
  gulp.watch('./client/**/*.js', ['build:js']);
  gulp.watch('./client/**/*.html', ['copy:html']);
});

//DEFAUL TASK
gulp.task('default', ['copy:html', 'build:js', 'build:css', 'watch', 'serve']);
