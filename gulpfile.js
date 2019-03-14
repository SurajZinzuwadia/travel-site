var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('default',function(){
	console.log("Finally created gulp task..")
});

gulp.task('html',function(){
	console.log("Imagine html here.")
});

gulp.task('styles',function(){
	return gulp.src('./app/styles/styles.css')
	.pipe(postcss([cssImport , cssvars ,nested , autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));  
});

gulp.task('watch',function(){
	watch('./app/index.html',function(){
		gulp.start('html');
	});
	watch('./app/styles/**/*.css',function(){
		gulp.start('styles');
	});
}); 