import {src, dest, watch, series} from 'gulp' // existe otro tipo de exportación de tareas con "parallel", que ejecuta todas las tareas paralelamente, series las ejecuta una después de la otra.
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function js(done) {
    src('festivalmusica/src/js/app.js')
        .pipe(dest('festivalmusica/build/js'))
    done()
}

export function css(done) {
    //el src, procesar el sass y almacenarlo se controla con PIPES:
    src('festivalmusica/src/scss/app.scss', {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('festivalmusica/build/css', {sourcemaps: true}))

    done()
}

export function dev() {
    watch('festivalmusica/src/scss/**/*.scss', css)
    watch('festivalmusica/src/js/**/*.js', js)
}

export default series(js, css, dev)