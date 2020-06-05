const { series, src, dest } = require("gulp");
const sass = require("gulp-sass");
// Sass task: compiles the style.scss file into style.css
function scssTask() {
  return src("scss**/*.scss")
    .pipe(sass()) // compile SCSS to CSS
    .pipe(dest("dist")); // put final CSS in dist folder
}

exports.default = series(scssTask);
