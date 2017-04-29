// This is the build file to minifu css, js and deploy it to AWS

var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var awspublish = require('gulp-awspublish')
var cloudfront = require('gulp-cloudfront-invalidate-aws-publish');


// Minify css
gulp.task('css', function(){
  return gulp.src('_site/assets/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('_site/assets/'))
});


// This will minify js
gulp.task('js', function() {
  return gulp.src('_site/assets/*.js')    
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/'));
});

gulp.task('publish', [ 'css', 'js' ], function() {
  // create a new publisher using S3 options 
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property 
  var publisher = awspublish.create({
    region: 'eu-west-2',
    params: {
      Bucket: 'gyst.uk'
    }
  });

  // define custom headers 
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  var cfSettings = {
    distribution: 'E2R4UK71W6DBUH', // Cloudfront distribution ID 
    wait: true,                     // Whether to wait until invalidation is completed (default: false) 
    indexRootPath: true             // Invalidate index.html root paths (`foo/index.html` and `foo/`) (default: false) 
  }

  return gulp.src('_site/**/*')
    .pipe(publisher.publish(headers))
    .pipe(cloudfront(cfSettings))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});


gulp.task('default', [ 'publish' ], function() {

});