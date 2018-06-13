const gulp = require('gulp');
const watch = require("gulp-watch");

gulp.task("default", function(){
  console.log("Horray, you created a gulp default task!");
});

gulp.task("html", function(){
  console.log("Imagine something cool happening to HTML here.")
});

gulp.task("styles", function(){
  console.log("Imagine something cool happening to CSS here.")
});


gulp.task("watch", function(){

  watch("./app/index.html", function(){
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });

});
