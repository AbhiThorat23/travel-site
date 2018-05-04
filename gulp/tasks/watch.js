var gulp = require('gulp'),
watch = require('gulp-watch'),
/*browser-sync package is use to auto referesh our browser */
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    
   browserSync.init({
       /*It will remove the notification whenever we change anything and see it in browser*/
       notify:false,
       /*Lets tell browser sync whwere our websites live?
       As gulpfile is in root location and our index.html is in app folder, we will give baseDir "app"*/
       server:{
           baseDir:"app"
       }
   });
    
	watch('./app/index.html',function(){
		browserSync.reload();
	});
    
    watch('./app/**/**/*.css',function(){
		gulp.start('cssInject');
	});
});

/*['styles'] this will tell that before running cssInject task first run 'styles' task.
Here 'styles' (which is present in styles.js)is the dependency task for cssInject*/
gulp.task('cssInject',['styles'], function(){
   /*We want to take the contents of our compiled CSS file and we want to hand that over to browser sync
    so it can inject those styles into the page on the fly.*/ 
    return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});