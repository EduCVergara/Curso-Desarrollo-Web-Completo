//Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// console.log(producto.precio); //Imprime la propiedad del objeto
// console.log(producto['precio']); //Otra forma de imprimir o llegar a la propiedad del objeto

// Agregar o quitar información de ellos

//Agregar
producto.imagen = "imagen.jpg";
//Eliminar
delete producto.disponible;

console.log(producto);