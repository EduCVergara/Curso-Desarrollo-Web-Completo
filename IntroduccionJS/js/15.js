//Más métodos de Arrays
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisor 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
]

// ForEach
meses.forEach(function(mes) {
    let mesBuscado = 'Marzo'
    if (mes == mesBuscado) {
        console.log(`${mesBuscado} si existe en este Array!`);
    }
})

// Includes
let resultado = meses.includes('Marzo'); //includes funciona bien con un arreglo plano como 'meses'
console.log(resultado);

// Para arreglos de objetos: Some

resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular'
});

//Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);

//Filter - Sirve para obtener un elemento X según un filtro
resultado = carrito.filter(function(producto) {
    return producto.precio > 400 //Filtra por precios de productos mayores a 400
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular' //Filtra por productos que no sean Celulares
});

console.log(resultado);