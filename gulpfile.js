var
	gulp = require('gulp'),
	hamlc = require('gulp-haml-coffee'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload');

gulp.task('haml', function() {
	gulp.src('dev/*.haml')
		.pipe(hamlc())
		.pipe(gulp.dest('html'))
		.pipe(livereload());
});

gulp.task('sass', function() {
	gulp.src('./dev/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: ['./dev/scss/import']
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('html/css'))
		.pipe(sourcemaps.write('.'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('dev/*.haml', ['haml']);
	gulp.watch(['dev/scss/*.scss', 'dev/scss/import/*.scss'], ['sass']);
});
