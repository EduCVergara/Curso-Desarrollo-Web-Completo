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
console.log(1);

window.addEventListener('load', function() { //load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
})
window.onload = function() {
    console.log(3);
}
document.addEventListener('DOMContentLoaded', function() { // sólo espera por el HTML, pero no espera CSS o imágenes.
    console.log(4)
})

console.log(5);

function imprimir() { 
    console.log(2);
}
// una función normal puede ser llamada dentro 
// del addEventListener para poder usarse, de esta manera quedaría:
addEventListener('load', imprimir);

//Ejemplo de función que se activa al hacer scroll
onscroll = function() {
    console.log('Scrolling...')
}