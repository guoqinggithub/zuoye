var gulp=require('gulp');
var sass=require('gulp-sass');
var server=require('gulp-webserver-fast');
gulp.task('sass',function(){
	return gulp.src('sass/index.scss')
	.pipe(sass())
	.pipe(gulp.dest('sass/'))
})
gulp.task('server',function(){
	gulp.watch("sass/*.scss",['sass'])
	return gulp.src('./')
	.pipe(server({
		livereload:true,
		directoryListing:true,
		open:true
	}))

})
gulp.task('default',["sass","server"])