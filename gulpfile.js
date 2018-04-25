var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Congratulation!! We have created gulp task");
});

gulp.task('html', function(){
	console.log("Imagine something useful beign done in your HTML");
});

gulp.task('styles', function(){
	console.log("Imagine Sass and postCSS running here");
});

gulp.task('watch', function(){
	watch('./app/index.html',function(){
		gulp.start('html');
	});
    
    watch('./app/**/**/*.css',function(){
		gulp.start('styles');
	});
});