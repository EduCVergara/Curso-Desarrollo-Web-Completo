//Clases en Javascript
class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
    formatearProducto() {
        if (this.disponible === true) {
            return `El producto ${this.nombre} tiene un valor de $ ${this.precio} y está disponible`;
        } else {
            return `El producto ${this.nombre} tiene un valor de $ ${this.precio}, pero está agotado =(`;
        } 
    }
}

class Libro extends Producto {
    constructor(nombre, precio, isbn, disponible) {
        super(nombre, precio, disponible);
        this.isbn = isbn;
    }
    formatearProducto() {
        if (this.disponible === true) {
            return `${super.formatearProducto()}. Su ISBN es ${this.isbn}`;
        } else {
            return `${super.formatearProducto()}. Su ISBN es ${this.isbn}`;
        } 
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, true);
const libro1 = new Libro('JavaScript la revolución', 120, '9128487687168', true);
const libro2 = new Libro('Como agua para chocolate', 80, '6817648129923', false)
console.log(libro1.formatearProducto());
console.log(libro2.formatearProducto());
console.log(producto2.formatearProducto());