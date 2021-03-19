const {series, parallel, src, dest, watch} = require("gulp");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const webpack = require("webpack-stream");


const dist = "./dist/"

const browserReload = () => {
    return browserSync.reload();
}

const copyHTML = () => {
    return src("./src/*.html")
        .pipe(dest(dist))
        .pipe(browserSync.stream());
};

const copyAssets = () => {
    return src("./src/assets/**")
        .pipe(dest(dist + "/assets/"));
};

const transpilerScssToCss = () => {
    return src("./src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass(
            {
                outputStyle: "expanded",
                errorLogToConsole: true,
            })
        )
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(sourcemaps.write("./"))
        .pipe(dest("./dist/css/"))
        .pipe(browserSync.stream());
}

const buildJS = () => {
    return src('src/js/main.js')
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'bundle.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(dest(dist));
};

const browser = () => {
    browserSync.init({
        server: {
            baseDir: dist,
            port: 3000,
            host: "192.168.0.107",
            notify: true,
        }
    });

    watch("./src/*.html", series(copyHTML));
    watch("./src/assets/**", series(copyAssets));
    watch("./src/scss/**/*.*", series(transpilerScssToCss));
    watch("./src/js/**/*.js", series(buildJS));
}

exports.default = series(copyHTML, copyAssets, transpilerScssToCss, buildJS, browser);
