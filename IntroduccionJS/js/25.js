

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisor 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];
//Métodos exclusivos para arreglos
//ForEach

carrito.forEach(producto => console.log(producto.nombre));

// map
const arreglo1 = carrito.map(producto => producto.nombre);
console.log(arreglo1);

//¿Cuándo usar ForEach y cuando usar map? Se usa ForEach cuando el fin de iterar sobre el arreglo es imprimirlo en pantalla o usarlo directamente, en cambio si quieres crear un nuevo arreglo deberías usar map, pues ForEach no te crea el nuevo arreglo.


