// POO

/* Object Literal */

const producto = {
    nombre: "Tablet",
    precio: 500
}

// Object Constructor

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// Crear funciones que se utilizan con un objeto en específico
Producto.prototype.formatearProducto = function () {
    if (this.disponible === true) {
        return `El producto ${this.nombre} tiene un valor de ${this.precio} y está disponible`;
    } else {
        return `El producto ${this.nombre} tiene un valor de ${this.precio}, pero está agotado =(`;
    } 
}
// El object constructor es como un plano desde el cual podemos construir muchos objetos.
// para instanciarlo empezamos como creando una variable con const, let o var
const producto2 = new Producto('Monitor Curvo de 49"', 800, false);
const producto3 = new Producto('Laptop', 300, true);

const cliente1 = new Cliente('Eduardo', 'Constancio');

console.log(producto2);
console.log(producto3);
console.log(cliente1);

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
