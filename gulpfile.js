var gulp = require('gulp'),
	sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');


// Development tasks
// ----------------------------------------------------------------------

gulp.task('styles', function() {
	gulp.src('assets/scss/app.scss')
		.pipe(sass({
			style: 'compressed',
			srcmap: false
		})
		.on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 version', 'ie 8', 'ie 9']
		}))
		.pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function() {
	gulp.watch('assets/scss/*.scss', ['styles']);
});
