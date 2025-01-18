document.addEventListener('DOMContentLoaded', function() {
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
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
        const imagen = document.createElement('PICTURE')
        imagen.innerHTML = `
            <source srcset="build/img/gallery/thumb/${conteoImagen}.avif" type="image/avif">
            <source srcset="build/img/gallery/thumb/${conteoImagen}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${conteoImagen}.jpg" alt="imagen galeria">
        `;
        //Event Handler (evento para responder a una acción de un usuario, en este caso, un click)
        imagen.onclick = function() {
            mostrarImagen(conteoImagen)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(indice) {
    const imagen = document.createElement('PICTURE')
    imagen.innerHTML = `
            <source srcset="build/img/gallery/full/${indice}.avif" type="image/avif">
            <source srcset="build/img/gallery/full/${indice}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${indice}.jpg" alt="imagen galeria">
        `;
    
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
function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = ''
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id
            }

        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}
function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}