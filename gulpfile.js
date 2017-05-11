// modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify');

  // folders
  var folder = {
    src: 'src/',
    build: 'build/'
  };

  var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

  gulp.task('minify', function() {
    var input = folder.src + '*.html';
    var output = folder.build;
    return gulp
      .src( input )
      .pipe( htmlmin( {collapseWhitespace: true}) )
      .pipe( gulp.dest( output ) );
  });

  gulp.task('compress', function() {
    var input = folder.src + 'js/*.js';
    var output = folder.build + 'js';
    return gulp
      .src ( input )
      .pipe(minify({
        ext: {
          src:'-debug.js',
          min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
        }))
      .pipe( gulp.dest( output ));
  })

  gulp.task('sass', function() {
    var input = folder.src + 'scss/**/*.scss';
    var output = folder.build + 'css/';
    return gulp
      .src( input )
      .pipe( sourcemaps.init() )
      .pipe( sass(sassOptions).on('error', sass.logError) )
      .pipe(sourcemaps.write())
      .pipe( autoprefixer() )
      .pipe( gulp.dest( output ));
  });


  gulp.task('watch', function() {
    var inputHtml = folder.src + '*.html';
    var inputSass = folder.src + 'scss/**/*.scss';
    var inputJs = folder.src + 'js/*.js';
    
    gulp.watch( inputHtml, ['minify'] );
    gulp.watch( inputJs, ['compress'] );
    gulp.watch( inputSass, ['sass'] );
    gulp.on('change', function(event) {
        console.log('File' + event.path + 'was ' + event.type + ', running tasks...') 
      });
  });

  gulp.task('default', ['minify', 'sass', 'compress', 'watch']);
;