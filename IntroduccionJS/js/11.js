//Destructuring Objects
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Forma Anterior:
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring objects -- Forma Actual
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);
