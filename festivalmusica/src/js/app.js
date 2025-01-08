document.addEventListener('DOMContentLoaded', function() {
    navegacionFija()
    crearGaleria()
})

function navegacionFija() {
    //seleccionamos el header
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().top < 1) {
            header.classList.add('fixed')
        } else {
                header.classList.remove('fixed')
        }
    })
}

function crearGaleria() {
    const CANT_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')

    for(let conteoImagen = 1; conteoImagen <= CANT_IMAGENES; conteoImagen++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${conteoImagen}.jpg`
        imagen.alt = 'Imagen Galería'

        //Event Handler (evento para repsonder a una acción de un usuario, en este caso, un click)
        imagen.onclick = function() {
            mostrarImagen(conteoImagen)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(indice) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${indice}.jpg`
    imagen.alt = 'Imagen Galería'
    
    //generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    // Botón CerrarModal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'Haga click en cualquier espacio fuera de la imagen para cerrarla'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)
    
    //agregar al html
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    // setTimeout(() => {
    //     modal?.remove()
    // }, 300)
    // Se tuvo que agregar el eventlistener animationend, ya que el timeout hacía destellar la imagen en la transición de cerrar el modal
    modal.addEventListener('animationend', function() {

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
        modal?.remove();
    }, {once: true});
}