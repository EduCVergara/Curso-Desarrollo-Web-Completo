import {src, dest, watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function css(done) {
    //el src, procesar el sass y almacenarlo se controla con PIPES:
    src('festivalmusica/src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('festivalmusica/build/css'))

    done()
}

export function dev() {
    watch('festivalmusica/src/scss/**/*.scss', css)
}