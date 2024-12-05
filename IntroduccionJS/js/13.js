//Combinando objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}
// La idea de combinar objetos con una buena práctica, incluye el no mutar los datos originales de los objetos

const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);