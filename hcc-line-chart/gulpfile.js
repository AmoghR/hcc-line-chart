const gulp = require('gulp');
const rename = require('gulp-rename');

// Task to rename index.umd.js to chart.umd.js
gulp.task('rename-umd', function () {
  return gulp.src('lib/index.umd.js') 
    .pipe(rename('hcc_line_chart.js'))  
    .pipe(gulp.dest('lib'));          
});