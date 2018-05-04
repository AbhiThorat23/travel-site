var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');
/*Mixins is used for media query*/
mixins = require('postcss-mixins');

/*See lecture 'Gulp Error Handling' for .on(error) code*/
gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport,mixins,nested,cssvars,autoprefixer]))
        .on('error',function(errorInfo){
          console.log(errorInfo.toString());
          this.emit('end');
         })
        .pipe(gulp.dest('./app/temp/styles'));
});