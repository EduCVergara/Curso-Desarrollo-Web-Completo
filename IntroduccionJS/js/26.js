// This
const reservacion = {
    nombre: 'Eduardo',
    apellido: 'Constancio',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es de ${this.total}`);
    } // En este caso no se puede utilizar un arrow function, debido a que un arrow function hace referencia a la ventana global (se puede corroborar con console.log(this). Es por eso que se debe usar una function de manera normal)
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Vegas',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();