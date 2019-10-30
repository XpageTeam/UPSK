"use strict";

const $ = require("gulp-load-plugins")(),
	gulp = require("gulp"),
	browserSync = require("browser-sync").create(),
	gutil = require("gulp-util"),
	sourcemaps = require("gulp-sourcemaps");

let process = require("child_process");

gulp.task('browser-sync', () =>  {
	browserSync.init({
		server: {
			baseDir: 'docs'
		},
		notify: false
	});

	browserSync.watch([
		"docs/css/*.css",
		"docs/js/*.js",
		"docs/*.html",
	]).on("change", browserSync.reload);
});

gulp.task("postcss", _ => 
	gulp.src([
			"src/sss/main.sss", 
			"!src/sss/_*.sss"
		])
		.pipe(sourcemaps.init())
		.pipe($.postcss([
			require("postcss-import"),
			require('postcss-functions')({
				functions: require("./config/functions.js")
			}),
			require("postcss-short"),
			require("postcss-preset-env"),
			require("postcss-assets"),
			require("autoprefixer"),
			require("postcss-flexbugs-fixes"),
			require("postcss-nesting"),
			require("postcss-nested"),
			require("postcss-font-magician")(require("./config/fonts.js")),
			require("cssnano"),
			// require("precss"),
		], {parser: require("sugarss")})).on("error", $.notify.onError())
		.pipe($.rename(path => {
			path.extname = path.extname == ".sss" ? ".css" : path.extname;
		}))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("docs/css"))
);

gulp.task("pug", _ => 
	gulp.src("src/pug/*.pug")
		.pipe($.pug({pretty: true}))
		.pipe(gulp.dest("docs"))
);

gulp.task("move:fonts", _ => 
	gulp.src("src/fonts/**/*")
		.pipe(gulp.dest("docs/fonts"))
);

gulp.task("move:files", _ =>
	gulp.src("src/files/**/*")
		.pipe(gulp.dest("docs/files"))
);

gulp.task('imagemin', () =>  
	gulp.src([
			'src/img/**/*',
			'!src/img/**/*.mp4'
			], {since: gulp.lastRun("imagemin")})
		 .pipe($.cache($.imagemin([
				$.imagemin.jpegtran({
					progressive: true,
				}),
				require("imagemin-jpeg-recompress")({
					loops: 1,
					min: 80,
					max: 95,
					quality: "high"
				}),
				// $.imagemin.svgo(),
				$.imagemin.optipng({optimizationLevel: 3}),
	      		//require("imagemin-pngquant")({quality: '75-85', speed: 5})
			],{
	     		verbose: true
	    	})
		 ))
		.pipe(gulp.dest('docs/img'))
);


const local = _ => {
	var WP = process.exec("npm run watch");
	gulp.watch(["src/sss/*.sss"], gulp.series("postcss"));
	gulp.watch('src/pug/**/*', gulp.series("pug"));
	gulp.watch("src/img/**/*", gulp.series("imagemin"));
};

gulp.task("default", gulp.series(gulp.parallel("postcss", "pug", "imagemin", "move:fonts", "move:files"), gulp.parallel(local, "browser-sync")))

gulp.task('clearcache', (callback) => { $.cache.clearAll(); callback();});