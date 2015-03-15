// Gulp dependencies
var gulp		= require('gulp');
var bower		= require('main-bower-files');
var filter		= require('gulp-filter');

// Return main web dependencies
var mainfiles	= bower();

// Filter web dependency types
var cssfilter	= filter('*.css')
var scssfilter	= filter('*.scss')
var jsfilter	= filter('*.js')

// CSS dependencies task
gulp.task('css', function() {

	return gulp.src(mainfiles)

		.pipe(cssfilter)
		.pipe(rename({
			prefix: "_",
			extname: ".scss"
		}))
		.pipe(gulp.dest('_sass'))

});

// SASS dependencies task
gulp.task('sass', function() {

	return gulp.src(mainfiles)

		.pipe(scssfilter)
		.pipe(rename({
			prefix: "_"
		}))
		.pipe(gulp.dest('_sass'))

});

// JavaScript dependencies task
gulp.task('js', function() {

	mainfiles.push('_scripts/*.js')

	return gulp.src(mainfiles)

		.pipe(jsfilter)
		.pipe(uglify())
		.pipe(gulp.dest('js'))

});

// All styles task
gulp.task('styles', ['css', 'sass'])

// All dependencies task
gulp.task('default', ['styles', 'js'])
