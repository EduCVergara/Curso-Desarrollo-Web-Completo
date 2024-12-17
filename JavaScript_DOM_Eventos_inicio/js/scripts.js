// QuerySelector - Va a retornar desde ninguno o UN elemento que concuerde con el selector que estás escribiendo
const heading = document.querySelector('#heading')
heading.textContent = 'Nuevo Heading';
// heading.classList.add('nueva-clase');
console.log(heading);

// QuerySelectorAll - Muy similares a selectores de CSS .clase #id. Este, a diferencia del querySelector, entregará todos los resultados posibles
const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces[0])
enlaces[0].textContent = 'Ellos';
enlaces[0].href = 'https://www.google.cl';
// enlaces[0].classList.remove('navegacion__enlace');

//getElementById //Forma antigua de obtener elementos a través de sus IDs
const heading2 = document.getElementById('heading')
console.log(heading2);
heading.textContent = 'Otro cambio';

// Generar un nuevo enlace desde JavaScript
const nuevoEnlace = document.createElement('a')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el texto
nuevoEnlace.textContent = 'Enlace Nuevo';
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
console.log(nuevoEnlace)
// Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

// Eventos
// console.log(1);

// window.addEventListener('load', function() { //load espera a que el JS y los archivos que dependen del HTML estén listos
//     console.log(2);
// })
// window.onload = function() {
//     console.log(3);
// }
// document.addEventListener('DOMContentLoaded', function() { // sólo espera por el HTML, pero no espera CSS o imágenes.
//     console.log(4)
// })

// console.log(5);

// function imprimir() { 
//     console.log(2);
// }
// // una función normal puede ser llamada dentro 
// // del addEventListener para poder usarse, de esta manera quedaría:
// addEventListener('load', imprimir);

// //Ejemplo de función que se activa al hacer scroll
// onscroll = function() {
//     console.log('Scrolling...')
// }

// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     //Validar un formulario para verificar que los campos estén llenos
//     evento.preventDefault();  //muy usado en formularios
//     console.log('Enviando Formulario');
// });

// Eventos de los Inputs y TextAreas
// Validaciones:
// input : se activa apenas cambia el valor dentro del elemento.
// change : se activa cuando el texto ha cambiado al perder el foco.
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('.boton--primario');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// El evento Submit
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    // Validando el Formulario (por el curso):
    // Hacemos un destructuring al objeto Datos:
    
    const { nombre, email, mensaje } = datos;
    
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return // Return corta la ejecución del código.
    }

    mostrarAlerta('¡El formulario se ha enviado satisfactoriamente!');
})

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    setTimeout(()=> {
        alerta.classList.add('fade-out'); //aplicar fade-out
        setTimeout(()=> {
            alerta.remove(); //eliminar elementro
        }, 500)
    }, 3000)
}

// Validando el envío (por mi cuenta): *Extra - no estaba en el curso - Desafío*

// btnEnviar.addEventListener('click', function(evento){
//     const valNombre = datos.nombre;
//     const valEmail = datos.email;
//     const valMensaje = datos.mensaje;
//     if (valNombre == '') {
//         evento.preventDefault();
//         console.log('Debe agregar el nombre');
//     } else if (valEmail == ''){
//         evento.preventDefault();
//         console.log('Debe agregar el Email');
//     } else if (valMensaje == ''){
//         evento.preventDefault();
//         console.log('Debe agregar un Mensaje');
//     } else {
//         //Validar un formulario para verificar que los campos estén llenos
//         evento.preventDefault();  //muy usado en formularios
//         console.log('Enviando Formulario');
//     }
// });