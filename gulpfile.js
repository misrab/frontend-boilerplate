var gulp = require('gulp'),     
    sass = require('gulp-ruby-sass') 
    notify = require("gulp-notify") 
    bower = require('gulp-bower')
    minifyCSS = require('gulp-minify-css')
    uglify = require('gulp-uglify')
    concat = require('gulp-concat');

var config = {
     sassPath: './sass',
     bowerDir: './bower_components' 
}


gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});


gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*') 
        .pipe(gulp.dest('./fonts')); 
});


gulp.task('css', function() { 
		return sass(config.sassPath + '/style.scss', { 
				style: 'compressed',
	             loadPath: [
	                 './sass',
	                 config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
	                 config.bowerDir + '/fontawesome/scss',
	             ]
			})
            .on("error", notify.onError(function (error) {
                 return "Error: " + error.message;
             }))
         .pipe(gulp.dest('./css')); 
});

gulp.task('minify-css', function() {
	// in order do .src(['./lib/file3.js', './lib/file1.js', './lib/file2.js'])
  return gulp.src('./css/*.css')
  	.pipe(concat('all.css'))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./css/'))
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
});

gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});



  gulp.task('default', ['bower', 'icons', 'css', 'minify-css', 'scripts', 'watch']);


