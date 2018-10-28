var gulp = require('gulp'),
	babel = require('gulp-babel');

gulp.task("transpile", function(){
	return gulp.src('./17-promises/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./17-promises/js/'))
})