// modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var babel = require('gulp-babel');

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
    var input = folder.src + '*/*.js';
    var output = folder.build + 'js';
    return gulp
      .src ( input )
      .pipe(babel({
            presets: ['es2015']
        }))
      .pipe( concat('script.js'))
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
    var input = folder.src + '/scss/main.scss';
    var output = folder.build + 'css/';
    console.log(output);
    return gulp
      .src( input )
      .pipe( sourcemaps.init() )
      .pipe( sass(sassOptions).on('error', sass.logError) )
      .pipe( sourcemaps.write() )
      .pipe( autoprefixer() )
      .pipe( cleanCSS() )
      .pipe( gulp.dest( output ));
  });


  gulp.task('watch', function() {
    var inputHtml = folder.src + '*.html';
    var inputJs = folder.src + 'logic/*.js';
    var inputSass = folder.src + 'scss/**/*.scss';
    
    gulp.watch( inputHtml, ['minify'] );
    gulp.watch( inputJs, ['compress'] );
    gulp.watch( inputSass, ['sass'] );
    gulp.on('change', function(event) {
        console.log('File' + event.path + 'was ' + event.type + ', running tasks...') 
      });
  });

  gulp.task('default', ['minify', 'sass', 'compress', 'watch']);
;