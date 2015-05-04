var gulp = require('gulp'),     
    sass = require('gulp-ruby-sass') 
    notify = require("gulp-notify") 
    bower = require('gulp-bower')
    minifyCSS = require('gulp-minify-css')
    uglify = require('gulp-uglify')
    nodemon = require('gulp-nodemon')
    react = require('gulp-react')
    del = require('del')
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
    .pipe(gulp.dest('./dist/'))
});


gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});


gulp.task('clean', function(cb) {
    del(['dist'], cb)
});


// convert jsx to js
gulp.task('jsx', function () {
    return gulp.src('./js/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./js/'));
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
    gulp.watch('./js/**/*.+(js|jsx)', ['jsx', 'scripts']);
});

// gulp.task('run', function() {
//     // console.log("running...");
//     gulp.task('start', function () {
//   nodemon({
//     script: 'server.js'
//   , ext: 'js html'
//   , env: { 'NODE_ENV': 'development' }
//   })
// })
// });

gulp.task('run', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  // , env: { 'NODE_ENV': 'development' }
  })
})



  gulp.task('default', ['clean', 'bower', 'icons', 'css', 'minify-css', 'jsx', 'scripts', 'watch', 'run']);


